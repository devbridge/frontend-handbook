module.exports = {
  base: '/frontend-handbook/',
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
          ["/CSS/default-styles", "Default Styles"],
          ["/CSS/position", "Position"],
          ["/CSS/pseudo-class", "Pseudo-class"],
          ["/CSS/pseudo-element", "Pseudo-element"],
          ["/CSS/selector", "Selector"],
          ["/CSS/z-index", "Z-Index"],
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
