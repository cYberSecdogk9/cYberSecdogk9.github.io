+++
title = 'Redsun Windows Defender Zeroday'
date = 2026-04-18T17:57:51Z
draft = false
author = "Wingineer"
cover.image = "images/Redsun-CVE.jpg"
cover.alt = "Redsun CVE"
tags = ["redsun", "windows-defender", "zero-day", "microsoft", "malware"]
categories = ["windows", "security"]
Summary = "Analyse van de RedSun zero-day in Windows Defender en de impact op beveiliging"
+++

# RedSun: Hoe Windows Defender zichzelf aanvalt
*Gepubliceerd: april 2026 | Categorie: Windows Security, Zero-Day, Privilege Escalation*

> **Actief misbruikt, geen patch beschikbaar** — Op het moment van schrijven heeft Microsoft nog geen fix uitgebracht voor RedSun.

---

## Achtergrond

Op **16 april 2026** publiceerde de beveiligingsonderzoeker bekend als **"Chaotic Eclipse"** (GitHub-alias: *Nightmare-Eclipse*) een proof-of-concept (PoC) exploit voor een nieuwe zero-day kwetsbaarheid in Windows Defender, gedoopt **"RedSun"**.

Het is zijn tweede publieke disclosure in twee weken tijd. De eerste — **BlueHammer** — was een vergelijkbare Local Privilege Escalation (LPE) in Defender die werd gepatcht als onderdeel van de April 2026 Patch Tuesday (**CVE-2026-33825**). RedSun maakt gebruik van een volledig andere aanvalsvector en valt **buiten** die fix.

De onderzoeker stelt de disclosures expliciet te hebben gedaan als **protest tegen de manier waarop Microsoft omgaat met beveiligingsonderzoekers** die kwetsbaarheden melden bij het Microsoft Security Response Center (MSRC).

---

## Wat is RedSun?

RedSun is een **Local Privilege Escalation (LPE)** kwetsbaarheid — een aanvaller die al code kan uitvoeren op een systeem (als gewone gebruiker) kan zichzelf opwaarderen naar **SYSTEM-niveau privileges**. Dat is het hoogste rechtniveau in Windows.

### Kernprobleem

De kwetsbaarheid zit in een **logicafout** in de manier waarop Windows Defender omgaat met bestanden die een zogenaamde "cloud tag" hebben. Wanneer Defender zo'n bestand detecteert als kwaadaardig, probeert het de beveiliging te herstellen door het bestand terug te schrijven naar de oorspronkelijke locatie — **zonder te valideren of die locatie ondertussen is omgeleid** via een NTFS junction point (reparse point).

De onderzoeker omschrijft het als volgt in de GitHub-repository:

> *"For whatever stupid and hilarious reason, the antivirus that's supposed to protect decides that it is a good idea to just rewrite the file it found again to its original location."*

De root cause ligt in **`MpSvc.dll`** — de kern van de Malware Protection Engine, geladen door `MsMpEng.exe` — dat geen validatie uitvoert op reparse points tijdens de file remediation fase.

---

## De aanvalsketen (technisch)

RedSun combineert vier legitieme, gedocumenteerde Windows-functionaliteiten op een manier die samen een kritieke kwetsbaarheid vormt. Geen van de afzonderlijke componenten is zelf kwetsbaar.

```
1. Cloud Files API (cldapi.dll)
   └─ Aanvaller registreert een nep cloud sync provider
      en plaatst een speciaal gecraft placeholder-bestand
      met cloud metadata die Defender triggert

2. Opportunistic Lock (OPLOCK)
   └─ Aanvaller plaatst een OPLOCK op het bestand
      om het herstelproces van Defender te pauzeren
      op het juiste moment

3. NTFS Directory Junction (reparse point)
   └─ Terwijl Defender gepauseerd is, vervangt de aanvaller
      de doelmap met een junction naar:
      C:\Windows\System32

4. Defender hervat de schrijfoperatie
   └─ Defender schrijft het aanvallersbestand naar wat
      het denkt de originele locatie te zijn —
      maar schrijft feitelijk naar System32 met SYSTEM-rechten
```

Als doelbestand gebruikt de PoC **`TieringEngineService.exe`**, een legitiem Windows service binary in System32. Nadat dit is overschreven, voert de aanvaller het uit en heeft SYSTEM-niveau toegang.

### Bevestiging

**Will Dormann**, principal vulnerability analyst bij Tharros, heeft de exploit getest en bevestigd:

> *"This works ~100% reliably to go from unprivileged user to SYSTEM against Windows 11 and Windows Server 2019+ with April 2026 updates, as well as Windows 10, as long as you have Windows Defender enabled. Any system that has cldapi.dll should be affected."*

---

## Getroffen systemen

| Platform | Kwetsbaar |
|---|---|
| Windows 10 (alle versies met Defender) | Ja |
| Windows 11 (incl. volledig gepatcht, april 2026) | Ja |
| Windows Server 2019 en later | Ja |
| Systemen zonder `cldapi.dll` | Nee |
| Systemen met uitgeschakelde "Cloud-Delivered Protection" | Mogelijk minder kwetsbaar* |

*\*De aanval maakt gebruik van cloud file-metadata; het uitschakelen van cloud-bescherming kan de triggercondities beïnvloeden, maar biedt geen volledige mitigatie.*

---

## Verhouding tot BlueHammer

| | BlueHammer | RedSun |
|---|---|---|
| Onderzoeker | Chaotic Eclipse | Chaotic Eclipse |
| Type | LPE (Local Privilege Escalation) | LPE (Local Privilege Escalation) |
| CVE | CVE-2026-33825 | Geen (op dit moment) |
| Gepatcht | Ja (april 2026 Patch Tuesday) | Nee |
| Aanvalsvector | Anders | Cloud Files API + OPLOCK + junction |
| PoC publiek | Ja | Ja (GitHub) |

---

## Actief misbruik

Kort na de publieke disclosure meldde beveiligingsbedrijf **Huntress** dat RedSun al actief wordt ingezet in echte aanvallen. Waargenomen indicatoren:

- Bestanden zoals `RedSun.exe` en `FunnyApp.exe` in gebruikerstoegankelijke mappen (`Downloads`, `Pictures`)
- Systeemenumeratiecommando's uitgevoerd na privilege escalatie
- Combinatie met BlueHammer en een tool genaamd "UnDefend"

---

## Detectie

**Microsoft Defender detecteert de exploit momenteel niet.** Dormann stelde vast dat de PoC-executable wordt herkend door sommige antivirusprogramma's op VirusTotal vanwege een ingebedde EICAR-teststring — maar dat bij encryptie van die string de detectie wegvalt, terwijl de werking intact blijft.

### Detectie-indicatoren voor SOC/blue team

- Onverwachte registratie van cloud sync providers op endpoints
- Gebruik van `cldapi.dll` gevolgd door schrijfoperaties naar `C:\Windows\System32`
- Wijzigingen aan `TieringEngineService.exe` of andere System32-binaries
- NTFS reparse point / junction activiteit vanuit gebruikersprocessen
- Onverwacht opstarten van `TieringEngineService.exe` of vergelijkbare services

---

## Mitigaties (geen patch beschikbaar)

Omdat Microsoft nog geen fix heeft uitgebracht, zijn de opties beperkt. Aanbevolen maatregelen:

1. **Monitoring**: Alert op abnormale Defender-schrijfactiviteit richting `C:\Windows\System32`
2. **Attack Surface Reduction (ASR) rules**: Schakel relevante ASR-regels in om veelgebruikte aanvalspaden te beperken
3. **Least privilege**: Beperk initiële toegang — RedSun vereist dat een aanvaller al code kan uitvoeren als gewone gebruiker
4. **EDR/XDR**: Zorg dat endpoint detection tools reparse point-manipulaties kunnen signaleren
5. **Netwerksegmentatie**: Beperk laterale beweging na een eventuele privilege escalatie

> **Let op:** Uitschakelen van Windows Defender wordt niet aanbevolen als mitigatie — dit introduceert grotere beveiligingsrisico's dan de kwetsbaarheid zelf.

---

## De bredere context: onderzoeker vs. Microsoft

De timing en toon van de disclosure zijn opvallend. Chaotic Eclipse heeft BlueHammer wél eerst aan Microsoft gemeld. Nadat Microsoft die patch uitbracht (CVE-2026-33825) zonder — naar de mening van de onderzoeker — adequaat te communiceren, werd RedSun direct publiek gedisclosed, zonder voorafgaande melding bij MSRC.

Dit roept bredere vragen op over **Coordinated Vulnerability Disclosure (CVD)**: wat gebeurt er als de relatie tussen onderzoeker en vendor verslechtert? De publieke release van een werkende exploit voor een niet-gepatcht systeem stelt miljoenen gebruikers bloot aan risico — ongeacht de motivatie van de onderzoeker.

Microsoft heeft op het moment van schrijven **geen officiële reactie** gegeven op RedSun.

---

## Conclusie

RedSun is een serieuze kwetsbaarheid. Niet omdat het op afstand uitbuiting mogelijk maakt — dat doet het niet — maar omdat het aantoont dat het vertrouwde beveiligingsmechanisme van Windows zelf als aanvalsprimitive kan worden ingezet. Een aanvaller die via phishing, een malafide download of een browserexploit initiële toegang verkrijgt, kan met RedSun vrijwel zeker SYSTEM-rechten bemachtigen op elk modern, volledig gepatcht Windows-systeem.

De ironie is niet te missen: **de tool die je moet beschermen, wordt het aanvalswapen.**

Houd de Microsoft Security Update Guide in de gaten voor een noodpatch.

---

*Bronnen: BleepingComputer, CSO Online, CyberInsider, CyberSecurityNews, CloudSEK, GitHub (Nightmare-Eclipse/RedSun), Huntress*

*CVE-referentie (voorganger): CVE-2026-33825 (BlueHammer) | RedSun: geen CVE op moment van publicatie*
