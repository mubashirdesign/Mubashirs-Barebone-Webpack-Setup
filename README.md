Overview:
Features:
- PNG/JPEG compression (%80 quality retained)
- HTML minification
- JS concatination/minification
- SASS/CSS concatination/minification
- CSS autoprefixer (last 10 versions)
- ES6 to ES5 Transpiler for browser support

Prerequisites:
- Have nodeJS alongside npm installed on your machine
- A command line or bash, I use git bash on windows, https://git-scm.com/downloads


Clone the repository

```
git clone https://github.com/mubashirdesign/Mubashirs-Barebone-Webpack-Setup.git
```

Commands:

Install all the modules
```
npm install
```

Run the web server and work in real-time
```
npm start
```

Bundle all the files into a production ready state (will be outputted to the /dist folder)
```
npm run build
```

Future Plans:
- Add chunks for vendors and components