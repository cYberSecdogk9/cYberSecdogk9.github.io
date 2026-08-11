+++
title = "Patch Tuesday Augustus 2026"
date = 2026-08-11T00:00:00Z
draft = false
author = "Wingineer"
cover.image = "images/PatchTuesday.jpg"
cover.alt = "PatchTuesday"
tags = ["patch-tuesday", "microsoft", "cve", "security", "windows"]
categories = ["Patch Tuesday", "Security"]
description = "Overzicht van alle CVE's uit de Microsoft Patch Tuesday van augustus 2026 — een omvangrijke update met tientallen kritieke kwetsbaarheden in Office, Windows DNS, Exchange, SharePoint en meer."
summary = "Augustus 2026 is een zware Patch Tuesday: meer dan 280 CVE's, waarvan tientallen kritiek. Opvallend zijn de massale Excel- en Office-patches, meerdere kritieke DNS Server RCE's en een kritieke AD CS RCE. Prioriteit voor elke Windows-beheerder."
+++

## Inleiding

Microsoft heeft op 11 augustus 2026 de maandelijkse beveiligingsupdates uitgebracht. Deze Patch Tuesday is uitzonderlijk omvangrijk: meer dan 280 CVE's, met tientallen als Critical geclassificeerd. Opvallende aandachtsgebieden zijn Microsoft Office (met name Excel en Word), Windows DNS Server, SharePoint, Exchange en de Remote Desktop Client.

De updates zijn beschikbaar via Windows Update en het [Microsoft Security Update Guide](https://msrc.microsoft.com/update-guide/).

---

## Kritieke kwetsbaarheden

Dit zijn de CVE's met een Critical-classificatie die directe aandacht vereisen.

### Windows DNS Server — Meerdere kritieke RCE's

Vier kritieke Remote Code Execution-kwetsbaarheden in Windows DNS Server:

- **CVE-2026-62878** — Windows DNS Server Remote Code Execution
- **CVE-2026-62820** — Windows DNS Server Remote Code Execution
- **CVE-2026-62817** — Windows DNS Server Remote Code Execution
- **CVE-2026-65789** — Windows DNS Server Remote Code Execution

DNS-servers zijn in vrijwel elke omgeving aanwezig en vaak direct bereikbaar vanuit het interne netwerk. Patch deze systemen met prioriteit.

---

### Microsoft Office — Massale golf van kritieke RCE's

Een uitzonderlijk groot aantal kritieke RCE-kwetsbaarheden in Office-componenten:

**Excel (Critical RCE):**
- CVE-2026-68816, CVE-2026-68804, CVE-2026-68794

**Office Graphics Component (Critical RCE):**
- CVE-2026-66807, CVE-2026-63526, CVE-2026-63519, CVE-2026-63513, CVE-2026-65664

**Office algemeen (Critical RCE):**
- CVE-2026-70130, CVE-2026-64911, CVE-2026-64910, CVE-2026-64909, CVE-2026-64903, CVE-2026-64898, CVE-2026-63532, CVE-2026-63515, CVE-2026-65657, CVE-2026-65656 (Important)

**Office Word (Critical RCE):**
- CVE-2026-64907, CVE-2026-63525, CVE-2026-63518

De hoeveelheid kritieke Office-patches is opvallend groot. Zorg dat Office-updates zijn uitgerold via MECM of Intune, en overweeg Protected View en Attack Surface Reduction-regels te controleren.

---

### SharePoint Server — Kritieke RCE en EoP

- **CVE-2026-65665** — Microsoft SharePoint Server Remote Code Execution (Critical)
- **CVE-2026-64921** — Microsoft SharePoint Server Elevation of Privilege (Critical)
- **CVE-2026-62827** — Microsoft SharePoint Server Elevation of Privilege (Critical)

SharePoint-omgevingen die intern of extern bereikbaar zijn verdienen directe aandacht.

---

### Exchange Server — Kritieke Elevation of Privilege

- **CVE-2026-62911** — Microsoft Exchange Server Elevation of Privilege (Critical)

Exchange blijft een geliefd doelwit. Gecombineerd met de overige Exchange-patches (RCE, DoS, SFB, Spoofing) in deze ronde is patchen hier geen optie.

---

### Active Directory Certificate Services — Kritieke RCE

- **CVE-2026-62818** — Windows Active Directory Certificate Services Remote Code Execution (Critical)

Een kritieke RCE in AD CS. Gezien de recente aandacht voor PKI-aanvallen (zie ook mijn [Certighost-analyse](/posts/certighost-cve-2026-54121/)) is dit een extra gevoelig component. Patch CA-servers zo snel mogelijk.

---

### Remote Desktop — Kritieke RCE

- **CVE-2026-62824** — Remote Desktop Client Remote Code Execution (Critical)

Een kritieke RCE in de Remote Desktop Client. Let op: dit is de *client*, niet de server. Een kwaadaardige RDP-server kan een verbindende client aanvallen.

---

### Overige kritieke highlights

| CVE | Omschrijving | Impact |
|---|---|---|
| CVE-2026-71331 | Windows Device Health Attestation RCE | Critical RCE |
| CVE-2026-66802 | Windows Device Health Attestation RCE | Critical RCE |
| CVE-2026-66799 | Windows Key Guard EoP | Critical EoP |
| CVE-2026-65791 | Windows iSCSI Target Service RCE | Critical RCE |
| CVE-2026-62893 | Windows Deployment Services TFTP RCE | Critical RCE |
| CVE-2026-62890 | Windows GDI+ RCE | Critical RCE |
| CVE-2026-62889 | Windows SSTP RCE | Critical RCE |
| CVE-2026-62823 | Windows DHCP Server RCE | Critical RCE |
| CVE-2026-62822 | Windows GDI+ RCE | Critical RCE |
| CVE-2026-62819 | Windows RRAS RCE | Critical RCE |
| CVE-2026-62816 | RMCAST RCE | Critical RCE |
| CVE-2026-62815 | Microsoft QUIC RCE | Critical RCE |
| CVE-2026-59118 | Copilot Cowork EoP | Critical EoP |

---

## Aandachtspunten voor beheerders

**Exchange:** meerdere kwetsbaarheden tegelijk — RCE, EoP, DoS, SFB en Spoofing. Behandel Exchange-patching deze ronde als prioriteit.

**DNS Server:** vier kritieke RCE's in één ronde is ongebruikelijk. Controleer of je DNS-servers direct bereikbaar zijn en patch zo snel mogelijk.

**AD CS:** CVE-2026-62818 in combinatie met de recente Certighost-discussie maakt PKI-infrastructuur een extra gevoelig punt. Inventariseer alle Enterprise CA's en patch direct.

**Office/Excel:** de hoeveelheid Excel-patches (zowel Critical als Important) is exceptioneel. Controleer of macro's en externe content geblokkeerd zijn via beleid.

**Telephony Service:** opvallend veel EoP-kwetsbaarheden in Windows Telephony Service — mogelijk een structureel probleem in dit component.

---

## Volledig CVE-overzicht

| CVE | Omschrijving | Type | Ernst |
|---|---|---|---|
| CVE-2026-72971 | Windows Container Isolation FS Filter Driver Tampering | Tampering | Important |
| CVE-2026-71331 | Windows Device Health Attestation RCE | RCE | **Critical** |
| CVE-2026-70355 | Microsoft SharePoint Server EoP | EoP | Important |
| CVE-2026-70354 | .NET Core RCE | RCE | Important |
| CVE-2026-70348 | Windows Management Services DoS | DoS | Important |
| CVE-2026-70347 | Windows Installer EoP | EoP | Important |
| CVE-2026-70346 | Windows Installer EoP | EoP | Important |
| CVE-2026-70345 | Windows Installer EoP | EoP | Important |
| CVE-2026-70344 | Windows Installer EoP | EoP | Important |
| CVE-2026-70340 | Azure CycleCloud EoP | EoP | Important |
| CVE-2026-70339 | Microsoft Edge (Chromium) RCE | RCE | Important |
| CVE-2026-70338 | Microsoft PowerShell SFB | SFB | Important |
| CVE-2026-70337 | Microsoft PowerShell Core RCE | RCE | Important |
| CVE-2026-70336 | Visual Studio Code RCE | RCE | Important |
| CVE-2026-70335 | GitHub Copilot / VS Code EoP | EoP | Important |
| CVE-2026-70330 | Windows DNS EoP | EoP | Important |
| CVE-2026-70329 | Microsoft Outlook RCE | RCE | Important |
| CVE-2026-70328 | Microsoft Excel Info Disclosure | ID | Important |
| CVE-2026-70327 | Microsoft Excel Info Disclosure | ID | Important |
| CVE-2026-70326 | Microsoft SharePoint Server EoP | EoP | Important |
| CVE-2026-70325 | PowerPoint Info Disclosure | ID | Important |
| CVE-2026-70324 | Microsoft SharePoint EoP | EoP | Important |
| CVE-2026-70323 | Microsoft Office Info Disclosure | ID | Important |
| CVE-2026-70322 | PowerPoint Info Disclosure | ID | Important |
| CVE-2026-70321 | Microsoft SharePoint RCE | RCE | Important |
| CVE-2026-70320 | PowerPoint Info Disclosure | ID | Important |
| CVE-2026-70319 | Office Word Info Disclosure | ID | Important |
| CVE-2026-70318 | Microsoft Excel Info Disclosure | ID | Important |
| CVE-2026-70317 | Microsoft Office Info Disclosure | ID | Important |
| CVE-2026-70316 | PowerPoint Info Disclosure | ID | Important |
| CVE-2026-70315 | Microsoft Office Info Disclosure | ID | Important |
| CVE-2026-70314 | Microsoft Office Info Disclosure | ID | Important |
| CVE-2026-70313 | Microsoft PowerPoint RCE | ID | Important |
| CVE-2026-70312 | PowerPoint Info Disclosure | ID | Important |
| CVE-2026-70311 | Office Word RCE | RCE | Important |
| CVE-2026-70310 | Microsoft Word Info Disclosure | ID | Important |
| CVE-2026-70307 | Windows AFD for WinSock EoP | EoP | Important |
| CVE-2026-70306 | Microsoft Office SharePoint Spoofing | Spoofing | Important |
| CVE-2026-70304 | Windows DNS EoP | EoP | Important |
| CVE-2026-70130 | Microsoft Office RCE | RCE | **Critical** |
| CVE-2026-69320 | Visual Studio Code RCE | RCE | Important |
| CVE-2026-69306 | Visual Studio Code SFB | SFB | Important |
| CVE-2026-69278 | Visual Studio Code SFB | SFB | Important |
| CVE-2026-68821 | Windows Package Manager EoP | EoP | Important |
| CVE-2026-68820 | Windows AFD for WinSock EoP | EoP | Important |
| CVE-2026-68819 | Windows Network File System DoS | DoS | Important |
| CVE-2026-68817 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68816 | Microsoft Excel RCE | RCE | **Critical** |
| CVE-2026-68815 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68814 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68813 | Microsoft Excel Info Disclosure | ID | Important |
| CVE-2026-68812 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68811 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68810 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68809 | PowerPoint Info Disclosure | ID | Important |
| CVE-2026-68808 | Microsoft Excel Info Disclosure | ID | Important |
| CVE-2026-68807 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68806 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68805 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68804 | Microsoft Excel RCE | RCE | **Critical** |
| CVE-2026-68803 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68802 | Microsoft Excel Info Disclosure | ID | Important |
| CVE-2026-68801 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68800 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68799 | Microsoft Excel Info Disclosure | ID | Important |
| CVE-2026-68798 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68797 | Microsoft Excel Info Disclosure | ID | Important |
| CVE-2026-68796 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68795 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68794 | Microsoft Excel RCE | RCE | **Critical** |
| CVE-2026-68793 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-68792 | Microsoft Office EoP | EoP | Important |
| CVE-2026-66810 | Office Word Info Disclosure | ID | Important |
| CVE-2026-66809 | Office Graphics Info Disclosure | ID | Important |
| CVE-2026-66808 | SharePoint Server RCE | RCE | Important |
| CVE-2026-66807 | Office Graphics RCE | RCE | **Critical** |
| CVE-2026-66806 | Office Word Info Disclosure | ID | Important |
| CVE-2026-66805 | SharePoint Server RCE | RCE | Important |
| CVE-2026-66804 | Windows Cross Device Service EoP | EoP | Important |
| CVE-2026-66802 | Windows DHA RCE | RCE | **Critical** |
| CVE-2026-66799 | Windows Key Guard EoP | EoP | **Critical** |
| CVE-2026-66301 | Microsoft Dynamics 365 Info Disclosure | ID | Important |
| CVE-2026-65815 | Dynamics 365 On-Premises RCE | RCE | Important |
| CVE-2026-65814 | Windows Storage Port Driver EoP | EoP | Important |
| CVE-2026-65813 | Microsoft Exchange Server EoP | EoP | Important |
| CVE-2026-65811 | Power BI RCE | RCE | Important |
| CVE-2026-65810 | .NET Framework EoP | EoP | Important |
| CVE-2026-65807 | Microsoft Excel RCE | RCE | Important |
| CVE-2026-65806 | Azure CycleCloud Info Disclosure | ID | Important |
| CVE-2026-65799 | Windows DNS EoP | EoP | Important |
| CVE-2026-65798 | Windows DNS EoP | EoP | Important |
| CVE-2026-65797 | Windows DNS EoP | EoP | Important |
| CVE-2026-65796 | Windows iSCSI Target Service DoS | DoS | Important |
| CVE-2026-65795 | Windows DNS EoP | EoP | Important |
| CVE-2026-65794 | Windows SMB Client Info Disclosure | ID | Important |
| CVE-2026-65791 | Windows iSCSI Target Service RCE | RCE | **Critical** |
| CVE-2026-65790 | Windows Message Queuing EoP | EoP | Important |
| CVE-2026-65789 | Windows DNS Server RCE | RCE | **Critical** |
| CVE-2026-65788 | Desktop Window Manager EoP | EoP | Important |
| CVE-2026-65787 | Desktop Window Manager EoP | EoP | Important |
| CVE-2026-65786 | Desktop Window Manager EoP | EoP | Important |
| CVE-2026-65785 | Windows DHCP Client DoS | DoS | Important |
| CVE-2026-65784 | Windows NTFS Info Disclosure | ID | Important |
| CVE-2026-65783 | Windows Autopilot EoP | EoP | Important |
| CVE-2026-65782 | Windows Autopilot EoP | EoP | Important |
| CVE-2026-65781 | Windows Autopilot EoP | EoP | Important |
| CVE-2026-65780 | Windows Autopilot EoP | EoP | Important |
| CVE-2026-65779 | Windows Autopilot EoP | EoP | Important |
| CVE-2026-65778 | Windows Autopilot EoP | EoP | Important |
| CVE-2026-65777 | Active Directory SFB | SFB | Important |
| CVE-2026-65776 | Windows Win32k EoP | EoP | Important |
| CVE-2026-65775 | Windows Win32k EoP | EoP | Important |
| CVE-2026-65774 | Windows Installer EoP | EoP | Important |
| CVE-2026-65773 | Windows Kernel EoP | EoP | Important |
| CVE-2026-65769 | Microsoft Teams iOS Info Disclosure | ID | Important |
| CVE-2026-65768 | Microsoft Teams Android RCE | RCE | Important |
| CVE-2026-65767 | Microsoft Teams Spoofing | Spoofing | Important |
| CVE-2026-65681 | Windows iSCSI Target Service DoS | DoS | Important |
| CVE-2026-65680 | Microsoft OneDrive MacOS EoP | EoP | Important |
| CVE-2026-65679 | Windows iSCSI Target Service RCE | RCE | Important |
| CVE-2026-65678 | Windows Win32k EoP | EoP | Important |
| CVE-2026-65675 | CoPilot Chat SFB | SFB | Important |
| CVE-2026-65673 | Microsoft Entra Connect EoP | EoP | Important |
| CVE-2026-65672 | Remote Access API EoP | EoP | Important |
| CVE-2026-65671 | Remote Access API EoP | EoP | Important |
| CVE-2026-65665 | SharePoint Server RCE | RCE | **Critical** |
| CVE-2026-65664 | Office Graphics RCE | RCE | **Critical** |
| CVE-2026-65663 | SharePoint Server RCE | RCE | Important |
| CVE-2026-65662 | Windows GDI Info Disclosure | ID | Important |
| CVE-2026-65661 | Microsoft Office RCE | RCE | Important |
| CVE-2026-65660 | SharePoint Server Spoofing | Spoofing | Important |
| CVE-2026-65658 | SharePoint Server RCE | RCE | Important |
| CVE-2026-65657 | Microsoft Office RCE | RCE | **Critical** |
| CVE-2026-65656 | Microsoft Office RCE | RCE | Important |
| CVE-2026-64922 | SharePoint Server Spoofing | Spoofing | Important |
| CVE-2026-64921 | SharePoint Server EoP | EoP | **Critical** |
| CVE-2026-64920 | Microsoft Access RCE | RCE | Important |
| CVE-2026-64919 | Microsoft Access RCE | RCE | Important |
| CVE-2026-64917 | Office Word Info Disclosure | ID | Important |
| CVE-2026-64916 | SharePoint Server Spoofing | Spoofing | Important |
| CVE-2026-64915 | Office Word RCE | RCE | Important |
| CVE-2026-64914 | Microsoft Access RCE | RCE | Important |
| CVE-2026-64912 | Microsoft Access RCE | RCE | Important |
| CVE-2026-64911 | Microsoft Office RCE | RCE | **Critical** |
| CVE-2026-64910 | Microsoft Office RCE | RCE | **Critical** |
| CVE-2026-64909 | Microsoft Office RCE | RCE | **Critical** |
| CVE-2026-64908 | Microsoft Access RCE | RCE | Important |
| CVE-2026-64907 | Office Word RCE | RCE | **Critical** |
| CVE-2026-64906 | Microsoft Access RCE | RCE | Important |
| CVE-2026-64905 | Office Word RCE | RCE | Important |
| CVE-2026-64904 | Microsoft Office RCE | RCE | Important |
| CVE-2026-64903 | Microsoft Office RCE | RCE | **Critical** |
| CVE-2026-64902 | SharePoint Server Spoofing | Spoofing | Important |
| CVE-2026-64901 | SharePoint Server RCE | RCE | Important |
| CVE-2026-64900 | SharePoint Server Spoofing | Spoofing | Important |
| CVE-2026-64899 | Microsoft Office Info Disclosure | ID | Important |
| CVE-2026-64898 | Microsoft Office RCE | RCE | **Critical** |
| CVE-2026-64897 | SharePoint Server Spoofing | Spoofing | Important |
| CVE-2026-63533 | Microsoft Office RCE | RCE | Important |
| CVE-2026-63532 | Microsoft Office RCE | RCE | **Critical** |
| CVE-2026-63531 | Office Word Info Disclosure | ID | Important |
| CVE-2026-63530 | Office Word Info Disclosure | ID | Important |
| CVE-2026-63529 | Microsoft Office Info Disclosure | ID | Important |
| CVE-2026-63528 | Office Word Info Disclosure | ID | Important |
| CVE-2026-63527 | Office Word RCE | RCE | Important |
| CVE-2026-63526 | Office Graphics RCE | RCE | **Critical** |
| CVE-2026-63525 | Office Word RCE | RCE | **Critical** |
| CVE-2026-63524 | Microsoft Office Info Disclosure | ID | Important |
| CVE-2026-63521 | Office Word Info Disclosure | ID | Important |
| CVE-2026-63520 | SharePoint Server RCE | RCE | Important |
| CVE-2026-63519 | Office Graphics RCE | RCE | **Critical** |
| CVE-2026-63518 | Office Word RCE | RCE | **Critical** |
| CVE-2026-63517 | Office Graphics Info Disclosure | ID | Important |
| CVE-2026-63516 | SharePoint Server Spoofing | Spoofing | Important |
| CVE-2026-63515 | Microsoft Office RCE | RCE | **Critical** |
| CVE-2026-63514 | SharePoint Server RCE | RCE | Important |
| CVE-2026-63513 | Office Graphics RCE | RCE | **Critical** |
| CVE-2026-63512 | SharePoint Server Tampering | Tampering | Important |
| CVE-2026-62917 | SharePoint Server Spoofing | Spoofing | Important |
| CVE-2026-62915 | Exchange Server SFB | SFB | Important |
| CVE-2026-62914 | Exchange Server Spoofing | Spoofing | Important |
| CVE-2026-62913 | Exchange Server RCE | RCE | Important |
| CVE-2026-62912 | Exchange Server DoS | DoS | Important |
| CVE-2026-62911 | Exchange Server EoP | EoP | **Critical** |
| CVE-2026-62910 | Exchange Server EoP | EoP | Important |
| CVE-2026-62909 | .NET EoP | EoP | Important |
| CVE-2026-62908 | Windows Backup Engine EoP | EoP | Important |
| CVE-2026-62902 | .NET Info Disclosure | ID | Important |
| CVE-2026-62901 | .NET DoS | DoS | Important |
| CVE-2026-62900 | .NET Info Disclosure | ID | Important |
| CVE-2026-62899 | .NET SFB | SFB | Important |
| CVE-2026-62898 | Microsoft QUIC Info Disclosure | ID | Important |
| CVE-2026-62897 | .NET Framework RCE | RCE | Important |
| CVE-2026-62894 | Windows DWM Core Library EoP | EoP | Important |
| CVE-2026-62893 | Windows Deployment Services TFTP RCE | RCE | **Critical** |
| CVE-2026-62892 | Capability Access Management EoP | EoP | Important |
| CVE-2026-62890 | Windows GDI+ RCE | RCE | **Critical** |
| CVE-2026-62889 | Windows SSTP RCE | RCE | **Critical** |
| CVE-2026-62888 | Windows DWM Core Library EoP | EoP | Important |
| CVE-2026-62887 | Windows NTFS Info Disclosure | ID | Important |
| CVE-2026-62886 | .NET EoP | EoP | Important |
| CVE-2026-62885 | Windows Win32k EoP | EoP | Important |
| CVE-2026-62883 | Windows DNS EoP | EoP | Important |
| CVE-2026-62882 | Microsoft Outlook Spoofing | Spoofing | Important |
| CVE-2026-62881 | Windows DNS EoP | EoP | Important |
| CVE-2026-62880 | Windows NTFS EoP | EoP | Important |
| CVE-2026-62878 | Windows DNS Server RCE | RCE | **Critical** |
| CVE-2026-62877 | Windows Win32k EoP | EoP | Important |
| CVE-2026-62876 | Windows Win32k EoP | EoP | Important |
| CVE-2026-62872 | .NET Framework EoP | EoP | Important |
| CVE-2026-62871 | .NET RCE | RCE | Important |
| CVE-2026-62842 | Office Graphics Info Disclosure | ID | Important |
| CVE-2026-62839 | SharePoint Server Spoofing | Spoofing | Important |
| CVE-2026-62837 | SharePoint Server Info Disclosure | ID | Important |
| CVE-2026-62832 | Windows User Profile Service EoP | EoP | Important |
| CVE-2026-62829 | SharePoint Server Spoofing | Spoofing | Important |
| CVE-2026-62827 | SharePoint Server EoP | EoP | **Critical** |
| CVE-2026-62824 | Remote Desktop Client RCE | RCE | **Critical** |
| CVE-2026-62823 | Windows DHCP Server RCE | RCE | **Critical** |
| CVE-2026-62822 | Windows GDI+ RCE | RCE | **Critical** |
| CVE-2026-62820 | Windows DNS Server RCE | RCE | **Critical** |
| CVE-2026-62819 | Windows RRAS RCE | RCE | **Critical** |
| CVE-2026-62818 | Windows AD CS RCE | RCE | **Critical** |
| CVE-2026-62817 | Windows DNS Server RCE | RCE | **Critical** |
| CVE-2026-62816 | RMCAST RCE | RCE | **Critical** |
| CVE-2026-62815 | Microsoft QUIC RCE | RCE | **Critical** |
| CVE-2026-62814 | Windows DHCP Server Info Disclosure | ID | Important |
| CVE-2026-62812 | Windows DHCP Server EoP | EoP | Important |
| CVE-2026-62811 | Windows HTTP.sys EoP | EoP | Important |
| CVE-2026-62807 | Windows DHCP Server EoP | EoP | Important |
| CVE-2026-62803 | Windows DHCP Server EoP | EoP | Important |
| CVE-2026-62800 | Windows SMBv3 Server RCE | RCE | Important |
| CVE-2026-62799 | Windows SMB Client EoP | EoP | Important |
| CVE-2026-62798 | Win32k Info Disclosure | ID | Important |
| CVE-2026-62797 | Windows NTFS EoP | EoP | Important |
| CVE-2026-62796 | Windows NTFS Info Disclosure | ID | Important |
| CVE-2026-62795 | Windows LDAP RCE | RCE | Important |
| CVE-2026-62793 | Windows NTFS Info Disclosure | ID | Important |
| CVE-2026-62792 | Windows TCP/IP RCE | RCE | Important |
| CVE-2026-62790 | Windows SMBv3 Server RCE | RCE | Important |
| CVE-2026-62788 | Windows Kernel EoP | EoP | Important |
| CVE-2026-62787 | Windows DNS Server RCE | RCE | Important |
| CVE-2026-62786 | Win32k Info Disclosure | ID | Important |
| CVE-2026-62785 | Windows LDAP RCE | RCE | Important |
| CVE-2026-62784 | Microsoft lsasrv RCE | RCE | Important |
| CVE-2026-62783 | Windows Remote Access Connection Manager EoP | EoP | Important |
| CVE-2026-62782 | Windows SMB Client Info Disclosure | ID | Important |
| CVE-2026-62781 | RPC Runtime Library RCE | RCE | Important |
| CVE-2026-62780 | Windows Kernel EoP | EoP | Important |
| CVE-2026-62779 | Windows Schannel EoP | EoP | Important |
| CVE-2026-62778 | Windows DNS EoP | EoP | Important |
| CVE-2026-62777 | Windows License Manager EoP | EoP | Important |
| CVE-2026-62776 | Windows DHCP Server EoP | EoP | Important |
| CVE-2026-62775 | Windows Container Isolation FS Info Disclosure | ID | Important |
| CVE-2026-62774 | Windows Graphics Kernel EoP | EoP | Important |
| CVE-2026-62773 | Windows Kerberos EoP | EoP | Important |
| CVE-2026-62772 | Windows Container Isolation FS EoP | EoP | Important |
| CVE-2026-62771 | Windows Cloud Files Mini Filter Driver EoP | EoP | Important |
| CVE-2026-62770 | Windows Shell EoP | EoP | Important |
| CVE-2026-62769 | Windows DNS EoP | EoP | Important |
| CVE-2026-62768 | Windows Installer EoP | EoP | Important |
| CVE-2026-62766 | Windows Kerberos EoP | EoP | Important |
| CVE-2026-62761 | Windows DHCP Server EoP | EoP | Important |
| CVE-2026-62758 | Windows Remote Access Connection Manager EoP | EoP | Important |
| CVE-2026-62757 | Windows Schannel SFB | SFB | Important |
| CVE-2026-62755 | Windows DHCP Client EoP | EoP | Important |
| CVE-2026-62754 | Windows Kerberos EoP | EoP | Important |
| CVE-2026-62753 | Windows HTTP.sys EoP | EoP | Important |
| CVE-2026-62752 | Windows Kerberos EoP | EoP | Important |
| CVE-2026-62751 | Windows Projected File System EoP | EoP | Important |
| CVE-2026-62750 | Windows HTTP Protocol Stack Tampering | Tampering | Important |
| CVE-2026-62749 | Windows Kernel EoP | EoP | Important |
| CVE-2026-62748 | Windows Telephony Service EoP | EoP | Important |
| CVE-2026-62747 | Windows Device Association Service EoP | EoP | Important |
| CVE-2026-62746 | Win32k Info Disclosure | ID | Important |
| CVE-2026-62745 | Windows DHCP Server Info Disclosure | ID | Important |
| CVE-2026-62743 | Win32k Info Disclosure | ID | Important |
| CVE-2026-62742 | Windows DHCP Server Info Disclosure | ID | Important |
| CVE-2026-62741 | Windows HTTP.sys EoP | EoP | Important |
| CVE-2026-62740 | Windows Imaging Component Info Disclosure | ID | Important |
| CVE-2026-62739 | Windows HTTP.sys EoP | EoP | Important |
| CVE-2026-62738 | Windows WMI Info Disclosure | ID | Important |
| CVE-2026-62737 | Windows Kernel EoP | EoP | Important |
| CVE-2026-62736 | Windows DHCP Client EoP | EoP | Important |
| CVE-2026-62735 | Windows HTTP.sys EoP | EoP | Important |
| CVE-2026-62734 | Windows Telephony Service EoP | EoP | Important |
| CVE-2026-62733 | Windows Win32k EoP | EoP | Important |
| CVE-2026-62732 | Windows Telephony Service EoP | EoP | Important |
| CVE-2026-62730 | Windows Wired AutoConfig Info Disclosure | ID | Important |
| CVE-2026-62729 | Windows Telephony Service EoP | EoP | Important |
| CVE-2026-62728 | Windows Common Log File System Driver EoP | EoP | Important |
| CVE-2026-62726 | Windows Telephony Service EoP | EoP | Important |
| CVE-2026-62725 | Windows Telephony Service EoP | EoP | Important |
| CVE-2026-62724 | Windows Telephony Service EoP | EoP | Important |
| CVE-2026-62723 | Windows Telephony Service EoP | EoP | Important |
| CVE-2026-62722 | Windows Bind Filter Driver EoP | EoP | Important |
| CVE-2026-62721 | Windows UMPS EoP | EoP | Important |
| CVE-2026-62720 | Windows DHCP Server Info Disclosure | ID | Important |
| CVE-2026-62719 | Windows Message Queuing EoP | EoP | Important |
| CVE-2026-62718 | Windows DHCP Server Info Disclosure | ID | Important |
| CVE-2026-62717 | Windows Message Queuing EoP | EoP | Important |
| CVE-2026-62716 | Windows DHCP Server Info Disclosure | ID | Important |
| CVE-2026-62715 | Windows DHCP Server Info Disclosure | ID | Important |
| CVE-2026-62714 | Windows DHCP Server Info Disclosure | ID | Important |
| CVE-2026-62713 | Windows Cloud Files Mini Filter Driver EoP | EoP | Important |
| CVE-2026-62712 | Windows Win32k EoP | EoP | Important |
| CVE-2026-62711 | Windows Win32k EoP | EoP | Important |
| CVE-2026-62710 | Windows Device Association Service EoP | EoP | Important |
| CVE-2026-62709 | Windows GDI+ Info Disclosure | ID | Important |
| CVE-2026-62708 | Windows Kernel EoP | EoP | Important |
| CVE-2026-62707 | Windows MDM EoP | EoP | Important |
| CVE-2026-62705 | Windows Bind Filter Driver EoP | EoP | Important |
| CVE-2026-62703 | Windows DWM Core Library Info Disclosure | ID | Important |
| CVE-2026-62702 | Windows Graphics Kernel DoS | DoS | Important |
| CVE-2026-62701 | Windows Telephony Service EoP | EoP | Important |
| CVE-2026-62700 | Windows NTFS EoP | EoP | Important |
| CVE-2026-62699 | Windows UDFS RCE | RCE | Important |
| CVE-2026-62698 | Microsoft Digest Authentication EoP | EoP | Important |
| CVE-2026-62696 | Windows Program Compatibility Assistant EoP | EoP | Important |
| CVE-2026-62695 | Windows Storage EoP | EoP | Important |
| CVE-2026-62693 | Windows MIDI Service EoP | EoP | Important |
| CVE-2026-62692 | Windows Remote Desktop Services EoP | EoP | Important |
| CVE-2026-62690 | Windows Push Notifications EoP | EoP | Important |
| CVE-2026-62688 | Windows MIDI Service EoP | EoP | Important |
| CVE-2026-61939 | Winlogon EoP | EoP | Important |
| CVE-2026-61938 | Windows Installer EoP | EoP | Important |
| CVE-2026-61937 | Windows HTTP.sys EoP | EoP | Important |
| CVE-2026-61936 | Windows Defender Firewall SFB | SFB | Important |
| CVE-2026-61934 | Windows Bind Filter Driver EoP | EoP | Important |
| CVE-2026-61933 | Windows DWM Core Library Info Disclosure | ID | Important |
| CVE-2026-61932 | Windows DWM Core Library EoP | EoP | Important |
| CVE-2026-61930 | Windows Kernel EoP | EoP | Important |
| CVE-2026-61929 | Windows Kernel EoP | EoP | Important |
| CVE-2026-61928 | Windows Hello Tampering | Tampering | Important |
| CVE-2026-61927 | Windows Bind Filter Driver EoP | EoP | Important |
| CVE-2026-61926 | Windows USB Driver EoP | EoP | Important |
| CVE-2026-61925 | Windows Installer EoP | EoP | Important |
| CVE-2026-61924 | Windows Remote Desktop Client Info Disclosure | ID | Important |
| CVE-2026-61923 | Windows Display Enhancement Service EoP | EoP | Important |
| CVE-2026-61921 | Windows Remote Desktop Client Info Disclosure | ID | Important |
| CVE-2026-61920 | Windows DNS Server RCE | RCE | Important |
| CVE-2026-61918 | Windows Remote Desktop Client Info Disclosure | ID | Important |
| CVE-2026-61368 | Windows Hyper-V Info Disclosure | ID | Important |
| CVE-2026-61367 | Windows Remote Desktop Services EoP | EoP | Important |
| CVE-2026-61366 | Windows Network Connection Broker EoP | EoP | Important |
| CVE-2026-61365 | Windows Remote Desktop Services EoP | EoP | Important |
| CVE-2026-61364 | Windows Remote Desktop Services EoP | EoP | Important |
| CVE-2026-61363 | Remote Desktop Client RCE | RCE | Important |
| CVE-2026-61361 | Windows DHCP Client RCE | RCE | Important |
| CVE-2026-61360 | Windows GDI Info Disclosure | ID | Important |
| CVE-2026-61359 | Windows Storage EoP | EoP | Important |
| CVE-2026-61358 | Windows Accessibility Infrastructure EoP | EoP | Important |
| CVE-2026-61357 | Application Information Services EoP | EoP | Important |
| CVE-2026-61356 | Windows Remote Desktop Services EoP | EoP | Important |
| CVE-2026-61355 | Windows Sensor Data Service EoP | EoP | Important |
| CVE-2026-61353 | Windows Telephony Service EoP | EoP | Important |
| CVE-2026-61352 | Remote Desktop Client RCE | RCE | Important |
| CVE-2026-61350 | Windows NTFS Info Disclosure | ID | Important |
| CVE-2026-61349 | Windows Work Folder Service EoP | EoP | Important |
| CVE-2026-61348 | Windows AFD for WinSock EoP | EoP | Important |
| CVE-2026-61347 | Windows Event Logging Service Info Disclosure | ID | Important |
| CVE-2026-61346 | Windows Graphics Kernel EoP | EoP | Important |
| CVE-2026-61345 | Microsoft Remote Registry Service DoS | DoS | Important |
| CVE-2026-59138 | Microsoft Remote Registry Service DoS | DoS | Important |
| CVE-2026-59137 | Windows Event Logging Service Info Disclosure | ID | Important |
| CVE-2026-59136 | Microsoft COM for Windows Info Disclosure | ID | Important |
| CVE-2026-59135 | Microsoft Windows Search Component Info Disclosure | ID | Important |
| CVE-2026-59134 | Remote Desktop Client RCE | RCE | Important |
| CVE-2026-59133 | Microsoft HPC Pack EoP | EoP | Important |
| CVE-2026-59132 | Windows TCP/IP DoS | DoS | Important |
| CVE-2026-59131 | AMD Zen Info Disclosure | ID | Important |
| CVE-2026-59130 | AMD Zen Info Disclosure | ID | Important |
| CVE-2026-59128 | Windows EFS Info Disclosure | ID | Important |
| CVE-2026-59127 | Windows Installer EoP | EoP | Important |
| CVE-2026-59126 | Windows Event Logging Service EoP | EoP | Important |
| CVE-2026-59125 | Virtual Hard Disk Miniport Driver EoP | EoP | Important |
| CVE-2026-59124 | Microsoft HPC Pack RCE | RCE | Important |
| CVE-2026-59122 | Windows Telephony Service EoP | EoP | Important |
| CVE-2026-59119 | PowerShell EoP | EoP | Important |
| CVE-2026-59118 | Copilot Cowork EoP | EoP | **Critical** |
| CVE-2026-59113 | Visual Studio Code RCE | RCE | Important |
| CVE-2026-58651 | Microsoft Word RCE | RCE | Important |
| CVE-2026-58650 | Visual Studio Code SFB | SFB | Important |
| CVE-2026-58641 | .NET EoP | EoP | Important |
| CVE-2026-58639 | SharePoint Server Spoofing | Spoofing | Important |
| CVE-2026-58612 | PowerShell Core Info Disclosure | ID | Important |
| CVE-2026-57105 | Microsoft Office SharePoint Spoofing | Spoofing | Important |
| CVE-2026-57104 | Azure Storage Explorer EoP | EoP | Important |
| CVE-2026-56179 | Windows NAT Spoofing | Spoofing | Moderate |
| CVE-2026-56174 | Windows Narrator Braille EoP | EoP | Important |
| CVE-2026-54984 | Windows Imaging Component RCE | RCE | Important |
| CVE-2026-54981 | VS Code Python Extension SFB | SFB | Important |
| CVE-2026-54123 | Microsoft Defender for Endpoint Mac Info Disclosure | ID | Important |
| CVE-2026-54113 | Remote Procedure Call DoS | DoS | Important |
| CVE-2026-50472 | Windows LUA File Virtualization Filter Driver EoP | EoP | Important |
| CVE-2026-49179 | Windows Active Directory Domain Services RCE | RCE | Important |
| CVE-2026-47299 | Azure Monitor Agent EoP | EoP | Important |
| CVE-2026-47285 | Visual Studio Code Info Disclosure | ID | Important |
| CVE-2026-42976 | Remote Access Management EoP | EoP | Important |
| CVE-2026-40375 | Microsoft Dynamics Business Central Info Disclosure | ID | Important |

---

*Bronnen: Microsoft Security Update Guide · MSRC Patch Tuesday augustus 2026*
