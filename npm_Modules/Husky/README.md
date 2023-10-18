# Husky

The `Husky` npm module is a tool that allows you to easily add Git hooks to your project. Git hooks are scripts that run automatically before or after 
certain Git events, such as committing code or pushing changes.

# Installation

```
  $ npm install husky --save-dev
```

# Usage

Edit package.json > prepare script and run it once:
```
  npm pkg set scripts.prepare="husky install"
  npm run prepare
```

Add a hook:
```
  npx husky add .husky/pre-commit "npm test"
  git add .husky/pre-commit
```

Make a commit:
```
  git commit -m "Keep calm and commit"
```

`npm test` will run


# Features:

- Modern native Git hooks made easy.
- It improves your commits and more.
- You can use it to lint your commit messages, run tests, lint code, and perform other tasks.
- It provides a simple and intuitive way to configure Git hooks for your project.
- `Husky` allows you to define hooks in your package.json file, making it easy to manage and share them with your team
- It supports various types of hooks, such as pre-commit, pre-push, and post-merge hooks.
- You can customize the behavior of each hook by writing scripts in your preferred programming language.
- `Husky` is widely used in the JavaScript community and has a large user base.
