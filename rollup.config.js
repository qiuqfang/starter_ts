/**
 * @type {import('rollup').RollupOptions}
 */

import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import del from "rollup-plugin-delete";
import swc from "@qiuqfang/rollup-plugin-swc";

export default {
  input: "./src/index.ts",
  output: [
    { file: "dist/index.cjs", format: "cjs" },
    { file: "dist/index.mjs", format: "es" },
  ],

  plugins: [swc(), commonjs(), json(), del({ targets: "dist/*" })],
};
