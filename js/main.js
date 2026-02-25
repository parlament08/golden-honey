(() => {
  const DEFAULT_LANGUAGE = "ru";
  const STORAGE_KEY = "lang";

  const translations = {
    ru: {
      "nav.home": "Главная",
      "nav.about": "Наш мёд",
      "nav.products": "Мёд и цены",
      "nav.order": "Как заказать",
      "nav.contacts": "Контакты",
      "mobile.menu.title": "Меню",
      "mobile.nav.home": "На главную",
      "mobile.nav.about": "Наш мёд",
      "mobile.nav.products": "Мёд и цены",
      "mobile.nav.order": "Как заказать",
      "mobile.nav.contacts": "Контакты",
      "hero.title.small": "НАТУРАЛЬНЫЙ",
      "hero.title.big": "МЁД",
      "hero.subtitle": "Вкусный органический мёд<br />прямо с пасеки",
      "hero.cta.order": "Заказать",
      "hero.cta.about": "О мёде",
      "advantages.title": "ПОЧЕМУ ПОКУПАЮТ<br />НАШ МЁД",
      "advantages.natural.title": "Натуральный продукт",
      "advantages.natural.text": "Чистый мёд без сиропов и добавок.",
      "advantages.assortment.title": "Ассортимент",
      "advantages.assortment.text": "Акация, полифлора, липа - выбирайте по вкусу.",
      "advantages.apiary.title": "Собственная пасека",
      "advantages.apiary.text": "Собираем мёд прямо с пасеки.",
      "products.title": "МЁД И ЦЕНЫ",
      "products.item1.title": "МЁД ИЗ ТРАВ И ПОДСОЛНУХА",
      "products.item1.description": "Ароматный, насыщенный вкус",
      "products.item2.title": "МЁД ИЗ ЛИПЫ",
      "products.item2.description": "Мягкий вкус и тонкий аромат",
      "products.item3.title": "МЁД ИЗ АКАЦИИ",
      "products.item3.description": "Светлый, нежный и долго не кристаллизуется",
      "products.price.unit": "лей/кг",
      "products.cta": "Заказать",
      "order.title": "КАК ЗАКАЗАТЬ",
      "order.step1.title": "Позвоните или напишите нам",
      "order.step1.text": "Свяжитесь с нами любым удобным способом - мы подскажем сорт, наличие и стоимость",
      "order.step2.title": "Осуществляем доставку либо самовывоз",
      "order.step2.text": "Получите свежий мёд с доставкой или передадим при встрече",
      "contacts.title": "КОНТАКТЫ",
      "contacts.telegram": "Telegram",
      "contacts.facebook": "Facebook",
      "contacts.youtube": "YouTube",
      "contacts.instagram": "Instagram",
      "footer.rights": "Петрович Мёд. Все права защищены.",
      "menu.open": "Открыть меню",
      "menu.close": "Закрыть меню",
      "lang.toggle.aria": "Сменить язык"
    },
    ro: {
      "nav.home": "Acasă",
      "nav.about": "Mierea noastră",
      "nav.products": "Miere și prețuri",
      "nav.order": "Cum comanzi",
      "nav.contacts": "Contacte",
      "mobile.menu.title": "Meniu",
      "mobile.nav.home": "Acasă",
      "mobile.nav.about": "Mierea noastră",
      "mobile.nav.products": "Miere și prețuri",
      "mobile.nav.order": "Cum comanzi",
      "mobile.nav.contacts": "Contacte",
      "hero.title.small": "MIERE",
      "hero.title.big": "NATURALĂ",
      "hero.subtitle": "Miere organică gustoasă<br />direct de la stupină",
      "hero.cta.order": "Comandă",
      "hero.cta.about": "Despre miere",
      "advantages.title": "DE CE ALEG CLIENȚII<br />MIEREA NOASTRĂ",
      "advantages.natural.title": "Produs natural",
      "advantages.natural.text": "Miere curată, fără siropuri și aditivi.",
      "advantages.assortment.title": "Sortiment",
      "advantages.assortment.text": "Salcâm, polifloră, tei - alegeți după gust.",
      "advantages.apiary.title": "Stupină proprie",
      "advantages.apiary.text": "Colectăm mierea direct din stupină.",
      "products.title": "MIERE ȘI PREȚURI",
      "products.item1.title": "MIERE DIN IERBURI ȘI FLOAREA-SOARELUI",
      "products.item1.description": "Aromă bogată și gust intens",
      "products.item2.title": "MIERE DE TEI",
      "products.item2.description": "Gust fin și aromă delicată",
      "products.item3.title": "MIERE DE SALCÂM",
      "products.item3.description": "Deschisă la culoare, delicată, cristalizează lent",
      "products.price.unit": "lei/kg",
      "products.cta": "Comandă",
      "order.title": "CUM COMANZI",
      "order.step1.title": "Sunați-ne sau scrieți-ne",
      "order.step1.text": "Contactați-ne cum vă este mai comod - vă ajutăm cu sortimentul, stocul și prețul",
      "order.step2.title": "Livrare sau ridicare personală",
      "order.step2.text": "Primiți miere proaspătă prin livrare sau predare personală",
      "contacts.title": "CONTACTE",
      "contacts.telegram": "Telegram",
      "contacts.facebook": "Facebook",
      "contacts.youtube": "YouTube",
      "contacts.instagram": "Instagram",
      "footer.rights": "Petrovici Miere. Toate drepturile rezervate.",
      "menu.open": "Deschide meniul",
      "menu.close": "Închide meniul",
      "lang.toggle.aria": "Schimbă limba"
    }
  };

  const menu = document.getElementById("mobile-menu");
  const openButton = document.querySelector(".header__menu-toggle");
  const closeButton = document.querySelector(".mobile-menu__close");
  const langToggle = document.querySelector(".lang-toggle");
  const header = document.querySelector(".header");

  const root = document.documentElement;
  const body = document.body;
  const openIcon = openButton ? openButton.querySelector(".header__menu-icon") : null;
  const closeDurationMs = 320;

  let closeTimer = null;
  let onMenuClosed = null;
  let currentLang = DEFAULT_LANGUAGE;

  const isSupportedLanguage = (lang) => Object.prototype.hasOwnProperty.call(translations, lang);
  const normalizeLanguage = (lang) => (isSupportedLanguage(lang) ? lang : DEFAULT_LANGUAGE);

  const getTranslation = (lang, key) => {
    const normalizedLanguage = normalizeLanguage(lang);
    if (translations[normalizedLanguage] && Object.prototype.hasOwnProperty.call(translations[normalizedLanguage], key)) {
      return translations[normalizedLanguage][key];
    }

    if (translations[DEFAULT_LANGUAGE] && Object.prototype.hasOwnProperty.call(translations[DEFAULT_LANGUAGE], key)) {
      return translations[DEFAULT_LANGUAGE][key];
    }

    return "";
  };

  const setExpanded = (expanded) => {
    if (!openButton || !closeButton) {
      return;
    }

    const value = String(expanded);
    openButton.setAttribute("aria-expanded", value);
    closeButton.setAttribute("aria-expanded", value);
  };

  const syncToggleAppearance = (isOpen) => {
    if (!openButton) {
      return;
    }

    openButton.classList.toggle("is-open", isOpen);
    openButton.setAttribute("aria-label", getTranslation(currentLang, isOpen ? "menu.close" : "menu.open"));

    if (closeButton) {
      closeButton.setAttribute("aria-label", getTranslation(currentLang, "menu.close"));
    }

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
    if (!menu) {
      return;
    }

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
    if (!menu || !openButton || !closeButton) {
      return;
    }

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
    if (!menu) {
      if (typeof callback === "function") {
        callback();
      }
      return;
    }

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

  const forceCloseMenu = () => {
    if (!menu) {
      unlockScroll();
      return;
    }

    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }

    menu.classList.remove("is-open");
    menu.hidden = true;
    onMenuClosed = null;
    unlockScroll();
    setExpanded(false);
    syncToggleAppearance(false);
  };

  const applyTranslations = (lang) => {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (!key) {
        return;
      }

      const value = getTranslation(lang, key);
      if (!value) {
        return;
      }

      if (element.dataset.i18nHtml === "true") {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });
  };

  const setLanguage = (lang) => {
    const normalizedLanguage = normalizeLanguage(lang);
    currentLang = normalizedLanguage;

    applyTranslations(normalizedLanguage);
    document.documentElement.lang = normalizedLanguage;

    if (langToggle) {
      const nextLanguage = normalizedLanguage === "ru" ? "ro" : "ru";
      langToggle.textContent = nextLanguage.toUpperCase();
      langToggle.setAttribute("aria-label", getTranslation(normalizedLanguage, "lang.toggle.aria"));
    }

    syncToggleAppearance(Boolean(menu && !menu.hidden && menu.classList.contains("is-open")));

    try {
      localStorage.setItem(STORAGE_KEY, normalizedLanguage);
    } catch (error) {
      // localStorage may be unavailable.
    }
  };

  const initLanguageToggle = () => {
    if (!langToggle) {
      return;
    }

    langToggle.addEventListener("click", () => {
      const nextLanguage = currentLang === "ru" ? "ro" : "ru";
      setLanguage(nextLanguage);
    });
  };

  const initMenu = () => {
    if (!menu || !openButton || !closeButton) {
      return;
    }

    openButton.addEventListener("click", () => {
      if (menu.hidden) {
        openMenu();
        return;
      }
      closeMenu();
    });

    closeButton.addEventListener("click", () => {
      closeMenu();
    });

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

    const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");
    const syncMenuForViewport = (event) => {
      if (event.matches) {
        forceCloseMenu();
      }
    };

    syncMenuForViewport(desktopMediaQuery);
    desktopMediaQuery.addEventListener("change", syncMenuForViewport);
  };

  const initHeaderScrollEffect = () => {
    if (!header) {
      return;
    }

    let ticking = false;

    const syncHeaderState = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    };

    const requestSync = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(syncHeaderState);
    };

    syncHeaderState();
    window.addEventListener("scroll", requestSync, { passive: true });
  };

  const initSectionRevealStagger = () => {
    const revealSections = [
      { section: ".advantages", items: [".advantages__title", ".advantages__item"] },
      { section: ".products", items: [".products__title", ".products__item"] },
      { section: ".how-to-order", items: [".how-to-order__title", ".how-to-order__step"] },
      { section: ".contacts", items: [".contacts__title", ".contacts__item"] }
    ];

    const revealGroups = [];

    revealSections.forEach((config) => {
      const section = document.querySelector(config.section);
      if (!section) {
        return;
      }

      const collectedItems = [];
      config.items.forEach((selector) => {
        section.querySelectorAll(selector).forEach((element) => {
          collectedItems.push(element);
        });
      });

      if (!collectedItems.length) {
        return;
      }

      section.classList.add("reveal-group");
      collectedItems.forEach((element, index) => {
        element.classList.add("reveal-item");
        element.style.setProperty("--reveal-index", String(index));
      });

      revealGroups.push(section);
    });

    if (!revealGroups.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      revealGroups.forEach((group) => {
        group.classList.add("is-in-view");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-in-view");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealGroups.forEach((group) => {
      observer.observe(group);
    });
  };

  const getStoredLanguage = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  };

  initMenu();
  initLanguageToggle();
  initHeaderScrollEffect();
  initSectionRevealStagger();
  forceCloseMenu();

  const initialLanguage = normalizeLanguage(getStoredLanguage() || DEFAULT_LANGUAGE);
  setLanguage(initialLanguage);
})();
