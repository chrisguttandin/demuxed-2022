import config from 'eslint-config-holy-grail';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

// eslint-disable-next-line import/no-default-export
export default defineConfig([
    { extends: [config], languageOptions: { globals: { ...globals.browser, ngDevMode: 'readonly' } } },
    { files: ['**/*.html'], rules: { 'padding-line-between-statements': 'off' } },
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/component-selector': ['error', { prefix: 'dmx', style: 'kebab-case', type: 'element' }],
            '@angular-eslint/directive-selector': ['error', { prefix: 'dmx', style: 'camelCase', type: 'attribute' }],
            'check-file/filename-naming-convention': ['error', { '**/*.ts': 'KEBAB_CASE' }, { ignoreMiddleExtensions: true }],
            'new-cap': 'off',
            'node/file-extension-in-import': 'off'
        }
    }
]);
