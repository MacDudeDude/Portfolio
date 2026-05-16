const projects = [
  {
    title: "Airport Insecurity",
    tagline: "Unity / 3 Days",
    description: "find bombs hidden within luggage",
    link: "https://macdudedude.itch.io/airport-insecurity",
    image: "Graphics/Projects/Cards/AirportInsecurity.gif",
    date: "July 2025"
  },
  {
    title: "The Lost Line",
    tagline: "Unity / 10 Days",
    description: "fish - recycle - upgrade - fish",
    link: "https://macdudedude.itch.io/the-lost-line",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "June 2025"
  },
  {
    title: "Savor",
    tagline: "Unity / 2 Weeks",
    description: "eat well, feel well",
    link: "https://macdudedude.itch.io/savor",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "February 2025"
  },
  {
    title: "Survive 5 Minutes",
    tagline: "Unity / 1 Night",
    description: "Survive 5 Minutes",
    link: "https://macdudedude.itch.io/5-minutes",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "September 2025"
  },
  {
    title: "Ants Versus the (bug) World",
    tagline: "Unity / 3 Days",
    description: "ant pheromone rts",
    link: "https://macdudedude.itch.io/ant-you-see",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "October 2024"
  },
  {
    title: "Eyefall",
    tagline: "Unity / 1 Week",
    description: "fast paced fps where time slows on schedule",
    link: "https://macdudedude.itch.io/brackeystest",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "September 2024"
  },
  {
    title: "Hundred Mile Forecast",
    tagline: "Unity / 1 Month",
    description: "fight a giant UFO at 100 miles an hour",
    link: "https://macdudedude.itch.io/hundred-mile-forecast",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "January 2024"
  },
  {
    title: "Shootin' Birds",
    tagline: "Unity / 1 Week",
    description: "do what you must to reveal a bridge",
    link: "https://macdudedude.itch.io/shootin-birds",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "February 2022"
  },
  {
    title: "Weird Wizarding Baseball",
    tagline: "Unity / 1 Week",
    description: "...",
    link: "https://macdudedude.itch.io/weird-wizarding-baseball",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "August 2021"
  },
  {
    title: "PopChess",
    tagline: "Unity / 3 Days",
    description: "simple chess in a pop art style",
    link: "https://macdudedude.itch.io/chessfighter",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "August 2021"
  },
  {
    title: "Demon Child",
    tagline: "Unity / 10 Days",
    description: "prepare a snack for your child",
    link: "https://macdudedude.itch.io/demon-child",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "August 2021"
  },
  {
    title: "",
    tagline: "",
    description: "",
    link: "https://macdudedude.itch.io/",
    image: "Graphics/Projects/Cards/CardCover.gif",
    date: ""
  },
];

const projectsContainer = document.getElementById("projects-cards");
projects.forEach(project => {
  projectsContainer.innerHTML += `
    <a class="project-stack-card-holder" href="${project.link}" target="_blank" rel="noopener noreferrer">
      <div class="project-stack-card">
        <div class="project-stack-bg" style="background-image: url('${project.image}')"></div>
        <span class="project-stack-date">${project.date}</span>
        <div class="project-stack-content">
        <h2>${project.title}</h2>
        <p1>${project.tagline}</p1>
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