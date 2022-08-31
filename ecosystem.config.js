module.exports = {
	apps: [
		{
			name: "myserver",
			script: "/server.js",
			watch: true,
			env: {
				"PORT": 3000,
				"NODE_ENV": "development",
			},
			env_production: {
				"PORT": 8080,
				"NODE_ENV": "production",
			},
		},
	],
};
