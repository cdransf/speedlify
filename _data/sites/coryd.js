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
		"https://coryd.dev/about",
		"https://coryd.dev/now",
	]
};