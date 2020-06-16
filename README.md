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
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "react/jsx-one-expression-per-line": "off"
  }
}
```

10. Add .eslintignore
