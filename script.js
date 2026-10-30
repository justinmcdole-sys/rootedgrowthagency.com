
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Keep the copyright year current
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Contact form: open the visitor's email application
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.reportValidity()) return;

      const form = new FormData(contactForm);

      const name = String(form.get("name") || "").trim();
      const email = String(form.get("email") || "").trim();
      const company = String(form.get("company") || "").trim();
      const service = String(form.get("service") || "").trim();
      const message = String(form.get("message") || "").trim();

      const subject = `Rooted Growth Agency Inquiry - ${company || name}`;

      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Service: ${service || "Not specified"}`,
        "",
        "Message:",
        message
      ].join("\n");

      // Temporary inbox until the business email is configured.
      const recipient = "justin.mcdole@gmail.com";

      window.location.href =
        `mailto:${recipient}?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
    });
  }
});
