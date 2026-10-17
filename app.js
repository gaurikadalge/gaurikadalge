/**
 * Gauri Kadalge — Developer Dashboard & Profile Supercharger
 * Interactive Application Logic & GitHub Integration
 */

// Curated Project Catalog for Gauri Kadalge (with live fallbacks)
const INITIAL_PROJECTS = [
  {
    name: "iot-mesh-dashboard",
    fullName: "gaurikadalge/iot-mesh-dashboard",
    description: "3rd Semester major project. Real-time telemetry monitoring dashboard for IoT mesh node topologies, packet transmission health, and sensor visualizers.",
    language: "Python",
    category: "iot-embedded",
    stars: 0,
    forks: 0,
    tags: ["IoT", "Mesh Network", "Telemetry", "Dashboard", "Python"],
    featured: true,
    repoUrl: "https://github.com/gaurikadalge/iot-mesh-dashboard",
    demoUrl: null,
    highlights: "Designed topology visualizer for distributed sensor nodes with low latency packet tracking."
  },
  {
    name: "FinBuddy-MumbaiHacks2025",
    fullName: "gaurikadalge/FinBuddy-MumbaiHacks2025",
    description: "Voice-First Financial Assistant designed for India's Informal Economy. Multi-model ensemble incorporating 11 ML models for regional speech-to-intent and financial budgeting.",
    language: "Python",
    category: "hackathons",
    stars: 1,
    forks: 0,
    tags: ["Mumbai Hacks", "Voice AI", "11 ML Models", "Fintech", "NLP"],
    featured: true,
    repoUrl: "https://github.com/gaurikadalge/FinBuddy-MumbaiHacks2025",
    demoUrl: null,
    highlights: "Hackathon project integrating speech recognition, sentiment tracking, and risk advisory."
  },
  {
    name: "Spamlyser",
    fullName: "gaurikadalge/Spamlyser",
    description: "Real-time SMS spam classification platform with Streamlit and Transformers, backed by 4 custom-trained LLM backbones: DistilBERT, BERT, RoBERTa, and ALBERT.",
    language: "Python",
    category: "ai-ml",
    stars: 1,
    forks: 0,
    tags: ["Transformers", "DistilBERT", "RoBERTa", "Streamlit", "NLP"],
    featured: true,
    repoUrl: "https://github.com/gaurikadalge/Spamlyser",
    demoUrl: null,
    highlights: "Interactive visualizer comparing inference speed and precision across 4 LLM architectures."
  },
  {
    name: "NeuroSense-AI",
    fullName: "gaurikadalge/NeuroSense-AI",
    description: "Deep learning models for neural signal classification, EEG feature extraction, and predictive cognitive state modeling using PyTorch.",
    language: "Python",
    category: "ai-ml",
    stars: 0,
    forks: 0,
    tags: ["PyTorch", "Deep Learning", "Signal Processing", "AI"],
    featured: true,
    repoUrl: "https://github.com/gaurikadalge/NeuroSense-AI",
    demoUrl: null,
    highlights: "Explores neural network architectures for biological and sensory time-series data."
  },
  {
    name: "Mlops-CP",
    fullName: "gaurikadalge/Mlops-CP",
    description: "Production-oriented MLOps course project implementing data versioning, experiment tracking, automated model validation, and pipeline containerization.",
    language: "Python",
    category: "mlops-systems",
    stars: 1,
    forks: 0,
    tags: ["MLOps", "Model Tracking", "Pipelines", "Automation", "CI/CD"],
    featured: true,
    repoUrl: "https://github.com/gaurikadalge/Mlops-CP",
    demoUrl: null,
    highlights: "Focuses on reproducibility, automated evaluation metrics, and model lifecycle management."
  },
  {
    name: "DL-cp",
    fullName: "gaurikadalge/DL-cp",
    description: "Comprehensive Deep Learning course project exploring convolutional and sequence models, loss surface optimization, and regularized backpropagation.",
    language: "Python",
    category: "ai-ml",
    stars: 0,
    forks: 0,
    tags: ["Deep Learning", "CNN", "RNN", "Optimization"],
    featured: false,
    repoUrl: "https://github.com/gaurikadalge/DL-cp",
    demoUrl: null,
    highlights: "Architectural comparison across standard benchmark vision and sequence datasets."
  },
  {
    name: "Intelligent-DS-Optimizer",
    fullName: "gaurikadalge/Intelligent-DS-Optimizer",
    description: "C++ system leveraging Machine Learning to analyze workload access patterns and dynamically recommend optimal data structure configurations.",
    language: "C++",
    category: "mlops-systems",
    stars: 0,
    forks: 0,
    tags: ["C++", "Data Structures", "ML Recommendation", "Algorithms"],
    featured: true,
    repoUrl: "https://github.com/gaurikadalge/Intelligent-DS-Optimizer",
    demoUrl: null,
    highlights: "Bridges systems programming efficiency with ML-driven performance profiling."
  },
  {
    name: "OFFAIR",
    fullName: "gaurikadalge/OFFAIR",
    description: "iSIH 2026 (Internal Smart India Hackathon). Resilient, decentralized offline communication protocol and emergency mesh data relay.",
    language: "Python",
    category: "hackathons",
    stars: 0,
    forks: 0,
    tags: ["iSIH 2026", "Offline Mesh", "Smart India Hackathon", "Resilience"],
    featured: false,
    repoUrl: "https://github.com/gaurikadalge/OFFAIR",
    demoUrl: null,
    highlights: "Designed to operate in disconnected disaster environments with store-and-forward routing."
  },
  {
    name: "NXP_CUP_INDIA_2026",
    fullName: "gaurikadalge/NXP_CUP_INDIA_2026",
    description: "Autonomous race car navigation software for NXP Cup India 2026. High-speed track following, camera vision heuristics, and motor PID control on NXP microcontrollers.",
    language: "C++",
    category: "iot-embedded",
    stars: 0,
    forks: 0,
    tags: ["NXP Cup", "Robotics", "PID Control", "Embedded C++"],
    featured: false,
    repoUrl: "https://github.com/gaurikadalge/NXP_CUP_INDIA_2026",
    demoUrl: null,
    highlights: "Real-time edge computing on miniature autonomous vehicles navigating tight curves."
  },
  {
    name: "emergency-route-finder",
    fullName: "gaurikadalge/emergency-route-finder",
    description: "Graph algorithm project utilizing Dijkstra & A* search to calculate fastest emergency response routes avoiding congestion and obstacles.",
    language: "JavaScript",
    category: "web-dbms",
    stars: 0,
    forks: 0,
    tags: ["Algorithms", "Dijkstra", "Graph Theory", "JavaScript"],
    featured: false,
    repoUrl: "https://github.com/gaurikadalge/emergency-route-finder",
    demoUrl: null,
    highlights: "Interactive visualizer illustrating pathfinding iterations in real-time."
  },
  {
    name: "Cultural-Heritage-site",
    fullName: "gaurikadalge/Cultural-Heritage-site",
    description: "Database Management System (DBMS) web portal managing indexed historical artifacts, cultural locations, and relational catalog queries.",
    language: "HTML",
    category: "web-dbms",
    stars: 0,
    forks: 0,
    tags: ["DBMS", "SQL", "Web Portal", "Data Modeling"],
    featured: false,
    repoUrl: "https://github.com/gaurikadalge/Cultural-Heritage-site",
    demoUrl: null,
    highlights: "Demonstrates relational database normalization, triggers, and query indexing."
  },
  {
    name: "attendance-app",
    fullName: "gaurikadalge/attendance-app",
    description: "Python and DBMS application for automated classroom and organizational attendance records with analytical reporting.",
    language: "Python",
    category: "web-dbms",
    stars: 0,
    forks: 0,
    tags: ["Python", "DBMS", "MySQL", "Desktop App"],
    featured: false,
    repoUrl: "https://github.com/gaurikadalge/attendance-app",
    demoUrl: null,
    highlights: "Simplified daily operations with automated monthly attendance summaries."
  },
  {
    name: "virtual-learning-system",
    fullName: "gaurikadalge/virtual-learning-system",
    description: "Modular educational system architecture demonstrating Object-Oriented Design patterns, inheritance, polymorphism, and file persistence in modern C++.",
    language: "C++",
    category: "mlops-systems",
    stars: 0,
    forks: 0,
    tags: ["C++", "OOP", "Design Patterns", "Clean Code"],
    featured: false,
    repoUrl: "https://github.com/gaurikadalge/virtual-learning-system",
    demoUrl: null,
    highlights: "Clear object models representing students, courses, assignments, and gradebooks."
  }
];

// Profile README Markdown Template (styled after Omkar-SK & Anuz-bit)
const GITHUB_PROFILE_README_MARKDOWN = `<div align="center">

<img src=".github/assets/banner.svg" width="100%" alt="Gauri Kadalge — AI & Systems Developer"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=15&duration=3000&pause=1000&color=38BDF8&center=true&vCenter=true&random=false&width=620&lines=AI+%26+Deep+Learning+Engineer;MLOps+Pipelines+%C2%B7+Transformers+%C2%B7+IoT+Telemetry;Building+reliable+intelligent+systems+at+scale;Finalist+@+Mumbai+Hacks+2025+%C2%B7+iSIH+2026;Open+to+AI+%2F+ML+%2F+SWE+Internships+%26+Roles)](https://git.io/typing-svg)

<br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0284C7?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/gauri-kadalge)&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-090D16?style=flat-square&logo=github&logoColor=white)](https://github.com/gaurikadalge)&nbsp;
[![Email](https://img.shields.io/badge/Email-0EA5E9?style=flat-square&logo=microsoftoutlook&logoColor=white)](mailto:kadalgegauri@gmail.com)&nbsp;
![Profile Views](https://komarev.com/ghpvc/?username=gaurikadalge&style=flat-square&color=0284C7&label=profile+views)

</div>

---

## About

I'm a Computer Science & Engineering student at **VIT Pune**, specializing in **Machine Learning, MLOps automation, and IoT telemetry architectures**.

This year I co-engineered **FinBuddy** (Finalist at **Mumbai Hacks 2025**) — an intelligent voice-first financial guidance engine integrating **11 specialized ML models** for conversational speech-to-intent and regional financial budgeting. I also built **iot-mesh-dashboard**, a real-time telemetry visualizer for distributed IoT mesh network topologies, and **Spamlyser**, an SMS classification platform backed by 4 custom transformer backbones (*DistilBERT, BERT, RoBERTa, and ALBERT*).

My technical foundation bridges intelligent models with scalable systems execution: **C++** for low-latency algorithms and embedded microcontrollers, and **Python** for end-to-end Deep Learning, MLOps, and real-time inference.

> *"Reliable systems aren't just accurate — they are resilient, reproducible, and verifiable."*

📍 Pune, Maharashtra &nbsp;·&nbsp; 🎓 VIT Pune, B.Tech &nbsp;·&nbsp; 🎯 Open to AI · ML · Systems Engineering internships & roles

---

## 🔨 Currently Working On

<!-- ACTIVITY:START -->
> 🔨 **Currently hacking on:** [\`iot-mesh-dashboard\`](https://github.com/gaurikadalge/iot-mesh-dashboard) & Transformer optimization  
> 💬 **Focus:** Real-time sensor mesh topology monitoring, reproducible MLOps pipelines, and speech NLP.  
> 🕐 **Status:** Active development &bull; 2026
<!-- ACTIVITY:END -->

---

## 🏆 Hackathons & Experience

| Role / Honor | Event & Affiliation | Key Contributions |
|:---|:---|:---|
| **Finalist & ML Engineer** | Mumbai Hacks 2025 · *FinBuddy* | Orchestrated 11 modular ML models for voice-first financial intent, audio transcription, and predictive budgeting |
| **Project Lead** | iSIH 2026 (Smart India Hackathon) · *OFFAIR* | Resilient offline emergency mesh protocol and peer-to-peer data relay under disconnected infrastructure |
| **Robotics Systems Developer** | NXP Cup India 2026 · *Autonomous Platform* | Autonomous race car track navigation, camera vision heuristics, and motor PID control on NXP automotive microcontrollers |

---

## 🌟 Featured Repositories

| Repository | Tech Stack | Highlights |
|:---|:---|:---|
| 📡 [**iot-mesh-dashboard**](https://github.com/gaurikadalge/iot-mesh-dashboard) | \`Python\` \`IoT Mesh\` \`Telemetry\` | Real-time telemetry monitoring dashboard for mesh node topologies, transmission health, and packet visualizers. |
| 🎙️ [**FinBuddy-MumbaiHacks2025**](https://github.com/gaurikadalge/FinBuddy-MumbaiHacks2025) | \`Python\` \`11 ML Models\` \`Voice AI\` | Voice-first financial assistant designed for India's informal economy with multi-model speech and risk prediction. |
| 🛡️ [**Spamlyser**](https://github.com/gaurikadalge/Spamlyser) | \`Transformers\` \`Streamlit\` \`NLP\` | Real-time SMS spam detection platform powered by 4 custom transformer backbones: DistilBERT, BERT, RoBERTa, and ALBERT. |
| ⚙️ [**Mlops-CP**](https://github.com/gaurikadalge/Mlops-CP) | \`MLOps\` \`Pipelines\` \`Tracking\` | Production-oriented MLOps workflow implementing data versioning, experiment tracking, and automated validation. |
| ⚡ [**Intelligent-DS-Optimizer**](https://github.com/gaurikadalge/Intelligent-DS-Optimizer) | \`C++\` \`Machine Learning\` \`Algorithms\` | C++ system leveraging ML to analyze runtime workload access patterns and dynamically recommend optimal data structures. |
| 🧠 [**NeuroSense-AI**](https://github.com/gaurikadalge/NeuroSense-AI) | \`PyTorch\` \`Deep Learning\` \`Signals\` | Neural network architectures for biological and sensory time-series feature extraction and classification. |

---

## 🛠️ Technical Arsenal

| Category | Technologies & Tools |
|:---|:---|
| **Languages** | \`Python\`, \`C++\`, \`SQL\`, \`JavaScript\`, \`Bash\` |
| **AI & Deep Learning** | \`PyTorch\`, \`TensorFlow\`, \`HuggingFace Transformers\`, \`Scikit-Learn\`, \`NLP\`, \`OpenCV\` |
| **MLOps & DevOps** | \`Streamlit\`, \`MLflow / Experiment Tracking\`, \`Docker\`, \`Git & GitHub Actions\`, \`CI/CD\`, \`REST APIs\` |
| **Systems & Hardware** | \`IoT Mesh Networks\`, \`Embedded C++\`, \`Data Structures & Algorithms\`, \`PID Control\`, \`Linux\` |
| **Databases & Web** | \`MySQL\`, \`Relational Schema Normalization\`, \`HTML5\`, \`CSS3\`, \`WebSockets\` |

---

## 📊 GitHub Analytics

<div align="center">

<img height="170em" src="https://github-readme-stats.vercel.app/api?username=gaurikadalge&show_icons=true&include_all_commits=true&count_private=true&hide_border=true&title_color=38BDF8&icon_color=38BDF8&text_color=94A3B8&bg_color=090D16&border_color=1E293B"/>
<img height="170em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=gaurikadalge&layout=compact&langs_count=8&hide_border=true&title_color=38BDF8&text_color=94A3B8&bg_color=090D16&border_color=1E293B"/>

<br/>

<img src="https://streak-stats.demolab.com?user=gaurikadalge&hide_border=true&background=090D16&ring=38BDF8&fire=38BDF8&currStreakLabel=38BDF8&sideLabels=64748B&stroke=1E293B" width="55%"/>

</div>

<br/>

<img src="https://github-readme-activity-graph.vercel.app/graph?username=gaurikadalge&bg_color=090D16&color=38BDF8&line=38BDF8&point=F8FAFC&area=true&area_color=38BDF820&hide_border=true" width="100%"/>

---

## 🐍 Contribution Graph

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/gaurikadalge/gaurikadalge/output/github-snake-dark.svg"/>
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/gaurikadalge/gaurikadalge/output/github-snake.svg"/>
  <img alt="contribution snake" src="https://raw.githubusercontent.com/gaurikadalge/gaurikadalge/output/github-snake.svg"/>
</picture>
</div>

---

<div align="center">
  <sub>⚡ Designed with precision & elegance &bull; <a href="https://github.com/gaurikadalge">Gauri Kadalge</a></sub>
</div>
`;



// Helper: Language color mapper
function getLangColor(lang) {
  const colors = {
    "Python": "#3572A5",
    "C++": "#f34b7d",
    "JavaScript": "#f1e05a",
    "HTML": "#e34c26",
    "CSS": "#563d7c",
    "TypeScript": "#3178c6",
    "default": "#38bdf8"
  };
  return colors[lang] || colors["default"];
}

// App State
const state = {
  projects: [...INITIAL_PROJECTS],
  currentFilter: 'all',
  searchQuery: '',
  theme: localStorage.getItem('gk_theme') || 'dark'
};

// DOM References
const elements = {
  projectsGrid: document.getElementById('projectsGrid'),
  projectSearchInput: document.getElementById('projectSearchInput'),
  filterTabs: document.getElementById('filterTabs'),
  noResultsMessage: document.getElementById('noResultsMessage'),
  resetFilterBtn: document.getElementById('resetFilterBtn'),
  themeToggle: document.getElementById('themeToggle'),
  copyReadmeBtn: document.getElementById('copyReadmeBtn'),
  copyBtnText: document.getElementById('copyBtnText'),
  rawMarkdownCode: document.getElementById('rawMarkdownCode'),
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toastMessage'),
  repoModal: document.getElementById('repoModal'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalContent: document.getElementById('modalContent'),
  counts: {
    all: document.getElementById('countAll'),
    ai: document.getElementById('countAi'),
    systems: document.getElementById('countSystems'),
    iot: document.getElementById('countIot'),
    hackathons: document.getElementById('countHackathon'),
    web: document.getElementById('countWeb')
  }
};

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initReadmePreview();
  renderProjectCounts();
  renderProjects();
  setupEventListeners();
  fetchLiveGitHubUser();
});

// Setup Events
function setupEventListeners() {
  // Theme Toggle
  elements.themeToggle.addEventListener('click', toggleTheme);

  // Search Input
  elements.projectSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    renderProjects();
  });

  // Filter Buttons
  elements.filterTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.currentFilter = btn.dataset.filter;
    renderProjects();
  });

  // Reset filter button
  elements.resetFilterBtn.addEventListener('click', () => {
    state.currentFilter = 'all';
    state.searchQuery = '';
    elements.projectSearchInput.value = '';
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === 'all');
    });
    renderProjects();
  });

  // Copy Readme Button
  elements.copyReadmeBtn.addEventListener('click', copyMarkdownToClipboard);

  // Readme Preview Tabs (Rendered vs Raw)
  document.querySelectorAll('.preview-tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.preview-tab-btn').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetTab = tab.dataset.tab;
      document.getElementById('renderedView').classList.toggle('active', targetTab === 'rendered');
      document.getElementById('rawView').classList.toggle('active', targetTab === 'raw');
    });
  });

  // Modal Close
  elements.modalCloseBtn.addEventListener('click', closeModal);
  elements.repoModal.addEventListener('click', (e) => {
    if (e.target === elements.repoModal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// Theme handling
function initTheme() {
  document.body.setAttribute('data-theme', state.theme);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', state.theme);
  localStorage.setItem('gk_theme', state.theme);
}

// Initialize Profile README code in preview block
function initReadmePreview() {
  elements.rawMarkdownCode.textContent = GITHUB_PROFILE_README_MARKDOWN.trim();
}

// Render Project Counts in Filter Tabs
function renderProjectCounts() {
  const all = state.projects.length;
  const ai = state.projects.filter(p => p.category === 'ai-ml').length;
  const systems = state.projects.filter(p => p.category === 'mlops-systems').length;
  const iot = state.projects.filter(p => p.category === 'iot-embedded').length;
  const hackathons = state.projects.filter(p => p.category === 'hackathons').length;
  const web = state.projects.filter(p => p.category === 'web-dbms').length;

  if (elements.counts.all) elements.counts.all.textContent = all;
  if (elements.counts.ai) elements.counts.ai.textContent = ai;
  if (elements.counts.systems) elements.counts.systems.textContent = systems;
  if (elements.counts.iot) elements.counts.iot.textContent = iot;
  if (elements.counts.hackathons) elements.counts.hackathons.textContent = hackathons;
  if (elements.counts.web) elements.counts.web.textContent = web;
}

// Render Project Cards
function renderProjects() {
  const filtered = state.projects.filter(project => {
    // Category match
    const categoryMatch = state.currentFilter === 'all' || project.category === state.currentFilter;

    // Search query match (name, description, tags, language)
    const query = state.searchQuery;
    const searchMatch = !query ||
      project.name.toLowerCase().includes(query) ||
      (project.description && project.description.toLowerCase().includes(query)) ||
      (project.language && project.language.toLowerCase().includes(query)) ||
      (project.tags && project.tags.some(tag => tag.toLowerCase().includes(query)));

    return categoryMatch && searchMatch;
  });

  if (filtered.length === 0) {
    elements.projectsGrid.innerHTML = '';
    elements.noResultsMessage.classList.remove('hidden');
    return;
  }

  elements.noResultsMessage.classList.add('hidden');
  elements.projectsGrid.innerHTML = filtered.map(p => createProjectCardHTML(p)).join('');

  // Add click listener for quick info
  elements.projectsGrid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // If clicking an external link, don't open modal
      if (e.target.closest('a')) return;
      const repoName = card.dataset.repoName;
      const project = state.projects.find(item => item.name === repoName);
      if (project) openModal(project);
    });
  });
}

// Create Project Card HTML
function createProjectCardHTML(p) {
  const langColor = getLangColor(p.language);
  const featuredBadge = p.featured ? `<span class="card-badge badge-featured">Featured</span>` : '';
  const hackathonBadge = p.category === 'hackathons' ? `<span class="card-badge badge-hackathon">Hackathon</span>` : '';

  return `
    <article class="project-card" data-repo-name="${p.name}">
      <div>
        <div class="card-top">
          <div class="card-badge-row">
            <span class="card-badge">${formatCategoryName(p.category)}</span>
            ${featuredBadge}
            ${hackathonBadge}
          </div>
          <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="card-link-btn" title="Open on GitHub">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>

        <h3 class="project-card-title">
          <span>${p.name}</span>
        </h3>

        <p class="project-desc">${p.description || "Experimental repository and technical architecture prototype."}</p>

        <div class="card-pills">
          ${(p.tags || []).slice(0, 4).map(t => `<span class="card-pill">${t}</span>`).join('')}
        </div>
      </div>

      <div class="card-footer">
        <div class="card-lang">
          <span class="lang-dot" style="background-color: ${langColor};"></span>
          <span>${p.language || "General"}</span>
        </div>

        <div class="card-actions">
          <span title="Click for details" style="cursor: pointer; font-size: 0.75rem; color: var(--accent-cyan);">Inspect Details &rarr;</span>
        </div>
      </div>
    </article>
  `;
}

function formatCategoryName(cat) {
  switch (cat) {
    case 'ai-ml': return 'AI & ML';
    case 'mlops-systems': return 'MLOps & Systems';
    case 'iot-embedded': return 'IoT Telemetry';
    case 'hackathons': return 'Hackathon';
    case 'web-dbms': return 'Web & DBMS';
    default: return 'Project';
  }
}

// Modal handling
function openModal(p) {
  const langColor = getLangColor(p.language);
  elements.modalContent.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
        <span class="card-badge">${formatCategoryName(p.category)}</span>
        <span style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">${p.fullName}</span>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary);">${p.name}</h2>
    </div>

    <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
      ${p.description || "Detailed project repository."}
    </p>

    ${p.highlights ? `
      <div style="background: var(--bg-card-solid); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem;">
        <span style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--accent-cyan); margin-bottom: 0.35rem;">Technical Highlight</span>
        <p style="font-size: 0.85rem; color: var(--text-primary); margin: 0;">${p.highlights}</p>
      </div>
    ` : ''}

    <div style="margin-bottom: 1.5rem;">
      <span style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">Tech Stack & Concepts</span>
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
        ${(p.tags || []).map(t => `<span class="skill-pill">${t}</span>`).join('')}
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <span style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">Clone Repository</span>
      <div style="display: flex; gap: 0.5rem;">
        <input type="text" readonly value="git clone ${p.repoUrl}.git" style="background: var(--bg-input); border: 1px solid var(--border-subtle); color: #cbd5e1; font-family: var(--font-mono); font-size: 0.8rem; padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); flex-grow: 1; outline: none;">
        <button id="copyCloneBtn" class="btn btn-sm btn-secondary">Copy</button>
      </div>
    </div>

    <div style="display: flex; gap: 0.75rem; border-top: 1px solid var(--border-subtle); padding-top: 1.25rem;">
      <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        <span>Open on GitHub</span>
      </a>
      <button onclick="document.getElementById('repoModal').classList.add('hidden')" class="btn btn-secondary">Close</button>
    </div>
  `;

  // Clone copy button logic
  const copyCloneBtn = document.getElementById('copyCloneBtn');
  if (copyCloneBtn) {
    copyCloneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(`git clone ${p.repoUrl}.git`).then(() => {
        copyCloneBtn.textContent = 'Copied!';
        setTimeout(() => copyCloneBtn.textContent = 'Copy', 2000);
      });
    });
  }

  elements.repoModal.classList.remove('hidden');
}

function closeModal() {
  elements.repoModal.classList.add('hidden');
}

// Copy Profile README Markdown
function copyMarkdownToClipboard() {
  navigator.clipboard.writeText(GITHUB_PROFILE_README_MARKDOWN.trim())
    .then(() => {
      showToast("Profile README Markdown copied to clipboard!");
      elements.copyBtnText.textContent = "Copied!";
      setTimeout(() => {
        elements.copyBtnText.textContent = "Copy Markdown";
      }, 2500);
    })
    .catch(err => {
      console.error("Clipboard copy failed:", err);
      showToast("Could not copy automatically. Select and copy from Raw tab.");
    });
}

// Toast notification
function showToast(msg) {
  elements.toastMessage.textContent = msg;
  elements.toast.classList.remove('hidden');
  setTimeout(() => {
    elements.toast.classList.add('hidden');
  }, 3200);
}

// Optional live GitHub user sync
async function fetchLiveGitHubUser() {
  try {
    const res = await fetch('https://api.github.com/users/gaurikadalge');
    if (!res.ok) return;
    const data = await res.json();

    if (data.name) {
      document.getElementById('userName').textContent = data.name;
    }
    if (data.avatar_url) {
      document.getElementById('userAvatar').src = data.avatar_url;
    }
    if (data.public_repos !== undefined) {
      document.getElementById('kpiRepos').textContent = data.public_repos;
    }
    if (data.followers !== undefined) {
      document.getElementById('kpiFollowers').textContent = data.followers;
    }
    if (data.following !== undefined) {
      document.getElementById('kpiFollowing').textContent = data.following;
    }
    if (data.location) {
      document.getElementById('userLocation').textContent = data.location;
    }
  } catch (e) {
    console.log("Using cached user metadata.");
  }
}
