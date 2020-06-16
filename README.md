# Instructions

1. Install React

   `npx create-react-app Demo`

2. Install prettier and eslint extensions in VS Code
3. Install prettier and eslint as dev dependencies

   `npm install -D eslint prettier`

4. Install Airbnb config

   `npx install-peerdeps --dev eslint-config-airbnb`

5. Disable eslint formatting

   `npm install -D eslint-config-prettier eslint-plugin-prettier`

6. Create .eslintrc.json

   ```json
   {
     "extends": ["airbnb", "prettier"],
     "plugins": ["prettier"],
     "rules": {
       "prettier/prettier": ["error"]
     }
   }
   ```

7. Create .prettierrc

   ```json
   {
     "printWidth": 100,
     "singleQuote": true
   }
   ```

8. Set up format on save in VS Code

   `"editor.formatOnSave": true`

9. Add simple rules

   ```json
   {
     "env": {
       "browser": true,
       "es6": true,
       "jest": true
     },
     "extends": ["airbnb", "prettier"],
     "plugins": ["prettier"],
     "rules": {
       "prettier/prettier": [
         "error",
         {
           "endOfLine": "auto"
         }
       ],
       "react/jsx-one-expression-per-line": "off",
       "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
     }
   }
   ```

10. Add lint command

    `"lint": "eslint ./src --ext .js,.jsx"`

11. Add .eslintignore

    `src/serviceWorker.js`
   
12. Install husky

    `npm i -D husky lint-staged`

13. Set linting pre-commit

    ```json
    "husky": {
        "hooks": {
          "pre-commit": "lint-staged"
        }
      },
      "lint-staged": {
        "./src/*.{js,jsx}": "eslint --fix"
      }
    ```
