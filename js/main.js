(() => {
  const menu = document.getElementById("mobile-menu");
  const openButton = document.querySelector(".header__menu-toggle");
  const closeButton = document.querySelector(".mobile-menu__close");

  if (!menu || !openButton || !closeButton) {
    return;
  }

  const root = document.documentElement;
  const body = document.body;
  const openIcon = openButton.querySelector(".header__menu-icon");
  const closeDurationMs = 320;
  let closeTimer = null;
  let onMenuClosed = null;

  const setExpanded = (expanded) => {
    const value = String(expanded);
    openButton.setAttribute("aria-expanded", value);
    closeButton.setAttribute("aria-expanded", value);
  };

  const syncToggleAppearance = (isOpen) => {
    openButton.classList.toggle("is-open", isOpen);
    openButton.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
    if (openIcon) {
      openIcon.textContent = isOpen ? "✕" : "☰";
    }
  };

  const lockScroll = () => {
    root.classList.add("menu-open");
    body.classList.add("menu-open");
  };

  const unlockScroll = () => {
    root.classList.remove("menu-open");
    body.classList.remove("menu-open");
  };

  const finalizeClose = () => {
    menu.hidden = true;
    unlockScroll();
    setExpanded(false);
    syncToggleAppearance(false);
    if (typeof onMenuClosed === "function") {
      onMenuClosed();
      onMenuClosed = null;
    }
  };

  const openMenu = () => {
    if (!menu.hidden && menu.classList.contains("is-open")) {
      return;
    }

    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }

    menu.hidden = false;
    lockScroll();
    setExpanded(true);
    syncToggleAppearance(true);

    requestAnimationFrame(() => {
      menu.classList.add("is-open");
    });
  };

  const closeMenu = (callback) => {
    if (menu.hidden) {
      if (typeof callback === "function") {
        callback();
      }
      return;
    }

    onMenuClosed = typeof callback === "function" ? callback : null;
    menu.classList.remove("is-open");

    const handleTransitionEnd = (event) => {
      if (event.target !== menu) {
        return;
      }

      menu.removeEventListener("transitionend", handleTransitionEnd);
      if (!menu.classList.contains("is-open")) {
        finalizeClose();
      }
    };

    menu.addEventListener("transitionend", handleTransitionEnd);

    closeTimer = setTimeout(() => {
      menu.removeEventListener("transitionend", handleTransitionEnd);
      if (!menu.classList.contains("is-open")) {
        finalizeClose();
      }
      closeTimer = null;
    }, closeDurationMs);
  };

  openButton.addEventListener("click", () => {
    if (menu.hidden) {
      openMenu();
      return;
    }
    closeMenu();
  });
  closeButton.addEventListener("click", closeMenu);

  menu.addEventListener("click", (event) => {
    if (event.target === menu) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
      closeMenu();
    }
  });

  menu.querySelectorAll(".mobile-menu__link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = link.getAttribute("href");

      closeMenu(() => {
        if (!href || !href.startsWith("#")) {
          return;
        }
        const target = document.querySelector(href);
        if (!target) {
          return;
        }
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  });
})();
