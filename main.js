// Social Links Data
const socialLinks = [
    {
      id: "facebook",
      href: "https://facebook.com/abumotlaq1",
      label: "Facebook",
      className: "social-facebook",
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      id: "github",
      href: "https://github.com/oabumotlaq",
      label: "GitHub",
      className: "social-github",
      path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.177 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    },
    {
      id: "instagram",
      href: "https://instagram.com/osama_motlaq",
      label: "Instagram",
      className: "social-instagram",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    },
    {
      id: "linkedin",
      href: "https://linkedin.com/in/osamaabumotlaq",
      label: "LinkedIn",
      className: "social-linkedin",
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.065 2.065 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      id: "x",
      href: "https://x.com/abumotlaq1",
      label: "X",
      className: "social-x",
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
  ];
  
  // Services Data
  const services = [
    {
      icon: "fa-solid fa-pen",
      title: "Script Writing",
      description:
        "Crafting clear, engaging scripts for videos, courses, and digital content that connect with your audience.",
    },
    {
      icon: "fa-solid fa-video",
      title: "Video Production",
      description:
        "Creating powerful videos that inspire, engage, and visually tell stories.",
    },
    {
      icon: "fa-solid fa-code",
      title: "Software Development",
      description:
        "Software development builds smart solutions through code, logic, and creativity.",
    },
  ];
  
  // Projects Data
  const projects = [
    {
      image: "images/image4.jpg",
      alt: "Dev Books project",
      category: "Script Writing",
      title: "Dev Books",
      detailsHref: "#",
    },
  ];
  
  // Contact Items Data
  const contactItems = [
    {
      icon: "fa-solid fa-phone",
      title: "Phone",
      href: "tel:+970597663480",
      text: "+970 597 663 480",
    },
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      href: "mailto:oabumotlaq@gmail.com",
      text: "oabumotlaq@gmail.com",
    },
  ];
  
  // Footer Social IDs
  const footerSocialIds = ["github", "facebook", "linkedin"];
  
  // Helper function to create SVG social icon
  function createSocialIcon(social) {
    const link = document.createElement("a");
    link.href = social.href;
    link.className = `social-link ${social.className}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", social.label);
  
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
  
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", social.path);
  
    svg.appendChild(path);
    link.appendChild(svg);
  
    return link;
  }
  
  // Render Hero Social Icons
  function renderHeroSocialIcons() {
    const container = document.getElementById("heroSocialIcons");
    socialLinks.forEach((social) => {
      container.appendChild(createSocialIcon(social));
    });
  }
  
  // Render Services
  function renderServices() {
    const container = document.getElementById("servicesContainer");
    services.forEach((service) => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
              <div class="icon">
                  <i class="${service.icon}"></i>
              </div>
              <div class="info">
                  <h3>${service.title}</h3>
                  <p>${service.description}</p>
              </div>
          `;
  
      container.appendChild(card);
    });
  }
  
  // Render Projects
  function renderProjects() {
    const container = document.getElementById("projectsContainer");
    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";
  
      card.innerHTML = `
              <div class="project-image">
                  <img src="${project.image}" alt="${project.alt}" />
              </div>
              <div class="project-info">
                  <p class="project-category">${project.category}</p>
                  <div class="project-title">
                      <span>${project.title}</span>
                      <a href="${project.detailsHref}" class="more-details">More Details</a>
                  </div>
              </div>
          `;
  
      container.appendChild(card);
    });
  }
  
  // Render Contact Items
  function renderContact() {
    const container = document.getElementById("contactContainer");
    contactItems.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
              <div class="icon">
                  <i class="${item.icon}"></i>
              </div>
              <div class="info">
                  <h3>${item.title}</h3>
                  <p>
                      <a href="${item.href}">${item.text}</a>
                  </p>
              </div>
          `;
  
      container.appendChild(card);
    });
  }
  
  // Render Footer Social Icons
  function renderFooterSocialIcons() {
    const container = document.getElementById("footerSocialIcons");
    footerSocialIds.forEach((id) => {
      const social = socialLinks.find((s) => s.id === id);
      if (social) {
        container.appendChild(createSocialIcon(social));
      }
    });
  }
  
  // Initialize on page load
  document.addEventListener("DOMContentLoaded", () => {
    renderHeroSocialIcons();
    renderServices();
    renderProjects();
    renderContact();
    renderFooterSocialIcons();
  
    // Prevent default for placeholder links
    document.querySelectorAll('.social-icons a[href="#"]').forEach((link) => {
      link.addEventListener("click", (e) => e.preventDefault());
    });
  });
  