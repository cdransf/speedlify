module.exports = {
  name: "coryd.dev",
  description: "coryd.dev pages",
  skip: !process.env.CONTEXT,
  options: {
    frequency: 60 * 23,
    freshChrome: "site"
  },
  urls: [
    "https://coryd.dev",
    "https://coryd.dev/posts",
    "https://coryd.dev/now",
    "https://coryd.dev/about",
    "https://coryd.dev/links/",
    "https://coryd.dev/search",
    "https://coryd.dev/feeds",
    "https://coryd.dev/uses",
    "https://coryd.dev/referrals",
    "https://coryd.dev/blogroll",
    "https://coryd.dev/stats",
    "https://coryd.dev/contact",
  ]
};