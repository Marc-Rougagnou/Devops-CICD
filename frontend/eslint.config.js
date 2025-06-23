const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    env: {
      es2021: true,
      browser: true,
      node: true,
    },
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error",
    },
  },
]);
