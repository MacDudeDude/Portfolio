(function() {
  const initSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const headings = Array.from(document.querySelectorAll('.normal-section-heading'))
      .filter((heading) => heading.id);
    if (!headings.length) return;

    sidebar.innerHTML = '';
    headings.forEach((heading) => {
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      link.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById(heading.id)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
      sidebar.appendChild(link);
    });

    const updateActiveLink = () => {
      let activeHeading = headings[0];
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 1) {
          activeHeading = heading;
        }
      });

      sidebar.querySelectorAll('a').forEach((a) => a.classList.remove('active'));
      const activeLink = sidebar.querySelector(`a[href="#${activeHeading.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    };

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink);
    updateActiveLink();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebar);
  } else {
    initSidebar();
  }
})();
