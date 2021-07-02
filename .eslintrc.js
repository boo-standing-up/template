module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: { react: { version: "detect" } },
  env: {
    browser: true,
    es2021: true,
    node: true, //未定義エラールール入れた。node定義設定。
  },
  plugins: [
    "import",
    "react",
    "tailwindcss",
    "react-hooks",
    "simple-import-sort",
  ],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],

  rules: {
    // "semi":["error","always"], //セミコロンちゃんとつけよう設定  prettier効いてるから消す
    // "quotes":["error","double"], //クォーターをダブルに統一しよう  prettier効いてるから消す
    "react/prop-types": [0], //(react/prop-types)オフに
    "no-undef": "error", //定義されてない変数を急に使うのはだめ未定義の変数エラー
    "react/react-in-jsx-scope": 0,
    "import/newline-after-import": "error", //import 一先いらないかも
    // "import/no-default-export": "error", //import 一先いらない
    "simple-import-sort/imports": "error", //ライブラリと独自ライブラリの間に1行開けて並べ替えてくれる
    "simple-import-sort/exports": "error", //import
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    //importで複数読み込む際にアルファベット順に並べ替えてくれる
    "tailwindcss/classnames-order": "warn",
    // "tailwindcss/no-custom-classname": "warn",   //重くなっているので、一先回避
    "tailwindcss/no-contradicting-classname": "error",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ], //<LINk href=>と書く。<a href=>にならないようにする
  },
};
