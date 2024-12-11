import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
        'indent': ['error', 2],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-multi-spaces': 'error',
        'no-trailing-spaces': ['error', { skipBlankLines: false }],
        'no-console': 'error',
        'no-debugger': 'error',
        'vue/html-indent': ['error', 2],
        'vue/max-attributes-per-line': ['error', { singleline: 10, multiline: 5 }],
        'vue/first-attribute-linebreak': 'error',
        'vue/html-closing-bracket-spacing': ['error', { startTag: 'never', endTag: 'never', selfClosingTag: 'never' }],
        'vue/singleline-html-element-content-newline': 'off'
    }
  }
]
