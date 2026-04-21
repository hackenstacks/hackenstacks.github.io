(function () {
  const pages = [
    { label: 'Home',       file: 'index.html' },
    { label: 'Overview',   file: 'nexus-overview.html' },
    { label: 'Dark Stack', file: 'nexus-darkstack.html' },
    { label: 'DIVA',       file: 'nexus-diva.html' },
    { label: 'Tokenomics', file: 'nexus-tokenomics.html' },
    { label: 'Ghost Gate', file: 'nexus-ghost-gate.html' },
    { label: 'Radio',      file: 'nexus-radio.html' },
    { label: 'Simulator',  file: 'nexus-simulator.html' },
    { label: 'Char Gen',   file: 'nexus-char-gen.html' },
    { label: 'Ads Built In', file: 'nexus-ads-built-in.html' },
    { label: 'FanTOM',     file: 'nexus-fantom-widget.html' },
    { label: 'Mission Log', file: 'nexus-chart.html' },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  const style = document.createElement('style');
  style.textContent = `
    #nexus-nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 9999;
      background: rgba(5, 9, 15, 0.92);
      border-bottom: 1px solid rgba(0, 212, 255, 0.15);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      height: 48px;
      gap: 0;
      overflow-x: auto;
      scrollbar-width: none;
    }
    #nexus-nav::-webkit-scrollbar { display: none; }
    #nexus-nav .nav-logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      font-weight: 700;
      color: #00d4ff;
      letter-spacing: 0.15em;
      text-decoration: none;
      margin-right: 1.5rem;
      white-space: nowrap;
      flex-shrink: 0;
    }
    #nexus-nav .nav-logo span { color: #7b5ea7; }
    #nexus-nav .nav-divider {
      width: 1px;
      height: 20px;
      background: rgba(0,212,255,0.2);
      margin-right: 1rem;
      flex-shrink: 0;
    }
    #nexus-nav a.nav-item {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #6a8aaa;
      text-decoration: none;
      padding: 0 0.75rem;
      height: 48px;
      display: flex;
      align-items: center;
      white-space: nowrap;
      border-bottom: 2px solid transparent;
      transition: color 0.2s, border-color 0.2s;
      flex-shrink: 0;
    }
    #nexus-nav a.nav-item:hover {
      color: #e8f4ff;
    }
    #nexus-nav a.nav-item.active {
      color: #00d4ff;
      border-bottom-color: #00d4ff;
    }
    body { padding-top: 48px !important; }
  `;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.id = 'nexus-nav';

  const logo = document.createElement('a');
  logo.className = 'nav-logo';
  logo.href = 'index.html';
  logo.innerHTML = 'Ne<span>X</span>uS';
  nav.appendChild(logo);

  const divider = document.createElement('div');
  divider.className = 'nav-divider';
  nav.appendChild(divider);

  pages.forEach(function (p) {
    const a = document.createElement('a');
    a.className = 'nav-item';
    a.href = p.file;
    a.textContent = p.label;
    if (p.file === current || (current === '' && p.file === 'index.html')) {
      a.classList.add('active');
    }
    nav.appendChild(a);
  });

  document.body.insertBefore(nav, document.body.firstChild);
})();
