module.exports = {
    "extends": "airbnb-base",

    "rules": {
        "no-console": 0,
        "no-param-reassign": [2, {"props": false}],
        "prefer-destructuring": 0,
        "treatUndefinedAsUnspecified": true,
        "arrow-body-style": 0,
        "comma-dangle": 0,
      },

      "env": {
        "commonjs": true,
        "node": true,
        "mocha": true
      },
};