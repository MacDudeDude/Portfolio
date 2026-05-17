const projects = [
  {
    title: "Survive 5 Minutes",
    tagline: "Unity / 5 Hours",
    description: "Survive 5 Minutes",
    link: "https://macdudedude.itch.io/5-minutes",
    image: "Graphics/Projects/Cards/S5M.gif",
    date: "September 2025",
    score: "5",
  },
  {
    title: "Airport Insecurity",
    tagline: "Unity / 3 Days",
    description: "find bombs hidden within luggage",
    link: "https://macdudedude.itch.io/airport-insecurity",
    image: "Graphics/Projects/Cards/AirportInsecurity.gif",
    date: "July 2025",
    score: "8",
  },
  {
    title: "The Lost Line",
    tagline: "Unity / 10 Days",
    description: "fish - recycle - upgrade - fish",
    link: "https://macdudedude.itch.io/the-lost-line",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "June 2025",
    score: "11",
  },
  {
    title: "Savor",
    tagline: "Unity / 2 Weeks",
    description: "eat well, feel well",
    link: "https://macdudedude.itch.io/savor",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "February 2025",
    score: "6",
  },
  {
    title: "Ants Versus the (bug) World",
    tagline: "Unity / 3 Days",
    description: "ant pheromone rts",
    link: "https://macdudedude.itch.io/ant-you-see",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "October 2024",
    score: "12",
  },
  {
    title: "Eyefall",
    tagline: "Unity / 1 Week",
    description: "fast paced fps where time slows on schedule",
    link: "https://macdudedude.itch.io/brackeystest",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "September 2024",
    score: "10",
  },
  {
    title: "Hundred Mile Forecast",
    tagline: "Unity / 1 Month",
    description: "fight a giant UFO at 100 miles an hour",
    link: "https://macdudedude.itch.io/hundred-mile-forecast",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "January 2024",
    score: "9",
  },
  {
    title: "Shootin' Birds",
    tagline: "Unity / 1 Week",
    description: "do what you must to reveal a bridge",
    link: "https://macdudedude.itch.io/shootin-birds",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "February 2022",
    score: "7",
  },
  {
    title: "Weird Wizarding Baseball",
    tagline: "Unity / 1 Week",
    description: "...",
    link: "https://macdudedude.itch.io/weird-wizarding-baseball",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "August 2021",
    score: "4",
  },
  {
    title: "PopChess",
    tagline: "Unity / 3 Days",
    description: "simple chess in a pop art style",
    link: "https://macdudedude.itch.io/chessfighter",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "August 2021",
    score: "2",
  },
  {
    title: "Demon Child",
    tagline: "Unity / 10 Days",
    description: "prepare a snack for your child",
    link: "https://macdudedude.itch.io/demon-child",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "August 2021",
    score: "3",
  },
];

const projectsContainer = document.getElementById("projects-cards");
const controlsContainer = document.getElementById("projects-controls");

projects.forEach((p, i) => {
  if (p._id === undefined) p._id = i;
});

function createProjectCardHTML(project) {
  return `
    <a class="project-stack-card-holder" data-id="${project._id}" href="${project.link}" target="_blank" rel="noopener noreferrer">
      <div class="project-stack-card">
        <div class="project-stack-bg" style="background-image: url('${project.image}')"></div>
        <div class="project-stack-bg" style="background-image: url(Graphics/Projects/Cards/Numbers/${project.score}.gif)"></div>
        <div class="project-stack-content">
          <div class="project-stack-date">${project.date}</div>
          <h2>${project.title}</h2>
          <p1>${project.tagline}</p1>
          <p>${project.description}</p>
        </div>
      </div>
    </a>
  `;
}

function renderProjects(list) {
  const oldRects = new Map();
  document.querySelectorAll('.project-stack-card-holder').forEach(el => {
    const id = el.getAttribute('data-id');
    if (id) oldRects.set(id, el.getBoundingClientRect());
  });
  
  projectsContainer.innerHTML = '';
  list.forEach(project => {
    projectsContainer.innerHTML += createProjectCardHTML(project);
  });

  projectsContainer.innerHTML += `
<a class="project-stack-card-holder" href="https://macdudedude.itch.io/" target="_blank" rel="noopener noreferrer">
  <div class="project-stack-card">
    <div class="project-stack-bg" style="background-image: url(Graphics/Projects/Cards/CardCover.gif)"></div>
  </div>
</a>
`;

  updateCardLayout();

  const newEls = Array.from(document.querySelectorAll('.project-stack-card-holder'));
  newEls.forEach(el => {
    const id = el.getAttribute('data-id');
    const newRect = el.getBoundingClientRect();
    const oldRect = oldRects.get(id);
    if (oldRect) {
      const dx = oldRect.left - newRect.left;
      const dy = oldRect.top - newRect.top;
      if (dx !== 0 || dy !== 0) {
        el.style.transform = `translate(${dx}px, ${dy}px)`;
        // force reflow
        el.getBoundingClientRect();
        el.style.transition = 'transform 550ms cubic-bezier(0.2,0,0,1)';
        requestAnimationFrame(() => {
          el.style.transform = '';
        });
        el.addEventListener('transitionend', function te() {
          el.style.transition = '';
          el.removeEventListener('transitionend', te);
        });
      }
    }
  });
}

function updateCardLayout() {
  const holders = document.querySelectorAll(".project-stack-card-holder");
  const count = holders.length;
  if (count === 0) return;

  const containerWidth = projectsContainer.getBoundingClientRect().width;
  const cardWidth = containerWidth * 0.25;

  let marginLeft;
  if (count <= 1) {
    marginLeft = 0;
  } else {
    const visiblePart = (containerWidth - cardWidth) / (count - 1);
    marginLeft = visiblePart - cardWidth;
  }

  holders.forEach((card, i) => {
    if (i === 0) {
      card.style.marginLeft = "0px";
    } else {
      card.style.marginLeft = `${marginLeft}px`;
    }
  });
}

function parseProjectDate(dateString) {
  if (!dateString) return 0;
  const months = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
  };
  const parts = dateString.trim().split(/\s+/);
  if (parts.length === 2) {
    const month = months[parts[0].toLowerCase()];
    const year = parseInt(parts[1], 10);
    if (month !== undefined && !isNaN(year)) {
      return new Date(year, month, 1).getTime();
    }
  }

  const fallback = new Date(dateString);
  return isNaN(fallback.getTime()) ? 0 : fallback.getTime();
}

function parseProjectScore(scoreString) {
  const n = parseFloat(scoreString);
  return isNaN(n) ? -Infinity : n;
}

function sortByDateDesc() {
  projects.sort((a, b) => parseProjectDate(b.date) - parseProjectDate(a.date));
  renderProjects(projects);
}

function sortByScoreDesc() {
  projects.sort((a, b) => parseProjectScore(b.score) - parseProjectScore(a.score));
  renderProjects(projects);
}

function shuffleProjects() {
  for (let i = projects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [projects[i], projects[j]] = [projects[j], projects[i]];
  }
  renderProjects(projects);
}

function clearActiveButtons() {
  const btns = controlsContainer.querySelectorAll('.project-filter-btn');
  btns.forEach(b => b.classList.remove('active'));
}

function setupControls() {
  if (!controlsContainer) return;

  controlsContainer.innerHTML = `
  <button class="project-filter-btn" data-action="date">
  <img src="Graphics/Projects/Cards/Buttons/TimeFilter.gif" alt="Sort by date"/>
  </button>
  <button class="project-filter-btn" data-action="score">
  <img src="Graphics/Projects/Cards/Buttons/RatingFilter.gif" alt="Sort by score" />
  </button>
  <button class="project-filter-btn" data-action="shuffle">
  <img src="Graphics/Projects/Cards/Buttons/RandomFilter.gif" alt="Shuffle projects" />
  </button>
  `;

  controlsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.project-filter-btn');
    if (!btn) return;
    const action = btn.getAttribute('data-action');
    clearActiveButtons();
    btn.classList.add('active');
    if (action === 'date') sortByDateDesc();
    else if (action === 'score') sortByScoreDesc();
    else if (action === 'shuffle') shuffleProjects();
  });
}

setupControls();
renderProjects(projects);

window.addEventListener("resize", updateCardLayout);