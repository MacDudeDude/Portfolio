(async () => {
  const placeholder = document.getElementById("nav-placeholder");
  if (!placeholder) return;
  try {
    const res = await fetch("nav.html");
    placeholder.innerHTML = await res.text();

    const current = location.pathname.split("/").pop() || "home.html";
    placeholder.querySelectorAll("a").forEach(a => {
      if (a.getAttribute("href") === current) {
        a.classList.add("active");
      }
    });
  } catch (e) {
    console.error("Could not load nav:", e);
  }
})();