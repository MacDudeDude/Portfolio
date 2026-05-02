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
          video.poster = 'Images/Videos/VideoPlaceholder.gif';
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
      // Add divider above each project
      const divider = document.createElement('div');
      divider.className = 'project-divider';
      container.appendChild(divider);
      
      container.appendChild(project.render());
    });
  }
}

const projectsManager = new ProjectsManager([
  new Project(
    'Speed Creators',
    'A multiplayer party platformer for 2-200 players, where everyone builds one piece of the final level before racing through it.\n\nIn game level editor.  Heavily optimized audio manager and object pooling.  Custom networking solution using Facepunch.Steamworks.',
    [
      'Images/Videos/Fighting.mp4',
      'Images/Videos/LevelBuilding.mp4',
    ],
    [
      'Images/Peekings/Peeking1.gif',
      'Images/Peekings/Peeking2.gif',
    ]
  ),
  new Project(
    'Skyrail Rush',
    'FPS boss rush set on a self balancing monorail.  Made in one month for BRGJ 2025.\n\nCustom multi-stage boss system utilizing the state machine pattern.  Polymorphic weapon system to handle weapons with wildly different alternate firing behaviors.',
    [
      'Images/Videos/SkyrailRushCuts.mp4',
      'Images/Videos/SkyrailRushSlow.mp4',
    ],
    [
      'Images/Peekings/Peeking3.gif',
      'Images/Peekings/Peeking4.gif',
    ]
  ),
  new Project(
    'Strato',
    'A 3D platform fighter with a focus on movement and fluid combat.  Sole gameplay programmer on a team of 7 for a capstone project.\n\nUsing a state machine to handle player and enemy behavior.  Enforced loose coupling with events.  Handled overall asset pipeline.',
    [
      'Images/Videos/Stratocombat.mp4',
      'Images/Videos/Strato.png',
    ],
    [
      'Images/Peekings/Peeking5.gif',
      'Images/Peekings/Peeking6.gif',
    ]
  ),
  new Project(
    'Spider Controller',
    'A procedural spider controller that smoothly walks on any terrain with physics interactions.  Made in 2 weeks for the Acerola Jam 0.\n\nUsing inverse kinematics with unity phyiscs casts to position the body and limbs accordingly.',
    [
      'Images/Videos/Nothin.mp4',
      'Images/Videos/Nothing.mp4',
    ],
    [
      'Images/Peekings/Peeking7.gif',
      'Images/Peekings/Peeking8.gif',
    ]
  ),
]);

document.addEventListener('DOMContentLoaded', () => {
  initCursorSystem();
  projectsManager.render('projects-list');
});