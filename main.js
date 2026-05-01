class Project {
  constructor(title, description, images, backgroundImages) {
    this.title = title;
    this.description = description;
    this.images = images;
    this.backgroundImages = backgroundImages;
  }

  render() {
    const card = document.createElement('article');
    card.className = 'project-card';

    const info = document.createElement('div');
    info.className = 'project-info';
    const descriptionWithLineBreaks = this.description.replace(/\n/g, '<br>');
    info.innerHTML = `
      <h2>${this.title}</h2>
      <p>${descriptionWithLineBreaks}</p>
    `;

    const gallery = document.createElement('div');
    gallery.className = 'project-gallery';

    this.images.forEach((src, imageIndex) => {
      const thumb = document.createElement('div');
      thumb.className = 'project-thumb';

      const backgroundSrc = this.backgroundImages?.[imageIndex] || src;
      const isBackgroundVideo = backgroundSrc.toLowerCase().endsWith('.mp4') || backgroundSrc.toLowerCase().endsWith('.webm') || backgroundSrc.toLowerCase().endsWith('.ogg');
      if (isBackgroundVideo) {
        const backdropVideo = document.createElement('video');
        backdropVideo.className = 'project-thumb-background';
        backdropVideo.src = backgroundSrc;
        backdropVideo.autoplay = true;
        backdropVideo.muted = true;
        backdropVideo.loop = true;
        backdropVideo.playsInline = true;
        backdropVideo.style.position = 'absolute';
        backdropVideo.style.inset = '0';
        backdropVideo.style.width = '100%';
        backdropVideo.style.height = '100%';
        backdropVideo.style.objectFit = 'cover';
        backdropVideo.style.zIndex = '0';
        thumb.appendChild(backdropVideo);
      } else {
        const backdrop = document.createElement('div');
        backdrop.className = 'project-thumb-background';
        backdrop.style.backgroundImage = `url('${backgroundSrc}')`;
        thumb.appendChild(backdrop);
      }

      if (src) {
        const isVideo = src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm') || src.toLowerCase().endsWith('.ogg');
        if (isVideo) {
          const video = document.createElement('video');
          video.src = src;
          video.autoplay = true;
          video.poster = 'Images/VideoPlaceholder.gif';
          video.muted = true;
          video.loop = true;
          video.playsInline = true;
          video.style.width = '100%';
          video.style.height = '100%';
          video.style.objectFit = 'cover';
          thumb.appendChild(video);
        } else {
          const img = document.createElement('img');
          img.src = src;
          img.alt = `${this.title} image`;
          thumb.appendChild(img);
        }
      }

      gallery.appendChild(thumb);
    });

    card.appendChild(info);
    card.appendChild(gallery);
    return card;
  }
}

class ProjectsManager {
  constructor(projects = []) {
    this.projects = projects;
  }

  addProject(title, description, images, backgroundImages = []) {
    this.projects.push(new Project(title, description, images, backgroundImages));
  }

  render(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    this.projects.forEach((project) => {
      container.appendChild(project.render());
    });
  }
}

const projectsManager = new ProjectsManager([
  new Project(
    'Speed Creators',
    'A hectic party platformer for 2-200 players, where everyone builds one piece of the final level before racing through it.  \n\nDeveloped an in game level editor.  Optimized audio and object pooling.  Custom networking solution using Facepunch.Steamworks.',
    [
      'Images/FightingGif.mp4',
      'Images/LevelBuildingGif.mp4',
    ],
    [
      'Images/Peeking1.gif',
      'Images/Peeking2.gif',
    ]
  ),
  new Project(
    'Skyrail Rush',
    'An FPS boss rush set on a self balancing monorail.  Created a custom boss and weapon system.  Made in one month for the boss rush game jam 2025.',
    [
      'Images/SkyrailRushCuts.mp4',
      'Images/SkyrailRushSlow.mp4',
    ],
    [
      'Images/Peeking3.gif',
      'Images/Peeking4.gif',
    ]
  ),
  new Project(
    'Test Project',
    'hihihihihihihihihihihi hihihihihihihihihihihihihi hihihihihihihihihihi hihihihihihihihihihihi hihihihihihihihihihihihi',
    [
      'Images/Nothin.mp4',
      'Images/Nothing.mp4',
    ],
    [
      'Images/Peeking3.gif',
      'Images/Peeking4.gif',
    ]
  ),
]);

document.addEventListener('DOMContentLoaded', () => {
  projectsManager.render('projects-list');
});
