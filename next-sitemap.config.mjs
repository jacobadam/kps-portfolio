export default {
  siteUrl: "https://www.katieshevlin.com",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,

  transform: async (config, path) => {
    if (path === "/") {
      return {
        loc: path,
        priority: 1.0,
      };
    }
    if (path === "/about") {
      return {
        loc: path,
        priority: 0.8,
      };
    }
    if (path === "/services") {
      return {
        loc: path,
        priority: 0.8,
      };
    }
    if (path === "/portfolio") {
      return {
        loc: path,
        priority: 0.9,
      };
    }
    if (path === "/contact") {
      return {
        loc: path,
        priority: 0.7,
      };
    }
    return {
      loc: path,
      priority: 0.7,
    };
  },
};
