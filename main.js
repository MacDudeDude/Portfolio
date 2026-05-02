class Project {
  constructor(title, description, Graphics, backgroundGraphics, link) {
    this.title = title;
    this.description = description;
    this.Graphics = Graphics;
    this.backgroundGraphics = backgroundGraphics;
    this.link = link;
  }

  render() {
    const card = document.createElement('article');
    card.className = 'project-card';

    if (this.link) {
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.addEventListener('click', () => {
        window.open(this.link, '_blank');
      });
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          window.open(this.link, '_blank');
        }
      });
    }

    const info = document.createElement('div');
    info.className = 'project-info';
    const descriptionWithLineBreaks = this.description.replace(/\n/g, '<br>');
    info.innerHTML = `
      <h2>${this.title}</h2>
      <p>${descriptionWithLineBreaks}</p>
    `;

    const gallery = document.createElement('div');
    gallery.className = 'project-gallery';

    this.Graphics.forEach((src, imageIndex) => {
      const thumb = document.createElement('div');
      thumb.className = 'project-thumb';

      const backgroundSrc = this.backgroundGraphics?.[imageIndex] || src;
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
          video.poster = 'Graphics/Misc/VideoPlaceholder.gif';
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

  addProject(title, description, Graphics, backgroundGraphics = []) {
    this.projects.push(new Project(title, description, Graphics, backgroundGraphics));
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
      'Graphics/Projects/SpeedCreators/Fighting.mp4',
      'Graphics/Projects/SpeedCreators/LevelBuilding.mp4',
    ],
    [
      'Graphics/Peekings/Peeking1.gif',
      'Graphics/Peekings/Peeking2.gif',
    ],
    'produt-speedcreators.html' // Replace with actual link
  ),
  new Project(
    'Skyrail Rush',
    'FPS boss rush set on a self balancing monorail.  Made in one month for BRGJ 2025.\n\nCustom multi-stage boss system utilizing the state machine pattern.  Polymorphic weapon system to handle weapons with wildly different alternate firing behaviors.',
    [
      'Graphics/Projects/SkyrailRush/SkyrailRushCuts.mp4',
      'Graphics/Projects/SkyrailRush/SkyrailRushSlow.mp4',
    ],
    [
      'Graphics/Peekings/Peeking3.gif',
      'Graphics/Peekings/Peeking4.gif',
    ],
    'https://example.com/skyrail-rush' // Replace with actual link
  ),
  new Project(
    'Strato',
    'A 3D platform fighter with a focus on movement and fluid combat.  Sole gameplay programmer on a team of 7 for a capstone project.\n\nUsing a state machine to handle player and enemy behavior.  Enforced loose coupling with events.  Handled overall asset pipeline.',
    [
      'Graphics/Projects/Strato/Stratocombat.mp4',
      'Graphics/Projects/Strato/Strato.png',
    ],
    [
      'Graphics/Peekings/Peeking5.gif',
      'Graphics/Peekings/Peeking6.gif',
    ],
    'https://example.com/strato' // Replace with actual link
  ),
  new Project(
    'Spider Controller',
    'A procedural spider controller that smoothly walks on any terrain with physics interactions.  Made in 2 weeks for the Acerola Jam 0.\n\nUsing inverse kinematics with unity phyiscs casts to position the body and limbs accordingly.',
    [
      'Graphics/Projects/SpiderController/SpiderWalking.mp4',
      'Graphics/Projects/SpiderController/SpiderActive.mp4',
    ],
    [
      'Graphics/Peekings/Peeking7.gif',
      'Graphics/Peekings/Peeking8.gif',
    ],
    'https://example.com/spider-controller' // Replace with actual link
  ),
]);

document.addEventListener('DOMContentLoaded', () => {
  projectsManager.render('projects-list');
});