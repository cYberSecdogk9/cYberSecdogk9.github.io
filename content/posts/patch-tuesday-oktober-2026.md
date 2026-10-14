+++
title = "Patch Tuesday Oktober 2026 — 1407 CVE's, 66 Critical"
date = 2026-10-14T00:00:00Z
draft = false
author = "Wingineer"
tags = ["patch-tuesday", "microsoft", "cve", "security", "windows", "office", "exchange"]
categories = ["Patch Tuesday", "Security"]
description = "Microsoft patchte op 14 oktober 2026 in totaal 1407 kwetsbaarheden, waarvan 66 met de classificatie Critical. Grote aantallen RCE's in Windows, Office/365 en Exchange Server."
summary = "Oktober 2026 Patch Tuesday: 1407 CVE's (66 Critical, 1334 Important). Zware maand voor Windows, Office/365 en Exchange Server. Overzicht van alle kritieke kwetsbaarheden."
+++

## Overzicht

Op 14 oktober 2026 heeft Microsoft de maandelijkse beveiligingsupdates uitgebracht. Deze maand zijn in totaal **1407 kwetsbaarheden** verholpen, waarvan:

- **66 Critical**
- **1334 Important**
- **7 overige** (inclusief 1 item geclassificeerd als "Not a Vulnerability")

De meest getroffen impactcategorieën:

| Impacttype | Aantal |
|---|---|
| Elevation of Privilege | 672 |
| Remote Code Execution | 312 |
| Information Disclosure | 249 |
| Denial of Service | 72 |
| Security Feature Bypass | 40 |
| Tampering | 29 |
| Spoofing | 27 |

Dit is een uitzonderlijk zware Patch Tuesday. Prioriteit voor patchen: Windows Server-omgevingen, Exchange Server en systemen met Microsoft Office/365.

---

## Kritieke kwetsbaarheden

De tabel hieronder toont alle 66 CVE's met de classificatie **Critical**. Base Scores zijn niet opgenomen in de MSRC-export; raadpleeg de MSRC-pagina per CVE voor de actuele CVSS-score.

| Product | CVE | Base Score | Type |
|---|---|---|---|
| Windows 10 / Windows 11 / Windows Server | CVE-2026-100202 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-100209 | n/b | Remote Code Execution |
| Microsoft Office / 365 / Office Online Server | CVE-2026-100210 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-100211 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-100215 | n/b | Remote Code Execution |
| Windows 11 / Windows Server | CVE-2026-100219 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-100220 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-102211 | n/b | Elevation of Privilege |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-102214 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-102225 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-102855 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-102856 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-102857 | n/b | Remote Code Execution |
| SharePoint | CVE-2026-102866 | n/b | Elevation of Privilege |
| .NET / Visual Studio / Windows 11 / Windows Server | CVE-2026-105016 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-105733 | n/b | Remote Code Execution |
| Windows 11 / Windows Server | CVE-2026-108130 | n/b | Elevation of Privilege |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-108131 | n/b | Spoofing |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-108399 | n/b | Elevation of Privilege |
| Windows Store Apps (HEVC) | CVE-2026-108400 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-108457 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-108460 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-108467 | n/b | Remote Code Execution |
| Windows 10 / Windows Server | CVE-2026-108471 | n/b | Elevation of Privilege |
| Linux (Microsoft MANA Driver) | CVE-2026-62840 | n/b | Elevation of Privilege |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-69789 | n/b | Remote Code Execution |
| Windows Server | CVE-2026-69802 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-70147 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-70153 | n/b | Remote Code Execution |
| Windows Server | CVE-2026-70187 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-70229 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-70242 | n/b | Remote Code Execution |
| Windows Server | CVE-2026-70250 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-70269 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-70291 | n/b | Remote Code Execution |
| Exchange Server | CVE-2026-70571 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-83917 | n/b | Elevation of Privilege |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-83934 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-88073 | n/b | Elevation of Privilege |
| Windows 11 | CVE-2026-88074 | n/b | Elevation of Privilege |
| Windows Server | CVE-2026-88117 | n/b | Remote Code Execution |
| Windows Server | CVE-2026-88119 | n/b | Remote Code Execution |
| Windows Server | CVE-2026-88120 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-88156 | n/b | Remote Code Execution |
| Windows 10 / Windows Server | CVE-2026-88171 | n/b | Remote Code Execution |
| Windows 10 / Windows Server | CVE-2026-88174 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-88178 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-88185 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-88207 | n/b | Remote Code Execution |
| Windows Store Apps (Raw Image Extension) | CVE-2026-96202 | n/b | Remote Code Execution |
| .NET / Visual Studio / Windows 10 / Windows Server | CVE-2026-96222 | n/b | Spoofing |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-96913 | n/b | Elevation of Privilege |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-96914 | n/b | Elevation of Privilege |
| Windows 10 / Windows Server | CVE-2026-96934 | n/b | Remote Code Execution |
| Windows Store Apps (Raw Image Extension) | CVE-2026-96943 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-96952 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-97016 | n/b | Remote Code Execution |
| Microsoft Office / 365 / Office Online Server | CVE-2026-97739 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-97745 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-97749 | n/b | Remote Code Execution |
| Microsoft Office / 365 / Office Online Server / SharePoint | CVE-2026-97755 | n/b | Remote Code Execution |
| Microsoft Office / 365 | CVE-2026-97759 | n/b | Remote Code Execution |
| Microsoft Office / 365 / Office Online Server | CVE-2026-97765 | n/b | Remote Code Execution |
| Microsoft Office / 365 / Office Online Server | CVE-2026-97778 | n/b | Remote Code Execution |
| Microsoft Office / 365 / Office Online Server | CVE-2026-97780 | n/b | Remote Code Execution |
| Windows 10 / Windows 11 / Windows Server | CVE-2026-97814 | n/b | Remote Code Execution |

---

## Aandachtspunten

**CVE-2026-105016** — RCE in .NET 8–11 en Visual Studio, ook van toepassing op Windows Server 2022/2025. Al eerder in deze blog besproken als onderdeel van de september-cyclus; de oktober-update bevat een herziene fix. Controleer of `.NET`-runtime en SDK up-to-date zijn op build- en productieservers.

**CVE-2026-70571** — RCE in Exchange Server. Exchange-omgevingen zijn traditioneel een prioritair doelwit. Patch Exchange zo snel mogelijk of isoleer outbound access tot de update is doorgevoerd.

**CVE-2026-102866 / CVE-2026-97755** — Kritieke kwetsbaarheden in SharePoint, inclusief een gecombineerde Office/SharePoint-RCE. Omgevingen met on-premises SharePoint vereisen directe actie.

**CVE-2026-108131** — Kritieke Spoofing in alle Windows-versies (10, 11, Server). Brede impact over de gehele Windows-vloot.

**CVE-2026-62840** — EoP in de Microsoft MANA network driver voor Linux. Relevant voor Azure-omgevingen met Linux-VM's op Microsoft-hardware.

---

## Actieplan

1. **Windows Server** (37 critical CVE's) — Prioriteit 1. Deploy de oktober cumulative update op alle Server 2019/2022/2025-systemen.
2. **Exchange Server** (CVE-2026-70571) — Prioriteit 1. RCE zonder user interaction is direct actie vereist.
3. **SharePoint** — Prioriteit 1 voor on-premises deployments.
4. **Microsoft Office / 365** (22 critical CVE's) — Plan een gefaseerde update voor kantoorsystemen. Microsoft 365 Apps worden doorgaans automatisch bijgewerkt.
5. **Windows 10/11 werkstations** — Prioriteit 2, via Windows Update/WSUS/Intune.
6. **.NET runtime & SDK** — Controleer versies op build-servers en applicatieservers.

---

*Bron: Microsoft Security Response Center (MSRC) — oktober 2026 Patch Tuesday release.*
