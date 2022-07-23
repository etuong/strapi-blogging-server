# Strapi Server for Blogging
I wanted to experiment with a headless CMS. I love the idea of Wordpress to easily create blogs. Traditionally, we have CMS like Wordpress that requires a database to store content and there's also a presentation layer of template files that mix HTML with template tags. In this type of architecture, the frontend and backend are tighly coupled. Both the content and how it’s presented are part of the same code base (aka monolithic architecture). This repo was bootstrapped with Strapi's starter project and tailored to my needs.

This [server](https://ethan-strapi.herokuapp.com/admin) works in conjunction with my [client repo](https://github.com/etuong/headless-cms-blog). You can create content and consume it on the client. You may use my dummy credentials to log in the console.

```
Email: email@email.com
Password: Password1
```

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment
I am using Heroku as my PaaS with Postgres as the database. Instructions can be found [here](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html)

The following are all the required environment variables. Note that I am using Cloudinary as an image bucket because Strapi cache will be clear everytime Heroku restarts.

```bash
heroku config:set MY_HEROKU_URL=$(heroku info -s | grep web_url | cut -d= -f2) 
heroku config:set APP_KEYS=$(cat .env | grep APP_KEYS | cut -d= -f2-)
heroku config:set API_TOKEN_SALT=$(cat .env | grep API_TOKEN_SALT | cut -d= -f2)
heroku config:set ADMIN_JWT_SECRET=$(cat .env | grep ADMIN_JWT_SECRET | cut -d= -f2)
heroku config:set JWT_SECRET=$(cat .env | grep -w JWT_SECRET | cut -d= -f2)
heroku config:set CLOUDINARY_NAME=$(cat .env | grep CLOUDINARY_NAME | cut -d= -f2)
heroku config:set CLOUDINARY_KEY=$(cat .env | grep CLOUDINARY_KEY | cut -d= -f2)
heroku config:set CLOUDINARY_SECRET=$(cat .env | grep -w CLOUDINARY_SECRET | cut -d= -f2)
```

## 📚 Learn more
You can find more information on the Strapi's [website](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)!

