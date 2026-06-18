// ===== DATOS DEL MUNDIAL 2026 — Jornada 1 (18 jun 2026) =====

const GROUPS = {
  A: {
    name: 'Grupo A',
    teams: ['México', 'Corea del Sur', 'R. Checa', 'Sudáfrica'],
    standings: [
      { flag: '🇲🇽', team: 'México', j: 1, g: 1, e: 0, p: 0, gf: 2, gc: 0, dg: 2, pts: 3 },
      { flag: '🇰🇷', team: 'Corea del Sur', j: 1, g: 1, e: 0, p: 0, gf: 2, gc: 1, dg: 1, pts: 3 },
      { flag: '🇨🇿', team: 'R. Checa', j: 1, g: 0, e: 0, p: 1, gf: 1, gc: 2, dg: -1, pts: 0 },
      { flag: '🇿🇦', team: 'Sudáfrica', j: 1, g: 0, e: 0, p: 1, gf: 0, gc: 2, dg: -2, pts: 0 },
    ],
  },
  B: {
    name: 'Grupo B',
    teams: ['Canadá', 'Suiza', 'Qatar', 'Bosnia-Herz.'],
    standings: [
      { flag: '🇨🇦', team: 'Canadá', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇧🇦', team: 'Bosnia-Herz.', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇶🇦', team: 'Qatar', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇨🇭', team: 'Suiza', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
    ],
  },
  C: {
    name: 'Grupo C',
    teams: ['Brasil', 'Marruecos', 'Escocia', 'Haití'],
    standings: [
      { flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', team: 'Escocia', j: 1, g: 1, e: 0, p: 0, gf: 2, gc: 1, dg: 1, pts: 3 },
      { flag: '🇧🇷', team: 'Brasil', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇲🇦', team: 'Marruecos', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇭🇹', team: 'Haití', j: 1, g: 0, e: 0, p: 1, gf: 1, gc: 2, dg: -1, pts: 0 },
    ],
  },
  D: {
    name: 'Grupo D',
    teams: ['EE.UU.', 'Australia', 'Paraguay', 'Türkiye'],
    standings: [
      { flag: '🇺🇸', team: 'EE.UU.', j: 1, g: 1, e: 0, p: 0, gf: 4, gc: 1, dg: 3, pts: 3 },
      { flag: '🇦🇺', team: 'Australia', j: 1, g: 1, e: 0, p: 0, gf: 3, gc: 1, dg: 2, pts: 3 },
      { flag: '🇵🇾', team: 'Paraguay', j: 1, g: 0, e: 0, p: 1, gf: 0, gc: 3, dg: -3, pts: 0 },
      { flag: '🇹🇷', team: 'Türkiye', j: 1, g: 0, e: 0, p: 1, gf: 1, gc: 3, dg: -2, pts: 0 },
    ],
  },
  E: {
    name: 'Grupo E',
    teams: ['Alemania', 'Costa de Marfil', 'Ecuador', 'Curazao'],
    standings: [
      { flag: '🇩🇪', team: 'Alemania', j: 1, g: 1, e: 0, p: 0, gf: 7, gc: 1, dg: 6, pts: 3 },
      { flag: '🇨🇮', team: 'Costa de Marfil', j: 1, g: 1, e: 0, p: 0, gf: 2, gc: 1, dg: 1, pts: 3 },
      { flag: '🇪🇨', team: 'Ecuador', j: 1, g: 0, e: 0, p: 1, gf: 1, gc: 2, dg: -1, pts: 0 },
      { flag: '🇨🇼', team: 'Curazao', j: 1, g: 0, e: 0, p: 1, gf: 1, gc: 7, dg: -6, pts: 0 },
    ],
  },
  F: {
    name: 'Grupo F',
    teams: ['Suecia', 'Países Bajos', 'Japón', 'Túnez'],
    standings: [
      { flag: '🇸🇪', team: 'Suecia', j: 1, g: 1, e: 0, p: 0, gf: 4, gc: 0, dg: 4, pts: 3 },
      { flag: '🇳🇱', team: 'Países Bajos', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇯🇵', team: 'Japón', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇹🇳', team: 'Túnez', j: 1, g: 0, e: 0, p: 1, gf: 0, gc: 4, dg: -4, pts: 0 },
    ],
  },
  G: {
    name: 'Grupo G',
    teams: ['Bélgica', 'Egipto', 'Irán', 'Nueva Zelanda'],
    standings: [
      { flag: '🇧🇪', team: 'Bélgica', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇪🇬', team: 'Egipto', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇮🇷', team: 'Irán', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇳🇿', team: 'Nueva Zelanda', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
    ],
  },
  H: {
    name: 'Grupo H',
    teams: ['España', 'Uruguay', 'Arabia Saudí', 'Cabo Verde'],
    standings: [
      { flag: '🇪🇸', team: 'España', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇨🇻', team: 'Cabo Verde', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇺🇾', team: 'Uruguay', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇸🇦', team: 'Arabia Saudí', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
    ],
  },
  I: {
    name: 'Grupo I',
    teams: ['Noruega', 'Francia', 'Senegal', 'Irak'],
    standings: [
      { flag: '🇳🇴', team: 'Noruega', j: 1, g: 1, e: 0, p: 0, gf: 4, gc: 1, dg: 3, pts: 3 },
      { flag: '🇫🇷', team: 'Francia', j: 1, g: 1, e: 0, p: 0, gf: 3, gc: 1, dg: 2, pts: 3 },
      { flag: '🇸🇳', team: 'Senegal', j: 1, g: 0, e: 0, p: 1, gf: 0, gc: 3, dg: -3, pts: 0 },
      { flag: '🇮🇶', team: 'Irak', j: 1, g: 0, e: 0, p: 1, gf: 1, gc: 4, dg: -3, pts: 0 },
    ],
  },
  J: {
    name: 'Grupo J',
    teams: ['Argentina', 'Austria', 'Jordania', 'Argelia'],
    standings: [
      { flag: '🇦🇷', team: 'Argentina', j: 1, g: 1, e: 0, p: 0, gf: 3, gc: 0, dg: 3, pts: 3 },
      { flag: '🇦🇹', team: 'Austria', j: 1, g: 1, e: 0, p: 0, gf: 3, gc: 1, dg: 2, pts: 3 },
      { flag: '🇯🇴', team: 'Jordania', j: 1, g: 0, e: 0, p: 1, gf: 1, gc: 3, dg: -2, pts: 0 },
      { flag: '🇩🇿', team: 'Argelia', j: 1, g: 0, e: 0, p: 1, gf: 0, gc: 3, dg: -3, pts: 0 },
    ],
  },
  K: {
    name: 'Grupo K',
    teams: ['Colombia', 'Portugal', 'R.D. Congo', 'Uzbekistán'],
    standings: [
      { flag: '🇨🇴', team: 'Colombia', j: 1, g: 1, e: 0, p: 0, gf: 3, gc: 1, dg: 2, pts: 3 },
      { flag: '🇵🇹', team: 'Portugal', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇨🇩', team: 'R.D. Congo', j: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { flag: '🇺🇿', team: 'Uzbekistán', j: 1, g: 0, e: 0, p: 1, gf: 1, gc: 3, dg: -2, pts: 0 },
    ],
  },
  L: {
    name: 'Grupo L',
    teams: ['Inglaterra', 'Ghana', 'Panamá', 'Croacia'],
    standings: [
      { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', team: 'Inglaterra', j: 1, g: 1, e: 0, p: 0, gf: 3, gc: 1, dg: 2, pts: 3 },
      { flag: '🇬🇭', team: 'Ghana', j: 1, g: 1, e: 0, p: 0, gf: 2, gc: 1, dg: 1, pts: 3 },
      { flag: '🇵🇦', team: 'Panamá', j: 1, g: 0, e: 0, p: 1, gf: 1, gc: 2, dg: -1, pts: 0 },
      { flag: '🇭🇷', team: 'Croacia', j: 1, g: 0, e: 0, p: 1, gf: 1, gc: 3, dg: -2, pts: 0 },
    ],
  },
};

const RESULTS = [
  { group: 'A', home: '🇲🇽 México', away: 'Sudáfrica 🇿🇦', score: '2-0', scorers: 'Lozano, Vega', highlight: true },
  { group: 'A', home: '🇰🇷 Corea del Sur', away: 'R. Checa 🇨🇿', score: '2-1', scorers: 'Son, Hwang' },
  { group: 'B', home: '🇨🇦 Canadá', away: 'Suiza 🇨🇭', score: '1-1', scorers: 'Davies / Embolo' },
  { group: 'B', home: '🇶🇦 Qatar', away: 'Bosnia 🇧🇦', score: '1-1', scorers: 'Almoez / Džeko' },
  { group: 'C', home: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia', away: 'Haití 🇭🇹', score: '2-1', scorers: 'McTominay, Gilmour' },
  { group: 'C', home: '🇧🇷 Brasil', away: 'Marruecos 🇲🇦', score: '1-1', scorers: 'Vini Jr. / Ounahi' },
  { group: 'D', home: '🇺🇸 EE.UU.', away: 'Paraguay 🇵🇾', score: '4-1', scorers: 'Pulisic (2), Reyna, Balogun', highlight: true },
  { group: 'D', home: '🇦🇺 Australia', away: 'Türkiye 🇹🇷', score: '3-1', scorers: 'Maclaren (2), Irvine' },
  { group: 'E', home: '🇩🇪 Alemania', away: 'Curazao 🇨🇼', score: '7-1', scorers: 'Wirtz (2), Musiala, Havertz, Sané, Brandt, Goretzka', highlight: true },
  { group: 'E', home: '🇨🇮 Costa de Marfil', away: 'Ecuador 🇪🇨', score: '2-1', scorers: 'Adama, Haller' },
  { group: 'F', home: '🇸🇪 Suecia', away: 'Túnez 🇹🇳', score: '4-0', scorers: 'Isak (2), Kulusevski, Forsberg' },
  { group: 'F', home: '🇳🇱 Países Bajos', away: 'Japón 🇯🇵', score: '1-1', scorers: 'Gakpo / Depay' },
  { group: 'G', home: '🇧🇪 Bélgica', away: 'Egipto 🇪🇬', score: '1-1', scorers: 'Lukaku / Salah' },
  { group: 'G', home: '🇮🇷 Irán', away: 'Nueva Zelanda 🇳🇿', score: '1-1', scorers: 'Azmoun / Wood' },
  { group: 'H', home: '🇪🇸 España', away: 'Uruguay 🇺🇾', score: '1-1', scorers: 'Morata / Valverde' },
  { group: 'H', home: '🇸🇦 Arabia Saudí', away: 'Cabo Verde 🇨🇻', score: '1-1', scorers: 'Al-Dawsari / Semedo' },
  { group: 'I', home: '🇳🇴 Noruega', away: 'Irak 🇮🇶', score: '4-1', scorers: 'Haaland (3), Ødegaard' },
  { group: 'I', home: '🇫🇷 Francia', away: 'Senegal 🇸🇳', score: '3-1', scorers: 'Mbappé (2), Griezmann', highlight: true },
  { group: 'J', home: '🇦🇷 Argentina', away: 'Argelia 🇩🇿', score: '3-0', scorers: 'Messi (3)', highlight: true },
  { group: 'J', home: '🇦🇹 Austria', away: 'Jordania 🇯🇴', score: '3-1', scorers: 'Sabitzer, Alaba, Baumgartner' },
  { group: 'K', home: '🇨🇴 Colombia', away: 'Uzbekistán 🇺🇿', score: '3-1', scorers: 'Díaz (2), James' },
  { group: 'K', home: '🇵🇹 Portugal', away: 'R.D. Congo 🇨🇩', score: '1-1', scorers: 'Ronaldo / Mbemba' },
  { group: 'L', home: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra', away: 'Panamá 🇵🇦', score: '3-1', scorers: 'Bellingham, Kane, Foden' },
  { group: 'L', home: '🇬🇭 Ghana', away: 'Croacia 🇭🇷', score: '2-1', scorers: 'Kudus, Partey' },
];

const SCORERS = [
  { player: 'Erling Haaland', team: '🇳🇴 Noruega', goals: 3 },
  { player: 'Lionel Messi', team: '🇦🇷 Argentina', goals: 3 },
  { player: 'Kylian Mbappé', team: '🇫🇷 Francia', goals: 2 },
  { player: 'Florian Wirtz', team: '🇩🇪 Alemania', goals: 2 },
  { player: 'Alexander Isak', team: '🇸🇪 Suecia', goals: 2 },
  { player: 'Christian Pulisic', team: '🇺🇸 EE.UU.', goals: 2 },
  { player: 'Luis Díaz', team: '🇨🇴 Colombia', goals: 2 },
  { player: 'Folarin Balogun', team: '🇺🇸 EE.UU.', goals: 1 },
];

// ===== RENDER GRUPOS =====
function renderGroups(filter = 'all') {
  const grid = document.getElementById('groupsGrid');
  grid.innerHTML = '';

  Object.entries(GROUPS).forEach(([key, group]) => {
    const card = document.createElement('div');
    card.className = `group-card${filter !== 'all' && filter !== key ? ' hidden' : ''}`;
    card.dataset.group = key;

    const rows = group.standings.map((s, i) => `
      <tr class="${i < 2 ? 'qualified' : ''}">
        <td><span class="team-name"><span class="team-flag">${s.flag}</span>${s.team}</span></td>
        <td>${s.j}</td>
        <td>${s.g}</td>
        <td>${s.e}</td>
        <td>${s.p}</td>
        <td>${s.dg > 0 ? '+' + s.dg : s.dg}</td>
        <td class="pts-cell">${s.pts}</td>
      </tr>
    `).join('');

    card.innerHTML = `
      <div class="group-header">
        <h3>${group.name}</h3>
        <span class="group-teams">${group.teams.join(' · ')}</span>
      </div>
      <table class="group-table">
        <thead>
          <tr>
            <th>Selección</th><th>J</th><th>G</th><th>E</th><th>P</th><th>DG</th><th>Pts</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;

    grid.appendChild(card);
  });
}

// ===== RENDER RESULTADOS =====
function renderResults() {
  const grid = document.getElementById('resultsGrid');
  grid.innerHTML = RESULTS.map(r => `
    <div class="result-card${r.highlight ? ' highlight' : ''}">
      <div class="result-group">Grupo ${r.group}</div>
      <div class="result-match">
        <span class="result-team home">${r.home}</span>
        <span class="result-score">${r.score}</span>
        <span class="result-team away">${r.away}</span>
      </div>
      ${r.scorers ? `<div class="result-scorers">⚽ ${r.scorers}</div>` : ''}
    </div>
  `).join('');
}

// ===== RENDER ESTADÍSTICAS =====
function renderStats() {
  let totalGoals = 0;
  const allTeams = [];

  Object.entries(GROUPS).forEach(([key, group]) => {
    group.standings.forEach(s => {
      totalGoals += s.gf;
      allTeams.push({ ...s, group: key });
    });
  });

  document.getElementById('totalGoals').textContent = totalGoals;

  const scorersBody = document.getElementById('scorersTable');
  scorersBody.innerHTML = SCORERS.map((s, i) => `
    <tr>
      <td class="rank">${i + 1}</td>
      <td><strong>${s.player}</strong></td>
      <td>${s.team}</td>
      <td><strong>${s.goals}</strong></td>
    </tr>
  `).join('');

  const sorted = [...allTeams].sort((a, b) => b.dg - a.dg || b.pts - a.pts).slice(0, 8);
  const dgBody = document.getElementById('dgTable');
  dgBody.innerHTML = sorted.map((s, i) => `
    <tr>
      <td class="rank">${i + 1}</td>
      <td>${s.flag} ${s.team}</td>
      <td>${s.group}</td>
      <td><strong>${s.dg > 0 ? '+' + s.dg : s.dg}</strong></td>
      <td>${s.pts}</td>
    </tr>
  `).join('');
}

// ===== FILTRO DE GRUPOS =====
function initFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.group;
      document.querySelectorAll('.group-card').forEach(card => {
        card.classList.toggle('hidden', filter !== 'all' && card.dataset.group !== filter);
      });
    });
  });
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });

  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = links.querySelectorAll('a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ===== ANIMACIONES EN SCROLL =====
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.group-card, .result-card, .stat-card, .timeline-card, .sponsor-card, .champion-chip').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderGroups();
  renderResults();
  renderStats();
  initFilter();
  initNavbar();
  initScrollAnimations();
});
