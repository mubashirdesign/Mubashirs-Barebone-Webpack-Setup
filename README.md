Overview:
This a basic configuration setup for webpack. What it does is give you an dev enviroment so you can create your web projects efficiently.
This config supports babel to transpile ESnext into es5 code and polyfil the rest.

Prerequisites:
- Have nodeJS alongside npm installed on your machine
- A command line or bash, I use git bash on windows, https://git-scm.com/downloads


Copy the 3 config files into your project directory:
- .babelrc
- package.json
- webpack.config

You can either use the current directory structure of the "src" folder or use your own but that would require editing the paths inside the webpack.config file. 
If you are using the current structure just copy your index file into the index.html and remove your css stylesheet / javascript imports. 
Place your javascript into js/index.js, do not remove the CSS import at the top or else your css will not generate in the new dist folder. 
Finally copy over your css into css/styles.css 


Open your command line / bash, navigate to your project folder. 

Now in your bash, run "npm install --save", this will install the needed node_modules defined inside of the package.json file 

After the installation, run "npm run start" if you want to generate the files in dev mode or "npm run build" if you want to generate it in production mode which minifys the files. 
