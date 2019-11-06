import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import builtins from "rollup-plugin-node-builtins";
import json from "rollup-plugin-json";
import css from "rollup-plugin-css-only";
import replace from "@rollup/plugin-replace";

const production = !process.env.ROLLUP_WATCH;

const local = !process.env.NETLIFY;

export default {
	input: "src/main.js",
	output: {
		sourcemap: true,
		format: "esm",
		name: "app",
		dir: "public/bundle",
	},
	plugins: [
		replace({
			PACKAGE_URL: local
				? "http://localhost:5000/packages/svelte"
				: "https://rerendering-perceptions.netlify.com/packages/svelte",
		}),
		svelte({
			dev: !production,
			css: css => {
				css.write("public/svelte.css");
			},
		}),
		css({ output: "public/bundle.css" }),
		resolve({
			preferBuiltins: false,
			browser: true,
			dedupe: importee =>
				importee === "svelte" || importee.startsWith("svelte/"),
		}),
		commonjs(),
		builtins(),
		json(),

		!production && livereload("public"),
		production && terser(),
	],
	watch: {
		clearScreen: false,
	},
};
