module.exports = {
    "extends": ["standard", "plugin:react/recommended"],
    "plugins": [
        "standard",
        "react",
        "promise"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "allowImportExportEverywhere": true
    },
    "rules": {
        // Always require semicolon
        "semi": ["error", "always"],
        // Enforce camelcase for variables only
        "camelcase": ["error", {"properties": "never"}],
        "space-before-function-paren": ["error", "never"],
        "one-var": "off",
        "no-console": ["error", { allow: ["info"] }],
        "react/prop-types": "off",
        "strict": 0,
        "react/display-name": "off"
    },
    "globals": {
        "fetch": true,
        "confirm": true,
        "alert": true
    }
};
