``` bash
npm i -D commitizen cz-conventional-changelog
```

``` bash
# Initialize Commitizen
npx commitizen init cz-conventional-changelog --save-dev --save-exact --force
```

``` json
"scripts": {
    // Add script to package.json
    "commit": "cz"
  },
```

