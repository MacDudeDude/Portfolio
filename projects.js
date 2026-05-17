const projects = [
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
    title: "Survive 5 Minutes",
    tagline: "Unity / 5 Hours",
    description: "Survive 5 Minutes",
    link: "https://macdudedude.itch.io/5-minutes",
    image: "Graphics/Projects/Cards/ProjectCard.gif",
    date: "September 2025",
    score: "5",
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
  {
    title: "",
    tagline: "",
    description: "",
    link: "https://macdudedude.itch.io/",
    image: "Graphics/Projects/Cards/CardCover.gif",
    date: "",
    score: "None",
  },
];

const projectsContainer = document.getElementById("projects-cards");
projects.forEach(project => {
  projectsContainer.innerHTML += `
    <a class="project-stack-card-holder" href="${project.link}" target="_blank" rel="noopener noreferrer">
      <div class="project-stack-card">
      <div class="project-stack-bg" style="background-image: url('${project.image}')"></div>
        <div class="project-stack-bg" style="background-image: url(Graphics/Projects/Cards/Numbers/${project.score}.gif)"></div>
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