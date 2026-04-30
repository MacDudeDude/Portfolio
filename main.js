const projects = [
  {
    title: 'Speed Creators',
    description:
      'A hectic party platformer where everyone builds a slice of a sprawling level filled with movement altering blocks and deadly traps.',
    images: [
      'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
      'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
      'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
    ],
  },
  {
    title: 'Void Runner',
    description:
      'An endless runner set in deep space with procedurally generated obstacles and intense arcade momentum.',
    images: [
      'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
      'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
      'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
    ],
  },
];

function renderProjects() {
  const container = document.getElementById('projects-list');
  container.innerHTML = '';

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const info = document.createElement('div');
    info.className = 'project-info';
    info.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
    `;

    const gallery = document.createElement('div');
    gallery.className = 'project-gallery';

    project.images.forEach((src) => {
      const thumb = document.createElement('div');
      thumb.className = 'project-thumb';

      if (src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `${project.title} image`;
        thumb.appendChild(img);
      }

      gallery.appendChild(thumb);
    });

    card.appendChild(info);
    card.appendChild(gallery);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderProjects);
