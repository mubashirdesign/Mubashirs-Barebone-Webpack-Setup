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

You can either use the current directory structure of the "src" folder or use your own but that would require editing the paths inside the webpack.config file. 
If you are using the current structure just copy your index file into the index.html and remove your css stylesheet / javascript imports. 
Place your javascript into js/index.js, do not remove the CSS import at the top or else your css will not generate in the new dist folder. 
Finally copy over your css into css/styles.css 


Open your command line / bash, navigate to your project folder. 

Now in your bash, run "npm install --save", this will install the needed node_modules defined inside of the package.json file 

After the installation, run "npm run start" if you want to generate the files in dev mode or "npm run build" if you want to generate it in production mode which minifys the files. 
