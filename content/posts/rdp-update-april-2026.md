+++
title = 'Rdp Client Update April 2026'
date = 2026-04-18T13:34:14Z
draft = false
author = "Wingineer"
cover.image = "images/rdp-client-cover.jpg"
cover.alt = "RDP client CVE"
categories = ["windows", "security"]
tags = ["rdp", "patch", "microsoft"]
summary = "Analyse van de nieuwe RDP client update"
+++
# Microsoft versterkt beveiliging van RDP-bestanden: Wat je moet weten

*Gepubliceerd: april 2026 | Categorie: Windows Security, Patch Tuesday*

---

## Inleiding

Als onderdeel van de **April 2026 Patch Tuesday** heeft Microsoft een significante beveiligingsverbetering doorgevoerd voor het Remote Desktop Protocol (RDP). De update richt zich op een aanvalsvector die de afgelopen jaren steeds vaker wordt misbruikt: kwaadaardige `.rdp`-bestanden verspreid via phishing-e-mails.

De wijziging is gekoppeld aan **CVE-2026-26151**, geclassificeerd als een *Remote Desktop Spoofing Vulnerability*.

---

## Betrokken updates

| Besturingssysteem | KB-nummer |
|---|---|
| Windows 11 (25H2 / 24H2) | KB5083769 |
| Windows 11 (ouder) | KB5082052 |
| Windows 10 | KB5082200 |
| Windows Server 2022 | KB5082142 |
| Windows Server 2019 / 2016 / 2012 | Vergelijkbare cumulatieve updates |

De update is van toepassing op **alle ondersteunde versies van Windows** die beveiligingsupdates ontvangen in april 2026.

---

## Wat is het probleem?

Een `.rdp`-bestand is in essentie een tekstbestand dat de Remote Desktop Connection-client (`mstsc.exe`) instrueert hoe verbinding moet worden gemaakt met een externe computer. Naast de verbindingsinstellingen kan zo'n bestand ook lokale resources — zoals schijven, klembord, camera's en smartcards — doorsturen naar de externe machine.

**Dit maakt RDP-bestanden gevaarlijk in de verkeerde handen.** Aanvallers kunnen een RDP-bestand e-mailen aan slachtoffers. Zodra het slachtoffer dubbelklikt, maakt Windows automatisch verbinding met een server van de aanvaller — en deelt lokale resources.

### Bekende misbruikgevallen

- **APT29** (Russische staatshackers, ook bekend als Cozy Bear) heeft RDP-bestanden ingezet in gerichte phishing-campagnes om data en credentials te stelen.
- `.rdp`-bestanden omzeilen traditionele beveiligingsfilters omdat het geen uitvoerbare bestanden zijn (geen `.exe` of `.dll`), maar configuratiebestanden.

---

## Wat verandert er met de update?

### 1. Eerste-keer waarschuwingsdialoog

De **eerste keer** dat een gebruiker een `.rdp`-bestand opent na het installeren van de update, verschijnt een informatief dialoogvenster. Dit legt uit wat RDP-bestanden zijn, welke risico's ze meebrengen, en vraagt de gebruiker expliciet toestemming. Dit dialoogvenster verschijnt daarna niet meer.

### 2. Beveiligingsdialoog bij elke verbinding

**Bij elke opening van een RDP-bestand** verschijnt voortaan een beveiligingsdialoog voordat er ook maar een verbinding wordt opgezet. Dit dialoogvenster toont:

- Het adres van de externe computer
- Een lijst van alle **redirections** (resource-doorstuurverzoeken) die het bestand aanvraagt
- Per redirection een **uitgeschakeld selectievakje** — de gebruiker moet elke doorstuur **actief inschakelen**

> **Alle redirections staan standaard UIT.** Dit is de belangrijkste beveiligingswijziging.

### 3. Onderscheid tussen ondertekende en niet-ondertekende bestanden

| Type bestand | Dialoogvenster |
|---|---|
| **Niet digitaal ondertekend** | Banner: *"Caution: Unknown remote connection"*, Publisher: "Unknown publisher" |
| **Digitaal ondertekend** | Banner: *"Verify the publisher of this remote connection"*, naam van publisher zichtbaar |

**Belangrijk:** Een digitale handtekening bewijst wie het bestand heeft gemaakt, maar **niet** dat het bestand veilig is. Aanvallers kunnen bestanden ondertekenen met namen die sterk lijken op legitieme organisaties.

### 4. Mark of the Web-controle

De Remote Desktop-client controleert nu het **Mark of the Web** (MotW) attribuut — metadata die Windows toevoegt aan bestanden die van het internet komen of via e-mail zijn ontvangen. Wanneer dit attribuut aanwezig is, worden aanvullende beveiligingscontroles geactiveerd.

---

## Overzicht van redirections en risico's

| Redirection | Wat het doet | Risico |
|---|---|---|
| **Schijven** | Lokale schijven toegankelijk voor de remote computer | Bestanden stelen, malware planten, networkshares bereiken |
| **Klembord** | Kopieerpasta-inhoud gedeeld | Wachtwoorden en gevoelige tekst uitlezen |
| **Smartcard / Windows Hello** | Authenticatiecredentials doorgestuurd | Impersonatie van de gebruiker |
| **WebAuthn / FIDO2** | Passkeys en beveiligingssleutels doorgestuurd | Phishing via authenticatieomleiding |
| **Microfoon** | Audio opgenomen door remote systeem | Afluisteren van gesprekken |
| **Camera** | Video opgenomen door remote systeem | Visuele surveillance |
| **Locatie** | Fysieke locatie gedeeld | Locatiebepaling van gevoelig personeel |
| **Printers** | Lokale printers beschikbaar | Ongewenste printjobs |
| **Poorten (COM/LPT)** | Seriële/parallelle poorten gedeeld | Toegang tot verbonden hardware |
| **RemoteFX USB** | Diepgaande USB-toegang | Toegang tot authenticatietokens en opslag |

---

## Beheerders: wat moet je weten?

### Tijdelijk uitschakelen (niet aanbevolen)

Beheerders kunnen de nieuwe dialogen tijdelijk uitschakelen via de registry:

```
HKLM\Software\Policies\Microsoft\Windows NT\Terminal Services\Client
Waarde: RedirectionWarningDialogVersion = 1 (REG_DWORD)
```

Om ook de eerste-keer dialoog te onderdrukken per gebruiker:

```
HKCU\Software\Microsoft\Terminal Server Client
Waarde: RdpLaunchConsentAccepted = 1 (REG_DWORD)
```

> **Microsoft waarschuwt expliciet** dat toekomstige updates deze rollback-opties kunnen verwijderen. Het wordt sterk afgeraden deze bescherming uit te schakelen.

### Aanbevolen acties voor organisaties

1. **Test de update** in een acceptatieomgeving vóór uitrol, met name als `.rdp`-bestanden deel uitmaken van werkprocessen.
2. **Onderteken interne RDP-bestanden** digitaal, zodat gebruikers de publisher kunnen verifiëren.
3. **Communiceer met eindgebruikers** over de nieuwe dialogen om verwarring en onnodige helpdeskoproepen te voorkomen.
4. **Controleer Group Policy** en overweeg vertrouwde publishers centraal te configureren via GPO.

---

## Historische context

Microsoft heeft RDP-beveiliging in het verleden voornamelijk op netwerkniveau aangepakt: via **Network Level Authentication (NLA)** en **Restricted Admin Mode**. De April 2026-update is de **eerste client-side interventie op bestandsuitvoeringsniveau**. Dit erkent dat sociale manipulatie (social engineering) niet kan worden tegengehouden door netwerkbeveiligingsmaatregelen alleen.

---

## Conclusie

De RDP-beveiligingsupdate van april 2026 is een welkome en pragmatische verbetering. Door alle resource-doorstuurverzoeken standaard uit te zetten en gebruikers te informeren vóórdat er verbinding wordt gemaakt, pakt Microsoft de menselijke factor aan in RDP-aanvallen. De wijziging vereist enige aanpassing in organisaties die veel met `.rdp`-bestanden werken, maar de beveiligingswinst is aanzienlijk.

**Voor eindgebruikers geldt als vuistregel:** open nooit een `.rdp`-bestand dat je niet verwachtte, en schakel alleen de doorstuurmogelijkheden in die je daadwerkelijk nodig hebt.

---

*Bronnen: Microsoft Security Response Center (CVE-2026-26151), Microsoft Learn – Understanding security warnings when opening Remote Desktop files, BleepingComputer, Neowin, Thurrott.com*
