module.exports = {
  name: "Popular posts",
  description: "coryd.dev popular posts",
  skip: !process.env.CONTEXT,
  options: {
    frequency: 60 * 23,
    freshChrome: "site"
  },
  urls: [
    "https://coryd.dev/posts/2023/i-block-ads/",
    "https://coryd.dev/posts/2023/i-dont-want-streaming-music/",
    "https://coryd.dev/posts/2024/i-found-the-music-i-love-on-the-internet/",
    "https://coryd.dev/posts/2024/i-dont-want-anything-your-ai-generates/",
    "https://coryd.dev/posts/2024/renting-your-music-means-accepting-that-it-will-disappear/",
    "https://coryd.dev/posts/2024/im-going-to-keep-opting-out/",
    "https://coryd.dev/posts/2024/towards-a-quieter-friendlier-web/",
    "https://coryd.dev/posts/2024/the-internet-isnt-dying-its-changing/",
    "https://coryd.dev/posts/2024/we-have-a-content-quality-problem-not-a-content-quantity-problem/",
    "https://coryd.dev/posts/2024/dont-be-afraid-to-admin-when-you-dont-know-something/",
    "https://coryd.dev/posts/2024/a-retrospective-on-a-year-without-streaming-music/",
    "https://coryd.dev/posts/2024/data-collection-should-always-be-opt-in/",
    "https://coryd.dev/posts/2024/ai-cannot-and-should-not-replace-search/",
    "https://coryd.dev/posts/2024/weve-stopped-making-things-anyone-wants/",
  ]
};