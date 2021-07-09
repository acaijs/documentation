// Packages
import { defineConfig } from "vite";
import preactRefresh from "@prefresh/vite";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from "preact"`
  },
  plugins: [preactRefresh(), dynamicImportVars({
	include: [
		"./src/localization/**"
	],
	exclude: "nevergonnahappen",
	warnOnError: false,
  })],
})
