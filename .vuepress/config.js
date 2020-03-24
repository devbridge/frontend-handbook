module.exports = {
  title: "Devbridge Frontend",
  description: "Where Devbridge frontend folk meet and share their wisdom",
  toc: { includeLevel: [1, 2] },
  children: ["/docs"],
  themeConfig: {
    sidebarDepth: 2,
    displayAllHeaders: true,
    sidebar: [
      {
        title: "Knowledge share", // required
        path: "/docs/KnowledgeShare/", // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/docs/KnowledgeShare/Introduction"]
      },
      {
        title: "Guidelines", // required
        path: "/docs/Guidelines/", // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/docs/Guidelines/Introduction"]
      }
    ],
    nav: [
      { text: "Home", link: "/" },
      // { text: "Foo", link: "/foo/" },
      { text: "External", link: "https://google.com" }
    ],
    editLinks: true,
    editLinkText: "Help us improve this page!"
  }
};
