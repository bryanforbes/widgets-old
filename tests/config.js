require({
	baseUrl: "../third-party",
	paths: {
		require: "requirejs/require",
		cssx: "cssx/src/cssx"
	},
	packages: [
		{ name: "has", lib: "detect", main: "has" },
		{ name: "uber", main: "uber" },
		{ name: "compose", main: "lib/compose" },
		{ name: "widgets", location: ".." }
	]
});
