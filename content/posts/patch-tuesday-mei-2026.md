+++
title = 'Patch Tuesday Mei 2026'
date = 2026-05-12T00:00:00Z
draft = false
author = "Wingineer"
tags = ["patch-tuesday", "microsoft", "cve", "security", "windows", "azure"]
categories = ["patch-tuesday", "security"]
cover.image = "images/PatchTuesday.jpg"
cover.alt = "PatchTuesday"
description = "Overzicht van alle CVE's uit de Microsoft Patch Tuesday van mei 2026, inclusief kritieke kwetsbaarheden in Azure, Windows en Office."
summary = "Microsoft heeft op 12 mei 2026 de maandelijkse beveiligingsupdates uitgebracht. Dit overzicht bevat alle gepatchte kwetsbaarheden, gesorteerd op ernst."
+++

## Inleiding

Vandaag, 12 mei 2026, heeft Microsoft de maandelijkse Patch Tuesday uitgebracht. Deze maand worden er een groot aantal kwetsbaarheden gepatcht, verspreid over Windows, Azure, Microsoft Office en diverse andere producten. Hieronder vind je een volledig overzicht van alle CVE's.

De updates zijn beschikbaar via Windows Update en het [Microsoft Security Update Guide](https://msrc.microsoft.com/update-guide/).

---

## Kritieke kwetsbaarheden (score ≥ 9.0)

Onderstaande CVE's verdienen directe aandacht vanwege hun hoge CVSS-score.

| Product | CVE | Base Score |
|---------|-----|-----------|
| Azure DevOps | CVE-2026-42826 | **10.0** |
| Azure Managed Instance for Apache Cassandra | CVE-2026-33109 | 9.9 |
| Azure Logic Apps | CVE-2026-42823 | 9.9 |
| Microsoft Dynamics 365 (on-premises) | CVE-2026-42898 | 9.9 |
| Windows Hyper-V | CVE-2026-40402 | 9.3 |
| Azure Entra ID | CVE-2026-40379 | 9.3 |
| Azure SDK | CVE-2026-33117 | 9.1 |
| Microsoft SSO Plugin for Jira & Confluence | CVE-2026-41103 | 9.1 |
| Microsoft Dynamics 365 (on-premises) | CVE-2026-42833 | 9.1 |
| Azure Managed Instance for Apache Cassandra | CVE-2026-33844 | 9.0 |
| Windows Netlogon | CVE-2026-41089 | 9.8 |
| Microsoft Windows DNS | CVE-2026-41096 | 9.8 |

> ⚠️ **CVE-2026-42826** (Azure DevOps) en **CVE-2026-41089** (Netlogon) hebben de maximale score van 9.8 of hoger — patch deze zo snel mogelijk.

---

## Volledig CVE-overzicht

| Product | CVE | Base Score |
|---------|-----|-----------|
| Windows Rich Text Edit | CVE-2026-21530 | 6.7 |
| M365 Copilot | CVE-2026-26129 | 7.5 |
| M365 Copilot | CVE-2026-26164 | 7.5 |
| Windows Native WiFi Miniport Driver | CVE-2026-32161 | 7.5 |
| Windows Rich Text Edit Control | CVE-2026-32170 | 6.7 |
| .NET | CVE-2026-32175 | 4.3 |
| .NET | CVE-2026-32177 | 7.3 |
| Microsoft Teams | CVE-2026-32185 | 5.5 |
| Azure Monitor Agent | CVE-2026-32204 | 7.8 |
| Azure Machine Learning | CVE-2026-32207 | 8.8 |
| Windows Filtering Platform (WFP) | CVE-2026-32209 | 4.4 |
| Azure Managed Instance for Apache Cassandra | CVE-2026-33109 | 9.9 |
| Microsoft Office SharePoint | CVE-2026-33110 | 8.8 |
| Copilot Chat (Microsoft Edge) | CVE-2026-33111 | 7.5 |
| Microsoft Office SharePoint | CVE-2026-33112 | 8.8 |
| Azure SDK | CVE-2026-33117 | 9.1 |
| Microsoft Dynamics 365 Customer Insights | CVE-2026-33821 | 7.7 |
| Microsoft Teams | CVE-2026-33823 | 9.6 |
| Azure Machine Learning | CVE-2026-33833 | 8.2 |
| Windows Event Logging Service | CVE-2026-33834 | 7.8 |
| Windows Cloud Files Mini Filter Driver | CVE-2026-33835 | 7.8 |
| Windows TCP/IP | CVE-2026-33837 | 7.8 |
| Windows Message Queuing | CVE-2026-33838 | 7.8 |
| Windows Win32K - GRFX | CVE-2026-33839 | 7.0 |
| Windows Win32K - ICOMP | CVE-2026-33840 | 7.8 |
| Windows Kernel | CVE-2026-33841 | 7.8 |
| Azure Managed Instance for Apache Cassandra | CVE-2026-33844 | 9.0 |
| Microsoft Partner Center | CVE-2026-34327 | 8.2 |
| Windows Message Queuing | CVE-2026-34329 | 8.8 |
| Windows Win32K - GRFX | CVE-2026-34330 | 7.8 |
| Windows Win32K - GRFX | CVE-2026-34331 | 7.0 |
| Windows Kernel-Mode Drivers | CVE-2026-34332 | 8.0 |
| Windows Win32K - GRFX | CVE-2026-34333 | 7.8 |
| Windows TCP/IP | CVE-2026-34334 | 7.8 |
| Windows DWM Core Library | CVE-2026-34336 | 7.8 |
| Windows Cloud Files Mini Filter Driver | CVE-2026-34337 | 7.8 |
| Windows Telephony Service | CVE-2026-34338 | 7.8 |
| Windows LDAP | CVE-2026-34339 | 5.5 |
| Windows Projected File System | CVE-2026-34340 | 7.0 |
| Windows Link-Layer Discovery Protocol (LLDP) | CVE-2026-34341 | 7.0 |
| Windows Print Spooler Components | CVE-2026-34342 | 7.0 |
| Windows Application Identity (AppID) Subsystem | CVE-2026-34343 | 7.8 |
| Windows Ancillary Function Driver for WinSock | CVE-2026-34344 | 7.8 |
| Windows Ancillary Function Driver for WinSock | CVE-2026-34345 | 7.0 |
| Windows Win32K - GRFX | CVE-2026-34347 | 7.0 |
| Windows Storport Miniport Driver | CVE-2026-34350 | 6.5 |
| Windows TCP/IP | CVE-2026-34351 | 7.8 |
| Windows Storage Spaces Controller | CVE-2026-35415 | 7.8 |
| Windows Ancillary Function Driver for WinSock | CVE-2026-35416 | 7.0 |
| Windows Win32K - ICOMP | CVE-2026-35417 | 7.8 |
| Windows Cloud Files Mini Filter Driver | CVE-2026-35418 | 7.8 |
| Windows DWM Core Library | CVE-2026-35419 | 5.5 |
| Windows Kernel | CVE-2026-35420 | 7.8 |
| Windows GDI | CVE-2026-35421 | 7.8 |
| Windows TCP/IP | CVE-2026-35422 | 6.5 |
| Telnet Client | CVE-2026-35423 | 5.4 |
| Windows Internet Key Exchange (IKE) Protocol | CVE-2026-35424 | 7.5 |
| Azure Cloud Shell | CVE-2026-35428 | 9.6 |
| Microsoft Edge for Android | CVE-2026-35429 | 4.3 |
| .NET | CVE-2026-35433 | 7.3 |
| Azure AI Foundry M365 published agents | CVE-2026-35435 | 8.6 |
| Microsoft Office Click-To-Run | CVE-2026-35436 | 8.8 |
| Windows Admin Center | CVE-2026-35438 | 8.3 |
| Microsoft Office SharePoint | CVE-2026-35439 | 8.8 |
| Microsoft Office Word | CVE-2026-35440 | 5.5 |
| Microsoft Office SharePoint | CVE-2026-40357 | 8.8 |
| Microsoft Office | CVE-2026-40358 | 8.4 |
| Microsoft Office Excel | CVE-2026-40359 | 7.8 |
| Microsoft Office Excel | CVE-2026-40360 | 7.8 |
| Microsoft Office Word | CVE-2026-40361 | 8.4 |
| Microsoft Office Excel | CVE-2026-40362 | 7.8 |
| Microsoft Office | CVE-2026-40363 | 8.4 |
| Microsoft Office Word | CVE-2026-40364 | 8.4 |
| Microsoft Office SharePoint | CVE-2026-40365 | 8.8 |
| Microsoft Office Word | CVE-2026-40366 | 8.4 |
| Microsoft Office Word | CVE-2026-40367 | 8.4 |
| Microsoft Office SharePoint | CVE-2026-40368 | 8.0 |
| Windows Kernel | CVE-2026-40369 | 7.8 |
| SQL Server | CVE-2026-40370 | 8.8 |
| Power Automate | CVE-2026-40374 | 6.5 |
| Windows Cryptographic Services | CVE-2026-40377 | 7.8 |
| Azure Entra ID | CVE-2026-40379 | 9.3 |
| Windows Volume Manager Extension Driver | CVE-2026-40380 | 6.2 |
| Azure Connected Machine Agent | CVE-2026-40381 | 7.8 |
| Windows Telephony Service | CVE-2026-40382 | 7.8 |
| Windows Common Log File System Driver | CVE-2026-40397 | 7.8 |
| Windows Remote Desktop | CVE-2026-40398 | 7.8 |
| Windows TCP/IP | CVE-2026-40399 | 7.8 |
| Windows TCP/IP | CVE-2026-40401 | 7.1 |
| Windows Hyper-V | CVE-2026-40402 | 9.3 |
| Windows Win32K - GRFX | CVE-2026-40403 | 8.8 |
| Windows TCP/IP | CVE-2026-40405 | 7.5 |
| Windows TCP/IP | CVE-2026-40406 | 7.5 |
| Windows Common Log File System Driver | CVE-2026-40407 | 7.8 |
| Windows Kernel-Mode Drivers | CVE-2026-40408 | 7.8 |
| Windows SMB Client | CVE-2026-40410 | 7.0 |
| Windows TCP/IP | CVE-2026-40413 | 7.4 |
| Windows TCP/IP | CVE-2026-40414 | 7.4 |
| Windows TCP/IP | CVE-2026-40415 | 8.1 |
| Microsoft Edge (Chromium-based) | CVE-2026-40416 | 4.3 |
| Dynamics Business Central | CVE-2026-40417 | 7.8 |
| Microsoft Office Click-To-Run | CVE-2026-40418 | 7.8 |
| Microsoft Office | CVE-2026-40419 | 7.8 |
| Microsoft Office Click-To-Run | CVE-2026-40420 | 8.8 |
| Microsoft Office Word | CVE-2026-40421 | 4.3 |
| Windows Admin Center | CVE-2026-41086 | 8.8 |
| Windows Ancillary Function Driver for WinSock | CVE-2026-41088 | 7.8 |
| Windows Netlogon | CVE-2026-41089 | 9.8 |
| Microsoft Data Formulator | CVE-2026-41094 | 8.8 |
| Data Deduplication | CVE-2026-41095 | 7.8 |
| Microsoft Windows DNS | CVE-2026-41096 | 9.8 |
| Windows Secure Boot | CVE-2026-41097 | 6.7 |
| M365 Copilot | CVE-2026-41100 | 4.4 |
| Microsoft Office Word | CVE-2026-41101 | 7.1 |
| Microsoft Office PowerPoint | CVE-2026-41102 | 7.1 |
| Microsoft SSO Plugin for Jira & Confluence | CVE-2026-41103 | 9.1 |
| Azure Notification Service | CVE-2026-41105 | 8.1 |
| Microsoft Edge (Chromium-based) | CVE-2026-41107 | 7.4 |
| GitHub Copilot and Visual Studio | CVE-2026-41109 | 8.8 |
| Visual Studio Code | CVE-2026-41610 | 6.3 |
| Visual Studio Code | CVE-2026-41611 | 7.8 |
| Visual Studio Code | CVE-2026-41612 | 5.5 |
| Visual Studio Code | CVE-2026-41613 | 8.8 |
| M365 Copilot for Desktop | CVE-2026-41614 | 6.2 |
| Azure Logic Apps | CVE-2026-42823 | 9.9 |
| Windows Telephony Service | CVE-2026-42825 | 7.0 |
| Azure DevOps | CVE-2026-42826 | **10.0** |
| Azure Monitor Agent | CVE-2026-42830 | 6.5 |
| Microsoft Office | CVE-2026-42831 | 7.8 |
| Microsoft Office | CVE-2026-42832 | 7.7 |
| Microsoft Dynamics 365 (on-premises) | CVE-2026-42833 | 9.1 |
| Microsoft Edge (Chromium-based) | CVE-2026-42838 | 5.4 |
| Microsoft Edge (Chromium-based) | CVE-2026-42891 | 6.5 |
| M365 Copilot | CVE-2026-42893 | 7.4 |
| Windows DWM Core Library | CVE-2026-42896 | 7.8 |
| Microsoft Dynamics 365 (on-premises) | CVE-2026-42898 | 9.9 |
| ASP.NET Core | CVE-2026-42899 | 7.5 |

---

## Aanbevelingen

- Installeer de updates zo snel mogelijk via **Windows Update** of **WSUS/SCCM**.
- Prioriteer systemen met Azure DevOps, Netlogon, Windows DNS en Hyper-V.
- Controleer of je SharePoint-omgeving up-to-date is — meerdere kritieke CVE's raken SharePoint.
- Bekijk de volledige details per CVE via het [Microsoft Security Update Guide](https://msrc.microsoft.com/update-guide/).

---


