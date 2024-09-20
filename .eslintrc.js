// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier", "plugin:import/recommended"],
  plugins: ["prettier", "import"],
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    "import/resolver": {
      "babel-module": { allowExistingDirectories: true },
    },
  },
};
