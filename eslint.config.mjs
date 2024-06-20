import globals from 'globals';
import pluginJs from '@eslint/js';

const type = {
  isString: true,
  isObject: true,
  isArray: true,
  isNull: true,
  getNode: true,
  getNodes: true,
};

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...type,
        setAttr: true,
        getAttr: true,
        insertBefore: true,
        insertFirst: true,
        insertLast: true,
        insertAfter: true,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
