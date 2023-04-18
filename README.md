<p align="center"><img src="./static/icon.png" alt="Campus INSA CVL logo" align="center" width="100px"></p><br/>
<p align="center">
  <a href="https://app.netlify.com/sites/vigorous-albattani-b37c0e/deploys">
    <img src="https://api.netlify.com/api/v1/badges/f30d7dfc-29d9-475d-a0d3-b7b3ac0f71f6/deploy-status" alt="deploy status" />
  </a>
</p>

# #️⃣ Campus website

**The new campus website for students of the INSA Centre-Val de Loire !**

## 📝 Want to create or update content? ![Docs](https://github.com/Campus-INSA-CVL/campus-website/workflows/Docs/badge.svg)

To simplify the process of creating content, we have created a docs to explain
to writers or to developers how to do it. There is many examples and it you want
more information, feel free to contact us !

[Go to the documentation](https://campus-insa-cvl.github.io/campus-website/) and
explore !

## 👋 Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Campus-INSA-CVL/tutorinsa-server/issues)

Feel free to help us ! Use
[issues](https://github.com/Campus-INSA-CVL/campus-website/issues) and
[pull requests](https://github.com/Campus-INSA-CVL/campus-website/pulls) !

When adding some images, please resize and compress them !

## 👩‍💻 Build Setup

**Requirement**

- [Node.js](https://nodejs.org/en/)

**Steps**

```bash
# install dependencies (execute this command with admin rights)
$ npm install

# set environment variables (because nuxt doesn't support .env files)
$ set NODE_OPTIONS=--openssl-legacy-provider # for Windows
$ export NODE_OPTIONS=--openssl-legacy-provider # for Linux

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
# serve static project
$ npm run start
```

Don't forget to lint your code before pushing !

```bash
# lint
$ npm run lint

# fix lint errors
$ npm run lint:fix
```
