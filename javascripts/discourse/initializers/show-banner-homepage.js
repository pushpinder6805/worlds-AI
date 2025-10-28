import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.15.0", (api) => {
  api.onPageChange((url) => {
    // Only topic pages
    const isTopic = url.startsWith("/t/");

    const elements = [
      { selector: ".support-section", display: "block" },
    ];

    elements.forEach(({ selector, display }) => {
      const el = document.querySelector(selector);
      if (!el) return;
      el.style.display = isTopic ? display : "none";
    });
  });
});

