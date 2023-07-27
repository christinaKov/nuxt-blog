// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		API_URL: "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts",
		public: {
			API_URL:
				"https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts",
		},
	},
	devtools: { enabled: true },
	css: ["vuetify/lib/styles/main.sass"],
	build: {
		transpile: ["vuetify"],
	},
	vite: {
		define: {
			"process.env.DEBUG": false,
		},
	},
});
