+++
title = 'CV'
date = 2026-04-18
draft = false
layout = "cv"
+++

<style>
.cv { background: #0a0e1a; border-radius: 12px; border: 0.5px solid #1e3a5f; overflow: hidden; font-family: 'Courier New', monospace; }
.cv-top { padding: 2rem; border-bottom: 0.5px solid #1e3a5f; display: flex; align-items: center; gap: 2rem; }
.avatar { width: 90px; height: 90px; border-radius: 50%; background: #0d1f0d; border: 1.5px solid #00ff41; display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: relative; overflow: hidden; }
.avatar-inner { font-size: 28px; font-weight: 700; color: #00ff41; }
.avatar-scan { position: absolute; top: -100%; left: 0; width: 100%; height: 3px; background: rgba(0,255,65,0.4); animation: scan 2.5s linear infinite; }
@keyframes scan { to { top: 110%; } }
.cv-handle { font-size: 22px; font-weight: 700; color: #e6edf3; letter-spacing: 1px; }
.cv-handle span { color: #00ff41; }
.cv-role { font-size: 13px; color: #6e7681; margin-top: 4px; letter-spacing: 2px; text-transform: uppercase; }
.cv-status { margin-top: 12px; display: flex; align-items: center; gap: 8px; }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #00ff41; animation: pulse 2s infinite; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
.status-text { font-size: 12px; color: #00ff41; }
.cv-body { padding: 1.5rem 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
.section-title { font-size: 11px; color: #00ff41; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; padding-bottom: 6px; border-bottom: 0.5px solid #1e3a5f; }
.stat-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 0.5px solid #111827; }
.stat-row:last-child { border-bottom: none; }
.stat-label { font-size: 12px; color: #6e7681; }
.stat-val { font-size: 12px; color: #e6edf3; font-weight: 500; }
.skill-item { margin-bottom: 10px; }
.skill-name { font-size: 12px; color: #e6edf3; margin-bottom: 4px; display: flex; justify-content: space-between; }
.skill-level { font-size: 11px; color: #6e7681; }
.skill-bar { height: 3px; background: #1e3a5f; border-radius: 2px; }
.skill-fill { height: 100%; border-radius: 2px; background: #00ff41; }
.tag { display: inline-block; font-size: 11px; padding: 3px 8px; border-radius: 3px; background: #0d1f0d; color: #00ff41; border: 0.5px solid #1e3a5f; margin: 3px 3px 0 0; }
.cv-footer { padding: 1rem 2rem; border-top: 0.5px solid #1e3a5f; display: flex; justify-content: space-between; }
.footer-prompt { font-size: 12px; color: #6e7681; }
.footer-prompt span { color: #00ff41; }
</style>

<div class="cv">
  <div class="cv-top">
    <div class="avatar">
      <div class="avatar-inner">&gt;_</div>
      <div class="avatar-scan"></div>
    </div>
    <div class="cv-identity">
      <div class="cv-handle"><span>~</span>/Wingineer</div>
      <div class="cv-role">Windows Security Engineer & CSIRT Analyst</div>
      <div class="cv-status">
        <div class="status-dot"></div>
        <div class="status-text">Beschikbaar voor consultancy</div>
      </div>
    </div>
  </div>

  <div class="cv-body">
    <div>
      <div class="section-title">// ervaring</div>
      <div class="stat-row"><span class="stat-label">Windows Engineering</span><span class="stat-val">5+ jaar</span></div>
      <div class="stat-row"><span class="stat-label">CSIRT werkzaamheden</span><span class="stat-val">3+ jaar</span></div>
      <div class="stat-row"><span class="stat-label">Incident Response</span><span class="stat-val">3+ jaar</span></div>
      <div class="stat-row"><span class="stat-label">Threat Hunting</span><span class="stat-val">2+ jaar</span></div>
    </div>

    <div>
      <div class="section-title">// certificeringen</div>
      <div class="stat-row"><span class="stat-label">Microsoft SC-200</span><span class="stat-val" style="color:#00ff41">✓</span></div>
      <div class="stat-row"><span class="stat-label">AZ-500</span><span class="stat-val" style="color:#00ff41">✓</span></div>
      <div class="stat-row"><span class="stat-label">CompTIA Security+</span><span class="stat-val" style="color:#00ff41">✓</span></div>
    </div>

    <div>
      <div class="section-title">// tools & technieken</div>
      <div class="skill-item"><div class="skill-name"><span>Microsoft Sentinel</span><span class="skill-level">Expert</span></div><div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div></div>
      <div class="skill-item"><div class="skill-name"><span>Defender for Endpoint</span><span class="skill-level">Expert</span></div><div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div></div>
      <div class="skill-item"><div class="skill-name"><span>Sysinternals Suite</span><span class="skill-level">Gevorderd</span></div><div class="skill-bar"><div class="skill-fill" style="width:75%"></div></div></div>
      <div class="skill-item"><div class="skill-name"><span>KQL / SIEM queries</span><span class="skill-level">Gevorderd</span></div><div class="skill-bar"><div class="skill-fill" style="width:70%"></div></div></div>
    </div>

    <div>
      <div class="section-title">// focus gebieden</div>
      <div>
        <span class="tag">Patch Tuesday</span>
        <span class="tag">CVE analyse</span>
        <span class="tag">Active Directory</span>
        <span class="tag">Incident Response</span>
        <span class="tag">OPSEC</span>
        <span class="tag">Aotomation</span>
        <span class="tag">Windows Hardening</span>
        <span class="tag">Malware analyse</span>
      </div>
    </div>
  </div>

  <div class="cv-footer">
    <div class="footer-prompt"><span>root@wingineer</span>:~$ whoami</div>
    <div class="footer-prompt" style="color:#6e7681; font-size:11px;">Identiteit: [REDACTED]</div>
  </div>
</div>
