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
	]
};