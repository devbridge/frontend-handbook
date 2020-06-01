module.exports = {
  title: "Frontend Handbook",
  description: "Where Devbridge frontend folk meet and share their wisdom",
  head: [["link", { rel: "icon", href: "/assets/img/DB_square.png" }]],
  themeConfig: {
    logo: "/assets/img/DB_square@2x.png",
    displayAllHeaders: true,
    sidebar: [
      {
        title: "CSS",
        children: [
          ["/docs/CSS/default-styles", "Default Styles"],
          ["docs/CSS/position", "Position"],
          ["/docs/CSS/pseudo-class", "Pseudo-class"],
          ["/docs/CSS/pseudo-element", "Pseudo-element"],
          ["/docs/CSS/selector", "Selector"],
          ["/docs/CSS/z-index", "Z-Index"],
        ],
      },
    ],
    nav: [
      { text: "Home", link: "/" },
      { text: "Devbridge", link: "https://www.devbridge.com/" },
    ],
    editLinks: true,
    editLinkText: "Help us improve this page!",
  }
};
