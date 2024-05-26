import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-console': 'off', // allow console.log in TypeScript files
      "vue/first-attribute-linebreak": ["error", {
        "singleline": "ignore",
        "multiline": "ignore"
      }],
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "never",
          "normal": "never",
          "component": "never"
        },
        "svg": "never",
        "math": "never"
      }]
    }
  },
)