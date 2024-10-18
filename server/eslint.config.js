import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: { globals: { ...globals.browser } },
        rules: {
            "eqeqeq": "error",
            "no-magic-numbers": ["error", { "ignoreArrayIndexes": true }],
            semi: ["error", "always"],
            quotes: ["error", "double"],
            "object-curly-spacing": ["error", "always"]
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];