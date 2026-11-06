(function () {
  const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isRestricted = path === 'restricted.html';
  if (isRestricted) document.body.classList.add('is-restricted-page');

  const isCurrent = (target) => (path === target ? 'w--current' : '');

  const themeKey = 'dexter-portfolio-theme';
  let storedTheme = null;
  try { storedTheme = localStorage.getItem(themeKey); } catch (_) { /* Private browsing may block storage. */ }
  const startingTheme = storedTheme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = startingTheme;
  document.documentElement.style.colorScheme = startingTheme;

  const footerWordmarkMarkup = `
    <div class="footer-logo-lockup" aria-label="DEXTER OCADO">
      <div class="logo-word is-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 262" fill="none" class="logo-letter"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H74C82.8 0 89 6.2 89 15V247C89 255.8 82.8 262 74 262H0V0ZM30 25V237H59V25H30Z" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 262" fill="none" class="logo-letter"><path d="M0 0H88V25H30V116H78V141H30V237H88V262H0V0Z" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 262" fill="none" class="logo-letter"><path d="M0 0H30V96L44 116L58 96V0H88V106L60 131L88 156V262H58V166L44 146L30 166V262H0V156L28 131L0 106V0Z" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 262" fill="none" class="logo-letter"><path d="M0 0H88V25H59V262H29V25H0V0Z" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 262" fill="none" class="logo-letter"><path d="M0 0H88V25H30V116H78V141H30V237H88V262H0V0Z" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 262" fill="none" class="logo-letter"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H74C82.8 0 89 6.2 89 15V122C89 131 83 137 74 139L89 152V262H59V156H30V262H0V0ZM30 25V120H59V25H30Z" fill="currentColor"/></svg>
      </div>
      <div class="logo-word is-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 262" fill="none" class="logo-letter"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H81C86 0 89 3 89 8V254C89 259 86 262 81 262H8C3 262 0 259 0 254V8C0 3 3 0 8 0ZM30 25V237H59V25H30Z" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 262" fill="none" class="logo-letter"><path d="M8 262H80C85 262 88 259 88 254V141H59V237H30V25H59V111H88V8C88 3 85 0 80 0H8C3 0 0 3 0 8V254C0 259 3 262 8 262Z" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 262" fill="none" class="logo-letter"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H81C86 0 89 3 89 8V262H59V148H30V262H0V8C0 3 3 0 8 0ZM30 25V123H59V25H30Z" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 262" fill="none" class="logo-letter"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H74C82.8 0 89 6.2 89 15V247C89 255.8 82.8 262 74 262H0V0ZM30 25V237H59V25H30Z" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 262" fill="none" class="logo-letter"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H81C86 0 89 3 89 8V254C89 259 86 262 81 262H8C3 262 0 259 0 254V8C0 3 3 0 8 0ZM30 25V237H59V25H30Z" fill="currentColor"/></svg>
      </div>
    </div>
  `;

  const navbarHTML = `
    <div class="padding-global is-tiny">
      <div class="container-large">
        <div class="navbar_component">
          <a href="index.html" aria-label="Dexter Pascual Ocado — home" class="navbar-logo_wr">
            <div class="logo-mark">DPO</div>
            <div class="navbar_logo-anim" aria-hidden="true">
              <div class="navbar_logo-anim_text is-active">Quantitative Analyst</div>
              <div class="navbar_logo-anim_text">Data Professional</div>
              <div class="navbar_logo-anim_text">Systems &amp; BI Engineer</div>
              <div class="navbar_logo-anim_text">Econometric Modeler</div>
            </div>
          </a>

          <div class="navbar_links">
            <div class="navbar_links-wrap">
              <div class="nav-dropdown">
                <a href="index.html" class="navbar_link ${isCurrent('index.html')}">
                  <span class="nav_link-texts">
                    <span class="nav_link-text _1">Homepage</span>
                    <span class="nav_link-text _2" aria-hidden="true">Homepage</span>
                  </span>
                  <svg width="10" height="6" viewBox="0 0 12 7" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                </a>
                <div class="nav-dropdown-menu">
                  <a href="index.html#snapshot" class="dropdown-item"><span>01. Snapshot &amp; Dossier</span><span class="dropdown-tag">Overview</span></a>
                  <a href="index.html#works" class="dropdown-item"><span>02. Selected Work</span><span class="dropdown-tag">Spotlight</span></a>
                  <a href="index.html#expertise" class="dropdown-item"><span>03. Expertise &amp; Arsenal</span><span class="dropdown-tag">Stack</span></a>
                  <a href="index.html#about-section" class="dropdown-item"><span>04. About &amp; Approach</span><span class="dropdown-tag">Bio</span></a>
                  <a href="index.html#operational-style" class="dropdown-item"><span>05. Operational Style</span><span class="dropdown-tag">Pipeline</span></a>
                  <a href="index.html#journey-preview" class="dropdown-item"><span>06. Fresh Grad Journey</span><span class="dropdown-tag">Story</span></a>
                  <a href="index.html#lt-rv" class="dropdown-item"><span>07. Interactive Case Files</span><span class="dropdown-tag">5 Decks</span></a>
                  <a href="index.html#experience-education" class="dropdown-item"><span>08. Experience &amp; Education</span><span class="dropdown-tag">Timeline</span></a>
                </div>
              </div>

              <div class="nav-dropdown">
                <a href="projects.html" class="navbar_link ${path.startsWith('project-') || isCurrent('projects.html') ? 'w--current' : ''}">
                  <span class="nav_link-texts">
                    <span class="nav_link-text _1">Case Studies</span>
                    <span class="nav_link-text _2" aria-hidden="true">Case Studies</span>
                  </span>
                  <svg width="10" height="6" viewBox="0 0 12 7" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                </a>
                <div class="nav-dropdown-menu">
                  <a href="project-empower.html" class="dropdown-item"><span>01. Project EmpowerPH</span><span class="dropdown-tag">Live Demo</span></a>
                  <a href="project-dbm.html" class="dropdown-item"><span>02. DBM HR Automation &amp; BI</span><span class="dropdown-tag">5 Web Apps</span></a>
                  <a href="project-volatility.html" class="dropdown-item"><span>03. PSEi Volatility Dynamics</span><span class="dropdown-tag">DCC-GARCH</span></a>
                  <a href="project-infratrust.html" class="dropdown-item"><span>04. InfraTrust OLS Tool</span><span class="dropdown-tag">Live Demo</span></a>
                  <a href="project-signature.html" class="dropdown-item"><span>05. Signature Verification AI</span><span class="dropdown-tag">ResNet-18</span></a>
                </div>
              </div>

              <a href="about.html" class="navbar_link ${isCurrent('about.html')}">
                <span class="nav_link-texts"><span class="nav_link-text _1">About</span><span class="nav_link-text _2" aria-hidden="true">About</span></span>
                <span class="nav_link-dot"></span>
              </a>

              <a href="job-hunt.html" class="navbar_link ${isCurrent('job-hunt.html')}">
                <span class="nav_link-texts"><span class="nav_link-text _1">Journey</span><span class="nav_link-text _2" aria-hidden="true">Journey</span></span>
                <span class="nav_link-dot"></span>
              </a>

              <a href="restricted.html" class="navbar_link ${isCurrent('restricted.html')}" style="color: var(--maroon-bright) !important;">
                <span class="nav_link-texts"><span class="nav_link-text _1">◉ Restricted</span><span class="nav_link-text _2" aria-hidden="true">LVL 04 Archive</span></span>
                <span class="nav_link-dot"></span>
              </a>

              <a href="contacts.html" class="navbar_link ${isCurrent('contacts.html')}">
                <span class="nav_link-texts"><span class="nav_link-text _1">Contacts</span><span class="nav_link-text _2" aria-hidden="true">Contacts</span></span>
                <span class="nav_link-dot"></span>
              </a>
            </div>
          </div>

          <div class="navbar_contact">
            <div class="navbar-live-clock" role="timer" aria-label="Current time in Manila, Philippines">
              <span class="clock-live-indicator" aria-hidden="true"></span>
              <div class="navbar-clock-info">
                <span class="navbar-clock-location">MANILA, PH</span>
                <time class="navbar-clock-time" id="navbar-manila-time">--:-- --</time>
              </div>
              <span class="navbar-clock-zone">UTC+8</span>
            </div>

            <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Switch to dark mode" aria-pressed="false" title="Switch to dark mode">
              <svg class="theme-icon-moon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.4 15.8A8.9 8.9 0 0 1 8.2 3.6 9 9 0 1 0 20.4 15.8Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
              <svg class="theme-icon-sun" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3.7" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>

            <a href="Resume - Dexter Pascual Ocado.pdf" target="_blank" data-cc-glow class="button is-light">
              <div class="button-in">
                <div class="button_texts">
                  <span class="button_text _1">Résumé ↗</span>
                  <span class="button_text _2" aria-hidden="true">Download</span>
                </div>
              </div>
            </a>

            <button type="button" class="mobile-menu-toggle" id="mobile-menu-open" aria-label="Open Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  const existingNav = document.querySelector('nav.navbar');
  if (existingNav) existingNav.innerHTML = navbarHTML;

  const themeToggle = document.getElementById('theme-toggle');
  function setTheme(theme) {
    const dark = theme === 'dark';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(dark));
      themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggle.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#0e1014' : '#800000';
    try { localStorage.setItem(themeKey, dark ? 'dark' : 'light'); } catch (_) { /* Private browsing may block storage. */ }
  }
  setTheme(startingTheme);
  themeToggle?.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  const manilaClock = document.getElementById('navbar-manila-time');
  if (manilaClock) {
    const manilaTimeFormatter = new Intl.DateTimeFormat('en-PH', {
      timeZone: 'Asia/Manila',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    const updateManilaClock = () => {
      const now = new Date();
      manilaClock.textContent = manilaTimeFormatter.format(now);
      manilaClock.dateTime = now.toISOString();
    };
    updateManilaClock();
    setInterval(updateManilaClock, 10_000);
  }

  const drawer = document.createElement('div');
  drawer.className = 'mobile-drawer';
  drawer.id = 'mobile-site-drawer';
  drawer.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--grey-250);">NAVIGATION // DEXTER OCADO</span>
      <button type="button" id="mobile-menu-close" style="background:none; border:1px solid rgba(255,255,255,0.2); color:#fff; width:40px; height:40px; border-radius:50%; font-size:1.2rem; cursor:pointer;">×</button>
    </div>
    <div class="mobile-drawer-links">
      <a href="index.html">01. Homepage</a>
      <a href="projects.html">02. Case Studies &amp; Works</a>
      <a href="about.html">03. About &amp; Experience</a>
      <a href="job-hunt.html">04. The Fresh Grad Story</a>
      <a href="contacts.html">05. Contacts &amp; Scope Planner</a>
      <a href="restricted.html" style="color:var(--maroon-glow);">06. ◉ Restricted Section (LVL 04)</a>
    </div>
    <div style="font-family:var(--font-mono); font-size:0.78rem; color:var(--grey-250);">
      ocadodexterp@gmail.com · 0994 193 4786
    </div>
  `;
  document.body.appendChild(drawer);
  const menuOpen = document.getElementById('mobile-menu-open');
  const menuClose = document.getElementById('mobile-menu-close');
  const toggleDrawer = (open) => {
    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    menuOpen?.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('mobile-menu-active', open);
    if (open) menuClose?.focus();
    else if (drawer.contains(document.activeElement)) menuOpen?.focus();
  };
  drawer.setAttribute('aria-hidden', 'true');
  menuOpen?.setAttribute('aria-expanded', 'false');
  menuOpen?.setAttribute('aria-controls', 'mobile-site-drawer');
  menuOpen?.addEventListener('click', () => toggleDrawer(true));
  menuClose?.addEventListener('click', () => toggleDrawer(false));
  drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleDrawer(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') toggleDrawer(false);
  });

  const footerWrap = document.getElementById('site-footer') || document.createElement('footer');
  footerWrap.id = 'site-footer';
  footerWrap.className = 'padding-global is-tiny';
  footerWrap.innerHTML = `
      <div class="container-large">
        <div class="section_footer">
          <div class="footer-top-grid">
            <div>
              <div class="label-caption">Let’s get down to business</div>
              <div class="email-copy-row">
                <a href="mailto:ocadodexterp@gmail.com" class="email-big-link">ocadodexterp@gmail.com</a>
                <button type="button" class="copy-icon" id="copy-email-btn" aria-label="Copy email address">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" stroke-width="1.6"/></svg>
                  <span class="copy-tooltip">Copied!</span>
                </button>
              </div>
              <p class="footer-contact-detail">
                Phone / Viber: <strong>0994 193 4786</strong> · Brgy. Ilasan Ibaba, Tayabas City, Quezon / Diliman, QC
              </p>
            </div>
            <div class="footer-links-cols">
              <div>
                <div class="footer-col-title">Pages</div>
                <div class="footer-links-list">
                  <a href="index.html" class="footer_link">Home</a>
                  <a href="about.html" class="footer_link">About</a>
                  <a href="projects.html" class="footer_link">Projects (5)</a>
                  <a href="job-hunt.html" class="footer_link">The Fresh Grad Story</a>
                  <a href="contacts.html" class="footer_link">Contacts</a>
                  <a href="restricted.html" class="footer_link" class="footer-restricted-link">◉ Restricted (LVL 04)</a>
                </div>
              </div>
              <div>
                <div class="footer-col-title">Case Studies</div>
                <div class="footer-links-list">
                  <a href="project-empower.html" class="footer_link">01. Project EmpowerPH</a>
                  <a href="project-dbm.html" class="footer_link">02. DBM HR Automation</a>
                  <a href="project-volatility.html" class="footer_link">03. PSEi Volatility Study</a>
                  <a href="project-infratrust.html" class="footer_link">04. InfraTrust OLS Tool</a>
                  <a href="project-signature.html" class="footer_link">05. SigVerifyAI (ResNet-18)</a>
                </div>
              </div>
              <div>
                <div class="footer-col-title">Elsewhere</div>
                <div class="footer-links-list">
                  <a href="https://github.com/OcadoDP" target="_blank" rel="noopener" class="footer_link">GitHub (OcadoDP) ↗</a>
                  <a href="https://www.linkedin.com/in/ocadodexterp" target="_blank" rel="noopener" class="footer_link">LinkedIn ↗</a>
                  <a href="viber://chat/?number=%2B639941934786" class="footer_link">Viber (0994 193 4786) ↗</a>
                  <a href="Resume - Dexter Pascual Ocado.pdf" target="_blank" class="footer_link">Résumé PDF ↗</a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-clocks">
            <div data-time="manila" class="timer-card is-manila">
              <div class="timer-row"><span class="time">--:--</span><span class="time-pm">--</span></div>
              <div class="timer-meta"><span class="date">---</span><span>🇵🇭 Manila / QC (Base)</span></div>
            </div>
            <div data-time="london" class="timer-card">
              <div class="timer-row"><span class="time">--:--</span><span class="time-pm">--</span></div>
              <div class="timer-meta"><span class="date">---</span><span>🇬🇧 UK, London</span></div>
            </div>
            <div data-time="newyork" class="timer-card">
              <div class="timer-row"><span class="time">--:--</span><span class="time-pm">--</span></div>
              <div class="timer-meta"><span class="date">---</span><span>🇺🇸 USA, New York</span></div>
            </div>
            <div data-time="singapore" class="timer-card">
              <div class="timer-row"><span class="time">--:--</span><span class="time-pm">--</span></div>
              <div class="timer-meta"><span class="date">---</span><span>🇸🇬 Singapore</span></div>
            </div>
          </div>
          <div class="footer-wordmark" aria-hidden="true"></div>
          <div class="footer_legal-wrap">
            <div>© 2026 Dexter Pascual Ocado · Hand-built with HTML, CSS &amp; JavaScript</div>
            <div class="footer-legal-links">
              <a href="version-history.html" class="footer-version-link">Version History ↗</a>
              <a href="restricted.html" class="footer-restricted-link">Archive: RSO-004</a>
              <a href="#top" data-back-to-top>Back to top ↑</a>
            </div>
          </div>
        </div>
      </div>
    `;
  if (!footerWrap.isConnected) document.body.appendChild(footerWrap);
  const wordmark = footerWrap.querySelector('.footer-wordmark');
  if (wordmark) {
    wordmark.setAttribute('aria-label', 'DEXTER OCADO');
    wordmark.innerHTML = footerWordmarkMarkup;
  }
  footerWrap.querySelector('[data-back-to-top]')?.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  if (!document.getElementById('ai-chat-window')) {
    const aiToggle = document.createElement('button');
    aiToggle.type = 'button';
    aiToggle.className = 'ai-widget-toggle';
    aiToggle.id = 'ai-toggle-btn';
    aiToggle.setAttribute('aria-label', 'Open Dexter AI Assistant');
    aiToggle.innerHTML = `<span class="online-dot"></span><span>Ask Dexter’s AI</span>`;

    const aiWin = document.createElement('div');
    aiWin.className = 'ai-chat-window';
    aiWin.id = 'ai-chat-window';
    aiWin.setAttribute('role', 'dialog');
    aiWin.setAttribute('aria-label', 'Dexter AI Portfolio Assistant');
    aiWin.innerHTML = `
      <div class="ai-chat-header">
        <div>
          <b>Dexter’s Portfolio AI</b>
          <span>KNOWLEDGE BASE // RSO-004 ENABLED</span>
        </div>
        <button type="button" class="ai-chat-close" id="ai-close-btn" aria-label="Close AI chat">×</button>
      </div>
      <div class="ai-chat-messages" id="ai-messages">
        <div class="ai-msg bot">
          Hey there! I’m Dexter’s portfolio assistant. How can I help you?
        </div>
      </div>
      <div class="ai-quick-chips">
        <button type="button" class="ai-chip" data-chip="What are Dexter's 5 projects?">5 Projects</button>
        <button type="button" class="ai-chip" data-chip="How to contact Dexter?">Contact Info</button>
        <button type="button" class="ai-chip" data-chip="Tell me about the 4 AM DICT story">DICT Story</button>
        <button type="button" class="ai-chip" data-chip="What is in the Restricted Section?">🐉 Restricted</button>
      </div>
      <form class="ai-chat-input-row" id="ai-chat-form">
        <input type="text" id="ai-input" placeholder="Ask about projects, skills, or dragons..." autocomplete="off" required />
        <button type="submit">Send</button>
      </form>
    `;
    document.body.appendChild(aiToggle);
    document.body.appendChild(aiWin);
  }

  const toggleBtn = document.getElementById('ai-toggle-btn');
  const closeBtn = document.getElementById('ai-close-btn');
  const chatWin = document.getElementById('ai-chat-window');
  const aiForm = document.getElementById('ai-chat-form');
  const aiInput = document.getElementById('ai-input');
  const aiMsgs = document.getElementById('ai-messages');


  const AI_PROXY_URL =
  'https://dpo-ai-proxy.docado800.workers.dev';

  const chatHistory = [];
  let pendingRequest = false;



  let markdownLibrariesPromise = null;

  function loadMarkdownLibraries() {
    if (markdownLibrariesPromise) {
      return markdownLibrariesPromise;
    }

    const loadScript = (src, globalName) => {
      if (window[globalName]) {
        return Promise.resolve();
      }

      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = () =>
        reject(new Error(`Failed to load ${globalName}`));

        document.head.appendChild(script);
      });
    };

    markdownLibrariesPromise = Promise.all([
    loadScript(
    'https://cdn.jsdelivr.net/npm/marked@18.1.2/lib/marked.umd.js',

    'marked'
    ),
    loadScript(
    'https://cdn.jsdelivr.net/npm/dompurify@3.4.17/dist/purify.min.js',
    'DOMPurify'
    )
    ]).catch(error => {
      markdownLibrariesPromise = null;
      throw error;
    });

    return markdownLibrariesPromise;
  }

  function renderChatMarkdown(element, text) {
    if (!element) return;

    const source = String(text ?? '');

    // Show plain text immediately while the libraries load.
    element.textContent = source;
    element.dataset.markdownSource = source;

    loadMarkdownLibraries()
    .then(() => {
      if (
      !element.isConnected ||
      element.dataset.markdownSource !== source
      ) {
        return;
      }

      const html = window.marked.parse(source, {
        gfm: true,
        breaks: true
      });

      const clean = window.DOMPurify.sanitize(html, {
        USE_PROFILES: { html: true },
        FORBID_TAGS: ['img', 'iframe', 'form', 'input', 'button'],
        FORBID_ATTR: ['style', 'id', 'name']
      });

      element.innerHTML = clean;

      const chatContainer = element.closest(
      '.ai-chat-messages'
      );

      if (chatContainer) {
        chatContainer.scrollTop =
        chatContainer.scrollHeight;
      }
    })
    .catch(error => {
      console.warn(
      'Markdown rendering unavailable:',
      error
      );

      // Plain-text fallback remains visible.
    });
  }



  function appendChat(text, who) {
    if (!aiMsgs) return null;

    const div = document.createElement('div');
    div.className = `ai-msg ${who}`;
    if (who === 'bot' && text !== 'Thinking…') {
      renderChatMarkdown(div, text);
    } else {
      div.textContent = text;
    }

    aiMsgs.appendChild(div);
    aiMsgs.scrollTop = aiMsgs.scrollHeight;

    return div;
  }

  async function callAIProxy() {
    const response = await fetch(AI_PROXY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: chatHistory.slice(-12)
      })
    });

    const data = await response.json().catch(() => ({}));

    if (response.status === 429) {
      const seconds = Number(data.retryAfter);

      const hint =
      Number.isFinite(seconds) && seconds > 0
      ? ` Please try again in about ${Math.ceil(seconds)} seconds.`
      : ' Please try again later.';

      throw new Error(
      'AI usage limit reached.' + hint
      );
    }

    if (!response.ok || data.error) {
      throw new Error(
      data.error ||
      `AI service unavailable (HTTP ${response.status}).`
      );
    }

    if (
    typeof data.reply !== 'string' ||
    !data.reply.trim()
    ) {
      throw new Error(
      'No response received. Please try again.'
      );
    }

    return data.reply.trim();
  }

  async function sendQuery(query) {
    const text = String(query || '').trim();

    if (!text || pendingRequest) return;

    chatWin?.classList.add('open');
    toggleBtn?.setAttribute('aria-expanded', 'true');

    appendChat(text, 'user');

    chatHistory.push({
      role: 'user',
      content: text
    });

    pendingRequest = true;

    const submitBtn =
    aiForm?.querySelector('button[type="submit"]');

    if (submitBtn) submitBtn.disabled = true;

    const thinking = appendChat('Thinking…', 'bot');

    try {
      const reply = await callAIProxy();

      if (thinking) {
        renderChatMarkdown(thinking, reply);
      }

      chatHistory.push({
        role: 'assistant',
        content: reply
      });

    } catch (error) {
      console.error(
      'Portfolio AI request failed:',
      error
      );

      if (thinking) {
        thinking.textContent =
        error.message ||
        'Sorry, I’m having trouble connecting right now. Please try again.';
      }

      chatHistory.pop();

    } finally {
      pendingRequest = false;

      if (submitBtn) {
        submitBtn.disabled = false;
      }

      if (aiMsgs) {
        aiMsgs.scrollTop = aiMsgs.scrollHeight;
      }
    }
  }

  if (toggleBtn && !toggleBtn.dataset.bound) {
    toggleBtn.dataset.bound = '1';
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-controls', 'ai-chat-window');
    toggleBtn.addEventListener('click', () => {
      const opened = chatWin.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', String(opened));
      if (opened) aiInput?.focus();
    });
    closeBtn?.addEventListener('click', () => {
      chatWin.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    });
    aiForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = aiInput.value.trim();
      if (!val) return;
      aiInput.value = '';
      sendQuery(val);
    });
    document.querySelectorAll('[data-chip], [data-ai-prompt]').forEach((btn) => {
      btn.addEventListener('click', () => sendQuery(btn.getAttribute('data-chip') || btn.getAttribute('data-ai-prompt')));
    });
  }

  const roles = document.querySelectorAll('.navbar_logo-anim_text');
  if (roles.length) {
    let rIdx = 0;
    setInterval(() => {
      roles[rIdx].classList.remove('is-active');
      rIdx = (rIdx + 1) % roles.length;
      roles[rIdx].classList.add('is-active');
    }, 2600);
  }

  document.getElementById('copy-email-btn')?.addEventListener('click', async function () {
    const tooltip = this.querySelector('.copy-tooltip');
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText('ocadodexterp@gmail.com');
      } else {
        const field = document.createElement('textarea');
        field.value = 'ocadodexterp@gmail.com';
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('Clipboard not available');
      }
      if (tooltip) tooltip.textContent = 'Copied!';
      this.setAttribute('aria-label', 'Email address copied');
    } catch (_) {
      if (tooltip) tooltip.textContent = 'Select the email link to contact Dexter';
      this.setAttribute('aria-label', 'Unable to copy email');
    }
    this.classList.add('active');
    setTimeout(() => {
      this.classList.remove('active');
      this.setAttribute('aria-label', 'Copy email address');
    }, 1800);
  });

  const cities = { manila: 'Asia/Manila', london: 'Europe/London', newyork: 'America/New_York', singapore: 'Asia/Singapore' };
  function tickClocks() {
    const now = new Date();
    for (const [city, timeZone] of Object.entries(cities)) {
      const card = document.querySelector(`[data-time="${city}"]`);
      if (!card) continue;
      const parts = new Intl.DateTimeFormat('en-US', { timeZone, hour: 'numeric', minute: '2-digit', hour12: true }).formatToParts(now);
      card.querySelector('.time').textContent = `${parts.find(p => p.type === 'hour')?.value}:${parts.find(p => p.type === 'minute')?.value}`;
      card.querySelector('.time-pm').textContent = (parts.find(p => p.type === 'dayPeriod')?.value || '').toLowerCase();
      card.querySelector('.date').textContent = new Intl.DateTimeFormat('en-US', { timeZone, weekday: 'short', month: 'short', day: 'numeric' }).format(now);
    }
  }
  tickClocks();
  setInterval(tickClocks, 60_000);

  const revealTargets = document.querySelectorAll(
  '.works_item, .dx-trust-item, .dx-ph-card, .home-services_item, .ct-card, .exp-accordion, .faq_accordion, .lore-card, .sim-card, .math-stage-card, .app-card, .sol-card, .walk-card, .toc-box, .funnel-card, .story-figure, .takeaway-card'
  );
  revealTargets.forEach((el) => el.classList.add('reveal-up'));

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -10px 0px' });
    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  const navEl = document.querySelector('.navbar');

  let lastScrollY = window.scrollY;
  let ticking = false;
  let scrollDirectionDistance = 0;

  window.addEventListener('scroll', () => {
    if (ticking) return;

    ticking = true;

    window.requestAnimationFrame(() => {
      const currentScrollY = Math.max(0, window.scrollY);
      const delta = currentScrollY - lastScrollY;

      if (
      (delta > 0 && scrollDirectionDistance < 0) ||
      (delta < 0 && scrollDirectionDistance > 0)
      ) {
        scrollDirectionDistance = 0;
      }

      scrollDirectionDistance += delta;

      if (navEl) {
        if (currentScrollY <= 80) {
          navEl.classList.remove('is-hidden');
          scrollDirectionDistance = 0;
        } else if (scrollDirectionDistance > 35) {

          navEl.classList.add('is-hidden');
          scrollDirectionDistance = 0;
        } else if (scrollDirectionDistance < -20) {

          navEl.classList.remove('is-hidden');
          scrollDirectionDistance = 0;
        }
      }

      lastScrollY = currentScrollY;
      ticking = false;
    });
  }, { passive: true });

  const topBtn = document.createElement('button');
  topBtn.type = 'button';
  topBtn.className = 'scroll-top-btn';
  topBtn.setAttribute('aria-label', 'Back to top');
  topBtn.innerHTML = `↑`;
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(topBtn);

  window.addEventListener('scroll', () => {
    topBtn.classList.toggle('visible', window.scrollY > 450);
  }, { passive: true });
})();
