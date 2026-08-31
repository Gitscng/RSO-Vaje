const modules = [
  {
    id: 'arh',
    category: 'obvezni',
    title: 'Arhitektura računalniških sistemov',
    hours: 35,
    summary: 'Struktura računalniških sistemov, pomnilniška hierarhija, registre in prekinitve.',
    goals: [
      'Poznajo zgradbo ukaza.',
      'Opišejo harvardsko arhitekturo in sestavne dele.',
      'Razlikujejo med CISC in RISC.',
      'Razumejo programski model mikrokrmilnika.',
      'Pišejo programe z uporabo prekinitev.',
      'Poznajo različne načine delovanja časovnikov in števcev.'
    ],
    lectures: [
      'Harvardska in von Neumannova arhitektura',
      'Pomnilniška hierarhija: RAM, ROM, SRAM, DRAM in VRAM',
      'Zgradba ukaza in format ukaza',
      'CISC in RISC',
      'Programski model mikrokrmilnika in registri',
      'Načini naslavljanja podatkov',
      'Priklapljanje vhodno-izhodnih naprav',
      'Odtipavanje in prekinitve',
      'Serijski in vzporedni prenos podatkov',
      'Časovniki in števci'
    ],
    exercises: [
      'Harvard ali von Neumann?',
      'Prepoznaj način naslavljanja',
      'Sled izvajanja programa',
      'CISC ali RISC?',
      'Pravilni vrstni red prekinitve',
      'Hitrost prenosa pri SCI',
      'Velikost naslovljivega pomnilnika',
      'Dekodiranje formata ukaza'
    ]
  },
  {
    id: 'omr',
    category: 'obvezni',
    title: 'Računalniška omrežja',
    hours: 35,
    summary: 'Omrežni protokoli, VLAN, NAT, DHCP, DNS, požarni zid in varnost.',
    goals: [
      'Raziskujejo namene uporabe VLAN.',
      'Vzpostavijo DHCP strežnik in dodelijo IP naslove.',
      'Analizirajo NAT in VLSM.',
      'Poznajo omenjene protokole VoIP, VPN in DMZ.',
      'Nastavijo parametre požarnega zidu.',
      'Uporabijo ACL za zaščito storitev.'
    ],
    lectures: [
      'Konstrukcija omrežja in mrežne topologije',
      'VLAN in delitev broadcast domene',
      'DHCP, DNS in NAT',
      'IPv4, IPv6 in VLSM',
      'MPLS in SD-WAN',
      'Požarni zidovi in ACL',
      'VPN in DMZ',
      'VoIP in omrežne storitve'
    ],
    exercises: [
      'Nastavitev DHCP in DNS',
      'Primerjava IPv4 in IPv6',
      'Ugotavljanje vpliva NAT',
      'Določanje pravil ACL',
      'Analiza VPN in DMZ'
    ]
  },
  {
    id: 'os',
    category: 'obvezni',
    title: 'Operacijski sistemi',
    hours: 35,
    summary: 'Zagon OS, procesi, nitovanje, pomnilnik, datotečni sistemi in varnost.',
    goals: [
      'Razložijo potek zagona operacijskega sistema.',
      'Razlikujejo med poslom, procesom in nitjo.',
      'Poznajo pomen večnitnosti in MMU.',
      'Razumejo defragmentacijo in RAID.',
      'Nameščajo in konfigurirajo virtualno okolje.',
      'Napišejo ukazne datoteke in varnostne kopije.'
    ],
    lectures: [
      'Zagon in inicializacija operacijskega sistema',
      'Procesi in niti',
      'Planer procesov in algoritmi razvrščanja',
      'Upravljanje s pomnilnikom in MMU',
      'Datotečni sistemi in RAID',
      'Varovanje podatkov in varnostne kopije',
      'Virtualizacija OS in navidezna okolja'
    ],
    exercises: [
      'Prepoznavanje procesa in niti',
      'Okvirni vrstni red razvrščanja',
      'Analiza zagonov in MMU',
      'Ugotavljanje podatkovne zaščite'
    ]
  },
  {
    id: 'prog',
    category: 'obvezni',
    title: 'Napredno programiranje z elementi načrtovanja',
    hours: 35,
    summary: 'OOP, UML, grafični vmesniki, baze podatkov in načrtovanje aplikacij.',
    goals: [
      'Uporabljajo elemente OOP in dedovanje.',
      'Izdelajo UML diagram primera rabe in razredni diagram.',
      'Uporabljajo grafične gradnike za GUI.',
      'Razvijejo aplikacijo z grafičnim vmesnikom.',
      'Vzpostavljajo povezavo s podatkovno bazo.',
      'Kritično ovrednotijo kakovost aplikacije.'
    ],
    lectures: [
      'Osnove OOP in abstrakcije',
      'Dedovanje, polimorfizem in vmesniki',
      'UML diagrami in načrtovanje sistema',
      'Grafični uporabniški vmesniki',
      'Povezava z bazo podatkov',
      'Testiranje in kvalitetna aplikacija'
    ],
    exercises: [
      'Nariši UML diagram',
      'Izdelava GUI aplikacije',
      'Povezava z lokalno bazo',
      'Kritična analiza aplikacije'
    ]
  },
  {
    id: 'splet',
    category: 'izbirni',
    title: 'Načrtovanje in razvoj spletnih strani',
    hours: 35,
    summary: 'HTML, CSS, JavaScript, dinamične spletne strani in testiranje.',
    goals: [
      'Opišejo zgradbo in gradnike HTML/XHTML.',
      'Gradijo preproste spletne strani.',
      'Upravljajo CSS predloge in stile.',
      'Programirajo odjemalce s skriptnim jezikom.',
      'Izdelajo dinamično spletno stran.',
      'Opravijo osnovno testiranje delovanja.'
    ],
    lectures: [
      'Zgradba dokumenta in HTML elementi',
      'CSS oblikovanje in responzivnost',
      'JavaScript in interaktivnost',
      'Forme, validacija in uporabniški vmesnik',
      'Dinamični elementi in primeri uporabe'
    ],
    exercises: [
      'Izdelava preproste strani',
      'Oblikovanje po CSS standardu',
      'Vpisovanje in validacija form',
      'Interaktivni element spletne strani'
    ]
  },
  {
    id: 'virt',
    category: 'izbirni',
    title: 'Virtualizacija informacijsko-komunikacijske infrastrukture',
    hours: 35,
    summary: 'Virtualizacija strežnikov, omrežij in storitev ter migracija v virtualno okolje.',
    goals: [
      'Seznanijo se s pojmom virtualizacije.',
      'Ločijo med polno in paravirtualizacijo.',
      'Nameščajo virtualizatorje.',
      'Primerjajo fizično in virtualizirano infrastrukturo.',
      'Pripravijo načrt virtualizacije.',
      'Izvedejo migracijo v virtualno okolje.'
    ],
    lectures: [
      'Pojem virtualizacije in virtualni stroji',
      'Hypervisorji in fizična infrastruktura',
      'Paravirtualizacija in migracija',
      'Prednosti in slabosti virtualizacije',
      'Prestavitev aplikacij v virtualno okolje'
    ],
    exercises: [
      'Primerjava fizične in virtualne infrastrukture',
      'Nastavitev virtualnega okolja',
      'Načrt migracije',
      'Analiza dobrih praks virtualizacije'
    ]
  },
  {
    id: 'varn',
    category: 'izbirni',
    title: 'Varnost in zaščita podatkov',
    hours: 35,
    summary: 'Kriptografija, šifriranje, avtentikacija in aplikacijska zaščita.',
    goals: [
      'Opišejo lastnosti varne aplikacije.',
      'Poznajo pomen naključnih števil v kriptografiji.',
      'Naštejejo vrste šifriranj.',
      'Izvedejo šifriranje in dešifriranje podatkov.',
      'Uporabljajo Security API.',
      'Pojasnijo varnostne koncepte avtentikacije.'
    ],
    lectures: [
      'Zaupnost, integriteta in avtentičnost',
      'Kljuki in kriptografske osnove',
      'Simetrično, asimetrično in hibridno šifriranje',
      'Podpisovanje in preverjanje istovetnosti',
      'Varnostni API in zaščita aplikacij'
    ],
    exercises: [
      'Razvrščanje tipov šifriranja',
      'Preverjanje avtentikacije',
      'Šifriranje podatkov',
      'Analiza varne aplikacije'
    ]
  },
  {
    id: 'ai',
    category: 'izbirni',
    title: 'Umetna inteligenca',
    hours: 35,
    summary: 'AI, metode strojnega učenja in etični vidiki uporabe.',
    goals: [
      'Razložijo pojem umetne inteligence.',
      'Razložijo strojno učenje in nevronske mreže.',
      'Identificirajo probleme rešljive z AI.',
      'Predstavijo klasifikacijske tehnike.',
      'Uporabijo preproste tehnike AI na primerih.',
      'Predstavijo etične pomisleke.'
    ],
    lectures: [
      'Kaj je umetna inteligenca',
      'Strojno učenje in globoko učenje',
      'Klasifikacija, odločitvena drevesa in modeli',
      'Nadzorovano in nenadzorovano učenje',
      'Etične in pravne posledice uporabe AI'
    ],
    exercises: [
      'Prepoznava področij uporabe AI',
      'Primerjava metod učenja',
      'Opis problema za AI rešitev',
      'Ethiska in analiza tveganj'
    ]
  }
];

const SPECIAL_PASSWORD = 'Tree1';
let activeFilter = 'all';
let searchTerm = '';
let expandedId = null;

const loginOverlay = document.getElementById('loginOverlay');
const app = document.getElementById('app');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const moduleList = document.getElementById('moduleList');
const detailPanel = document.getElementById('detailPanel');
const detailTitle = document.getElementById('detailTitle');
const detailContent = document.getElementById('detailContent');
const closeDetail = document.getElementById('closeDetail');

function updateStats(filteredModules) {
  document.getElementById('statTotal').textContent = filteredModules.length;
  document.getElementById('statObvezni').textContent = filteredModules.filter((m) => m.category === 'obvezni').length;
  document.getElementById('statIzbirni').textContent = filteredModules.filter((m) => m.category === 'izbirni').length;
  document.getElementById('statHours').textContent = filteredModules.reduce((sum, m) => sum + m.hours, 0);
}

function getVisibleModules() {
  const filtered = activeFilter === 'all'
    ? modules
    : modules.filter((module) => module.category === activeFilter);

  return filtered.filter((module) => {
    const searchable = `${module.title} ${module.summary} ${module.goals.join(' ')} ${module.lectures.join(' ')} ${module.exercises.join(' ')}`.toLowerCase();
    return searchable.includes(searchTerm.toLowerCase());
  });
}

function showModuleDetails(moduleId) {
  const module = modules.find((item) => item.id === moduleId);
  if (!module) return;

  expandedId = module.id;
  detailTitle.textContent = module.title;
  detailContent.innerHTML = `
    <div class="detail-section">
      <h4>Opis sklopa</h4>
      <p>${module.summary}</p>
      <p><strong>Ure:</strong> ${module.hours}</p>
    </div>

    <div class="detail-section">
      <h4>Predavanja</h4>
      <ul class="lecture-list">
        ${module.lectures.map((lecture) => `<li class="lecture-item">${lecture}</li>`).join('')}
      </ul>
    </div>

    <div class="detail-section">
      <h4>Vaje in naloge</h4>
      <ul class="exercise-list">
        ${module.exercises.map((exercise) => `<li class="exercise-item">${exercise}</li>`).join('')}
      </ul>
    </div>
  `;

  detailPanel.classList.remove('hidden');
  renderModules();
}

function renderModules() {
  const visibleModules = getVisibleModules();
  updateStats(visibleModules);

  if (!visibleModules.length) {
    moduleList.innerHTML = '<article class="module-card"><h3>Ni rezultatov</h3><p>Poskusite spremeniti iskalni pojem ali filter.</p></article>';
    return;
  }

  moduleList.innerHTML = visibleModules
    .map((module) => {
      const isExpanded = expandedId === module.id;
      const badgeClass = module.category;
      const goalMarkup = module.goals
        .slice(0, isExpanded ? module.goals.length : 3)
        .map((goal) => `<li>${goal}</li>`)
        .join('');

      return `
        <article class="module-card ${isExpanded ? 'expanded' : ''}">
          <div class="module-header">
            <h3>${module.title}</h3>
            <span class="module-badge ${badgeClass}">${module.category === 'obvezni' ? 'Obvezni' : 'Izbirni'}</span>
          </div>

          <div class="module-meta">
            <span>${module.category === 'obvezni' ? 'Učni sklop' : 'Opcijski sklop'}</span>
            <strong>${module.hours} ur</strong>
          </div>

          <p>${module.summary}</p>

          <ul>${goalMarkup}</ul>

          <button class="detail-btn" type="button" data-module-id="${module.id}">
            ${isExpanded ? 'Odpri vsebino predavanj' : 'Odpri vsebino predavanj'}
          </button>
        </article>
      `;
    })
    .join('');
}

function unlockApp() {
  const value = passwordInput.value.trim();

  if (value === SPECIAL_PASSWORD) {
    loginOverlay.classList.add('hidden');
    app.classList.remove('hidden');
    loginError.classList.add('hidden');
    passwordInput.value = '';
    return;
  }

  loginError.classList.remove('hidden');
  passwordInput.focus();
}

function lockApp() {
  app.classList.add('hidden');
  loginOverlay.classList.remove('hidden');
  loginError.classList.add('hidden');
  passwordInput.value = '';
  passwordInput.focus();
}

loginBtn.addEventListener('click', unlockApp);
logoutBtn.addEventListener('click', lockApp);
passwordInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') unlockApp();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    renderModules();
  });
});

searchInput.addEventListener('input', (event) => {
  searchTerm = event.target.value;
  renderModules();
});

moduleList.addEventListener('click', (event) => {
  const btn = event.target.closest('[data-module-id]');
  if (!btn) return;

  const { moduleId } = btn.dataset;
  showModuleDetails(moduleId);
});

closeDetail.addEventListener('click', () => {
  expandedId = null;
  detailPanel.classList.add('hidden');
  renderModules();
});

passwordInput.focus();
renderModules();
