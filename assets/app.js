(function () {
  const menuBtn = document.querySelector("[data-menu-btn]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-copy");
      const block = document.getElementById(id);
      if (!block) return;
      const text = block.innerText;
      try {
        await navigator.clipboard.writeText(text);
        const prev = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(() => {
          btn.textContent = prev;
        }, 1400);
      } catch {
        btn.textContent = "Failed";
        setTimeout(() => {
          btn.textContent = "Copy";
        }, 1400);
      }
    });
  });

  const path = location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    const normalized = href.replace(/\/$/, "") || "/";
    if (normalized === path || (normalized !== "/" && path.startsWith(normalized))) {
      a.setAttribute("aria-current", "page");
    }
  });
})();
