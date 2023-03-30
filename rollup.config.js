/**
 * @type {import('rollup').RollupOptions}
 */

import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import del from "rollup-plugin-delete";

export default {
  input: "./src/index.ts",
  output: [
    { file: "dist/index.cjs", format: "cjs" },
    { file: "dist/index.mjs", format: "es" },
  ],

  plugins: [
    babel({ babelHelpers: "bundled", extensions: [".ts"] }),
    resolve({ extensions: [".ts"] }),
    commonjs(),
    json(),
    del({ targets: "dist/*" }),
  ],
};
