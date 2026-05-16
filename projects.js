const projects = [
  {
    title: "Project Atlas",
    description: "A cinematic exploration game with procedural environments.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Nebula UI",
    description: "A futuristic dashboard interface for space analytics.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Echo Engine",
    description: "A custom rendering engine for stylized visuals.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Project Atlas",
    description: "A cinematic exploration game with procedural environments.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Nebula UI",
    description: "A futuristic dashboard interface for space analytics.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Echo Engine",
    description: "A custom rendering engine for stylized visuals.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Project Atlas",
    description: "A cinematic exploration game with procedural environments.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Nebula UI",
    description: "A futuristic dashboard interface for space analytics.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Echo Engine",
    description: "A custom rendering engine for stylized visuals.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Echo Engine",
    description: "A custom rendering engine for stylized visuals.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Project Atlas",
    description: "A cinematic exploration game with procedural environments.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Nebula UI",
    description: "A futuristic dashboard interface for space analytics.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Echo Engine",
    description: "A custom rendering engine for stylized visuals.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
  {
    title: "Project Atlas",
    description: "A cinematic exploration game with procedural environments.",
    link: "#",
    image: "Graphics/Projects/ProjectCard.gif",
    date: "2025–2026"
  },
];

const projectsContainer = document.getElementById("projects-cards");
projects.forEach(project => {
  projectsContainer.innerHTML += `
    <a class="project-stack-card-holder" href="${project.link}">
      <div class="project-stack-card">
        <div class="project-stack-bg" style="background-image: url('${project.image}')"></div>
        <span class="project-stack-date">${project.date}</span>
        <div class="project-stack-content">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
        </div>
      </div>
    </a>
  `;
});

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

updateCardLayout();
window.addEventListener("resize", updateCardLayout);