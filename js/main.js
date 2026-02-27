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
      "hero.cta.order": "Заказать мёд",
      "hero.cta.about": "Узнать ассортимент",
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
      "contacts.lead": "Свяжитесь с нами или выберите удобную точку самовывоза.",
      "contacts.city1": "Кишинев",
      "contacts.city2": "Дондюшаны",
      "contacts.pickup": "Самовывоз / точка выдачи",
      "contacts.phone1.aria": "Позвонить в Кишинев: +373 69 396 624",
      "contacts.phone2.aria": "Позвонить в Дондюшаны: +373 69 494 508",
      "contacts.social.aria": "Социальные сети",
      "contacts.facebook.aria": "Открыть Facebook",
      "contacts.telegram.aria": "Открыть Telegram",
      "contacts.instagram.aria": "Открыть Instagram",
      "contacts.telegram": "Telegram",
      "contacts.facebook": "Facebook",
      "contacts.youtube": "YouTube",
      "contacts.instagram": "Instagram",
      "footer.rights": "DorDeMiere. Все права защищены.",
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
      "hero.cta.order": "Comandă miere",
      "hero.cta.about": "Vezi sortimentul",
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
      "contacts.lead": "Contactați-ne sau alegeți un punct convenabil de ridicare.",
      "contacts.city1": "Chișinău",
      "contacts.city2": "Dondușeni",
      "contacts.pickup": "Ridicare / punct de preluare",
      "contacts.phone1.aria": "Sună în Chișinău: +373 69 396 624",
      "contacts.phone2.aria": "Sună în Dondușeni: +373 69 494 508",
      "contacts.social.aria": "Rețele sociale",
      "contacts.facebook.aria": "Deschide Facebook",
      "contacts.telegram.aria": "Deschide Telegram",
      "contacts.instagram.aria": "Deschide Instagram",
      "contacts.telegram": "Telegram",
      "contacts.facebook": "Facebook",
      "contacts.youtube": "YouTube",
      "contacts.instagram": "Instagram",
      "footer.rights": "DorDeMiere. Toate drepturile rezervate.",
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

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria-label");
      if (!key) {
        return;
      }

      const value = getTranslation(lang, key);
      if (!value) {
        return;
      }

      element.setAttribute("aria-label", value);
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

  const initActiveNavigation = () => {
    const navLinks = Array.from(
      document.querySelectorAll(".header__nav-link[href^=\"#\"], .mobile-menu__link[href^=\"#\"]")
    );
    if (!navLinks.length) {
      return;
    }

    const sectionEntries = [];
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href.length < 2) {
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      if (!sectionEntries.some((entry) => entry.id === target.id)) {
        sectionEntries.push({ id: target.id, element: target });
      }
    });

    if (!sectionEntries.length) {
      return;
    }

    let activeId = "";
    let ticking = false;

    const setActive = (id) => {
      if (id === activeId) {
        return;
      }

      activeId = id;
      navLinks.forEach((link) => {
        const isActive = Boolean(id) && link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const syncActiveSection = () => {
      const headerOffset = (header ? header.offsetHeight : 72) + 20;
      const scrollPosition = window.scrollY + headerOffset;
      let nextActiveId = "";

      sectionEntries.forEach((entry) => {
        if (scrollPosition >= entry.element.offsetTop) {
          nextActiveId = entry.id;
        }
      });

      setActive(nextActiveId);
      ticking = false;
    };

    const requestSync = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(syncActiveSection);
    };

    syncActiveSection();
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync, { passive: true });
  };

  const initDesktopPhoneLock = () => {
    const phoneLinks = Array.from(document.querySelectorAll(".contacts__phone[href^=\"tel:\"]"));
    if (!phoneLinks.length) {
      return;
    }

    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const blockIfDesktop = (event) => {
      if (!desktopQuery.matches) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
    };

    const syncDesktopState = () => {
      phoneLinks.forEach((link) => {
        if (desktopQuery.matches) {
          link.setAttribute("aria-disabled", "true");
          link.setAttribute("tabindex", "-1");
        } else {
          link.removeAttribute("aria-disabled");
          link.removeAttribute("tabindex");
        }
      });
    };

    phoneLinks.forEach((link) => {
      link.addEventListener("click", blockIfDesktop);
      link.addEventListener("keydown", (event) => {
        if ((event.key === "Enter" || event.key === " ") && desktopQuery.matches) {
          event.preventDefault();
        }
      });
    });

    syncDesktopState();
    desktopQuery.addEventListener("change", syncDesktopState);
  };

  const initHeroMotion = () => {
    const hero = document.querySelector(".hero");
    const heroVisual = document.querySelector(".hero__visual");
    if (!hero || !heroVisual) {
      return;
    }

    const tabletQuery = window.matchMedia("(min-width: 768px)");
    const desktopPointerQuery = window.matchMedia("(min-width: 1024px) and (hover: hover)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let isActive = false;
    let rafId = 0;
    let currentX = 0;
    let currentY = 0;
    let currentScroll = 0;
    let targetX = 0;
    let targetY = 0;
    let targetScroll = 0;
    let motionIntensity = 12;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const syncMotionIntensity = () => {
      const value = Number.parseFloat(getComputedStyle(hero).getPropertyValue("--hero-motion-intensity"));
      motionIntensity = Number.isFinite(value) ? clamp(value, 6, 24) : 12;
    };
    const clearAnimationFrame = () => {
      if (!rafId) {
        return;
      }
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const applyValues = () => {
      hero.style.setProperty("--hero-parallax-x", `${currentX.toFixed(2)}px`);
      hero.style.setProperty("--hero-parallax-y", `${currentY.toFixed(2)}px`);
      hero.style.setProperty("--hero-scroll-y", `${currentScroll.toFixed(2)}px`);
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      currentScroll += (targetScroll - currentScroll) * 0.1;
      applyValues();

      const isSettled =
        Math.abs(targetX - currentX) < 0.05 &&
        Math.abs(targetY - currentY) < 0.05 &&
        Math.abs(targetScroll - currentScroll) < 0.05;

      if (isSettled) {
        rafId = 0;
        return;
      }

      rafId = window.requestAnimationFrame(animate);
    };

    const requestAnimate = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(animate);
    };

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      targetScroll = clamp((-centerOffset / viewportHeight) * (motionIntensity * 1.35), -motionIntensity, motionIntensity);
      requestAnimate();
    };

    const onPointerMove = (event) => {
      if (!desktopPointerQuery.matches) {
        return;
      }

      const rect = hero.getBoundingClientRect();
      const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
      const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = clamp(normalizedX * motionIntensity, -motionIntensity, motionIntensity);
      targetY = clamp(normalizedY * (motionIntensity * 0.8), -(motionIntensity * 0.75), motionIntensity * 0.75);
      requestAnimate();
    };

    const onResize = () => {
      syncMotionIntensity();
      onScroll();
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
      requestAnimate();
    };

    const enableMotion = () => {
      if (isActive) {
        return;
      }

      isActive = true;
      hero.classList.add("hero--motion-active");
      hero.classList.remove("hero--entered");
      requestAnimationFrame(() => {
        hero.classList.add("hero--entered");
      });

      syncMotionIntensity();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize, { passive: true });
      hero.addEventListener("pointermove", onPointerMove);
      hero.addEventListener("pointerleave", onPointerLeave);
      onScroll();
    };

    const disableMotion = () => {
      if (!isActive) {
        return;
      }

      isActive = false;
      clearAnimationFrame();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);

      targetX = 0;
      targetY = 0;
      targetScroll = 0;
      currentX = 0;
      currentY = 0;
      currentScroll = 0;
      applyValues();
      hero.classList.remove("hero--motion-active");
      hero.classList.add("hero--entered");
    };

    const syncHeroMotionState = () => {
      const shouldEnable = tabletQuery.matches && !reducedMotionQuery.matches;
      if (shouldEnable) {
        enableMotion();
      } else {
        disableMotion();
      }
    };

    syncHeroMotionState();
    tabletQuery.addEventListener("change", syncHeroMotionState);
    reducedMotionQuery.addEventListener("change", syncHeroMotionState);
    desktopPointerQuery.addEventListener("change", onPointerLeave);
  };

  const initAdvantagesInteractions = () => {
    const section = document.querySelector(".advantages");
    if (!section) {
      return;
    }

    const cards = Array.from(section.querySelectorAll(".advantages__item"));
    if (!cards.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      cards.forEach((card) => {
        card.classList.add("is-visible");
      });
      return;
    }

    section.classList.add("advantages--reveal-ready");
    cards.forEach((card, index) => {
      card.style.setProperty("--advantages-delay", `${index * 80}ms`);
    });

    if (typeof IntersectionObserver === "undefined") {
      cards.forEach((card) => {
        card.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  };

  const initProductsInteractions = () => {
    const section = document.querySelector(".products");
    if (!section) {
      return;
    }

    const cards = Array.from(section.querySelectorAll(".products__item"));
    if (!cards.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      cards.forEach((card) => {
        card.classList.add("is-visible");
      });
      return;
    }

    section.classList.add("products--reveal-ready");
    cards.forEach((card, index) => {
      card.style.setProperty("--products-delay", `${index * 80}ms`);
    });

    if (typeof IntersectionObserver === "undefined") {
      cards.forEach((card) => {
        card.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  };

  const initHowToOrderVisualReveal = () => {
    const section = document.querySelector(".how-to-order");
    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      section.classList.add("how-to-order--in-view");
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("how-to-order--in-view");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    observer.observe(section);
  };

  const initSectionRevealStagger = () => {
    const revealSections = [
      { section: ".advantages", items: [".advantages__title"] },
      { section: ".products", items: [".products__title"] },
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
  initActiveNavigation();
  initDesktopPhoneLock();
  initHeroMotion();
  initAdvantagesInteractions();
  initProductsInteractions();
  initHowToOrderVisualReveal();
  initSectionRevealStagger();
  forceCloseMenu();

  const initialLanguage = normalizeLanguage(getStoredLanguage() || DEFAULT_LANGUAGE);
  setLanguage(initialLanguage);
})();
