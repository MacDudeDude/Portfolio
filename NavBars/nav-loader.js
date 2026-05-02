(async () => {
  const placeholder = document.getElementById("nav-placeholder");
  if (!placeholder) return;
  try {
    const currentScript = document.currentScript?.src || import.meta.url;
    const baseUrl = new URL(".", currentScript);
    const res = await fetch(new URL("nav.html", baseUrl));
    placeholder.innerHTML = await res.text();

    const current = location.pathname.split("/").pop() || "index.html";
    placeholder.querySelectorAll("a").forEach(a => {
      if (a.getAttribute("href") === current) {
        a.classList.add("active");
      }
    });
  } catch (e) {
    console.error("Could not load nav:", e);
  }
})();