module.exports = {
  title: "Frontend guidelines",
  description: "I've got another confession to make",
  toc: { includeLevel: [1, 2] },
  children: ["/foo/Foo"],
  themeConfig: {
    sidebarDepth: 2,
    displayAllHeaders: true,
    sidebar: [
      {
        title: "Project", // required
        path: "/Project/", // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 2, // optional, defaults to 1
        children: ["/Project/components", "/Project/styles"]
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
