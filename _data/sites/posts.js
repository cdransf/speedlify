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
	]
};