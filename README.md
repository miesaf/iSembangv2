# iSembang v2

Vue 3 + Vite chat app on Firebase (Authentication + Realtime Database).

## Project setup
```
npm install
cp src/main.js.example src/main.js   # then fill in your Firebase project configuration
```

`src/main.js` is git-ignored, so the Firebase configuration never goes into the repo.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build      # output in dist/
npm run preview    # serve dist/ locally
```

The app uses HTML5 history routes (`/daftar`, `/reset`, `/sembang`), so the web server must send `index.html`
for unknown paths.

### Customize configuration
See [Vite Configuration Reference](https://vite.dev/config/).
