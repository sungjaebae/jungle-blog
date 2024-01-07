module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
    "next/core-web-vitals",
    "next",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: _dirname + "/blog-app",
    createDefaultProgram: true,
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "import/no-extraneous-dependencies": ["off"],
    "import/prefer-default-export": ["off"],
    "react/require-default-props": ["off"],
    "@typescript-eslint/no-unused-vars": "warn",
    // Preferences for quick projects
    /* "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-nested-ternary": "off",
    "react/no-unknown-property": "off",
    "max-len": "off",
    "no-useless-escape": "off",
    "no-return-assign": "off",
    "import/no-self-import": "off",
    "no-plusplus": "off",
    "no-else-return": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "no-use-before-define": "off",
    "react/function-component-definition": [
      2,
      { "namedComponents": ["arrow-function", "function-declaration"] }
    ] */
  },
};
