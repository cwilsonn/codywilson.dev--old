module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:nuxt/recommended",
        "plugin:vue/vue3-recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "max-len": ["error", 100],
        "vue/multi-word-component-names": ["error", {
            "ignores": [
                "404",
                "default",
                "index",
            ],
        }],
        "vue/require-v-for-key": "off",
        "vue/html-indent": ["error", 4, {
            "baseIndent": 1,
            "attribute": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
        }],
        "vue/script-indent": ["error", 4, {
            "baseIndent": 1,
            "switchCase": 1,
        }],
    }
};