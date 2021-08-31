module.exports = {
  root : true,
  env  : {
    node : true,
    es6  : true,
  },
  extends : [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
  ],
  parserOptions : {
    parser : 'babel-eslint',
  },
  plugins : [
    'align',
    'align-assignments',
    'varspacing',
    'align-import',
    'extra-rules',
    'unused-imports',
  ],
  //rules: {
  //'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  //'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  //}
  rules : {
    'accessor-pairs'                    : 2,
    'extra-rules/no-commented-out-code' : 'warn',
    'align/member-indent-align'         : 2,
    'varspacing/var-spacing'            : [1],
    'no-multi-spaces'                   : 0,
    'newline-after-var'                 : ['warn', 'always'],

    'key-spacing' : [
      'warn',
      {
        multiLine : {
          beforeColon : false,
          afterColon  : true,
        },
        align : {
          beforeColon : true,
          afterColon  : true,
          on          : 'colon',
        },
      },
    ],
    'align-assignments/align-assignments' : [
      2,
      {
        requiresOnly : false,
      },
    ],
    'align-import/align-import' : 2,
    'arrow-parens'              : 'off',
    'brace-style'               : ['warn', '1tbs', { allowSingleLine : true }],
    'camelcase'                 : 'off',
    'comma-dangle'              : ['warn', 'always-multiline'],
    'ember/no-observers'        : 'off',
    'func-call-spacing'         : 'off',
    'generator-star-spacing'    : 'off',
    'indent'                    : ['warn', 2, { flatTernaryExpressions : true }],
    'key-spacing'               : [
      'warn',
      { beforeColon : true, afterColon : true, align : 'colon' },
    ],
    'sort-vars'                    : ['warn', { ignoreCase : true }],
    'one-var-declaration-per-line' : ['warn', 'always'],
    'one-var'                      : ['warn', 'consecutive'],
    'new-cap'                      : 'off',
    'no-console'                   : 'off',
    'no-mixed-operators'           : 'off',
    
    'no-multiple-empty-lines'       : ['warn', { max : 1, maxEOF : 0 }],
    'no-return-assign'              : 'off',
    'no-sequences'                  : 'off',
    'no-template-curly-in-string'   : 'off',
    'no-whitespace-before-property' : 'off',
    'object-curly-spacing'          : 'off',
    'operator-linebreak'            : 'off',
    //'padded-blocks'                 : 'off',
    'padded-blocks'                 : ['warn', 'never'],
    'quote-props'                   : ['warn', 'consistent-as-needed'],
    'quotes'                        : ['warn', 'single'],
    'spaced-comment'                : 'off',
    //'standard/object-curly-even-spacing' : 'on',
    'curly'                         : ['warn', 'multi-line'],
  
    'no-unused-vars'                   : 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports' : 'warn',
    'unused-imports/no-unused-vars'    : [
      'warn',
      { vars : 'all', varsIgnorePattern : '^_', args : 'after-used', argsIgnorePattern : '^_' },
    ],
    'no-var' : 'warn',

  },
}
