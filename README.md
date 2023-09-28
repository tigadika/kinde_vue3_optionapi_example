# Vue 3 option API app with Kinde Authentication

This is an example of Vue3 app integration with Kinde.

Kinde is a simple authentication platform that allow us to store user information and database along with authentication feature to allow us focus on our app main feature

Kinde usage in this example:

- User sign in
- User sign up
- User logout
- Protected server endpoint with jwt autentication from kinde

## Getting started

> asp per now, kinde doesn't have an SDK that integrates with vue.js. So, we using their javascript SDK for now

Please refer to the docs first to have a better understanding of how to integrate kinde in your app:

- [Kinde JS Docs](https://kinde.com/docs/developer-tools/javascript-sdk/) for client side
- [Kinde Expressjs SDK Docs](https://kinde.com/docs/developer-tools/express-sdk/) for server side

if you want to try with this repo, here the steps:

- clone this repository
- in client folder and server folder respectively, copy/create `.env` file from `.env.example`

  ```
  cp .env.example .env
  ```

- add your `kinde client_id` to the .env file. [Don't have the client_id? register here](https://app.kinde.com/auth/cx/_:nav&m:register&psid:6d4e883f7ddc4e6bb2d1d7070a76780b)

- run the client and the server `npm i` -> `npm run dev`
