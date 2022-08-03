
# ToDoApp (Reactjs)

this is reactjs demo project for my learning purpose..learned the CRUD(Create,Read,Update,Delete) operations and last  created in a todoapp in reactjs 


## Installation

Install my-project with npm

```bash
  git clone myproject 
  cd my-project
  npm Install
  yarn start
```
    
## Screenshots

![App Screenshot](https://github.com/MTsrf/toDoapp-react/blob/main/src/screenshot/Screenshot%20from%202022-08-03%2019-59-14.png?raw=true)
![App Screenshot](https://github.com/MTsrf/toDoapp-react/blob/main/src/screenshot/Screenshot%20from%202022-08-03%2020-08-47.png?raw=true)
![App Screenshot](https://github.com/MTsrf/toDoapp-react/blob/main/src/screenshot/Screenshot%20from%202022-08-03%2020-08-59.png?raw=true)
![App Screenshot](https://github.com/MTsrf/toDoapp-react/blob/main/src/screenshot/Screenshot%20from%202022-08-03%2020-09-11.png?raw=true)
![App Screenshot](https://github.com/MTsrf/toDoapp-react/blob/main/src/screenshot/Screenshot%20from%202022-08-03%2020-09-23.png?raw=true)
![App Screenshot](https://github.com/MTsrf/toDoapp-react/blob/main/src/screenshot/Screenshot%20from%202022-08-03%2020-09-28.png?raw=true)


## Deployment

Install the gh-pages package as a “dev-dependency” of the app.

```bash
npm install gh-pages --save-dev
```

Add some properties to the app’s package.json file. At the top level, add a homepage property.

```bash
"homepage": "http://username.github.io/my-app", 
```
Now you need to add two more properties. In the existing scripts property, add a predeploy property and a deploy property, each having the values shown below: 


```bash
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  //...
  "build": "react-scripts build && cp build/index.html build/404.html", // this will prevent page reloads to give a  404 error
}
```
In this step create a git repository in the app’s folder and add the GitHub repository as a “remote” in your local git repository
```bash
#create a new git repository
$ git init
#add remote repository
$ git remote add origin https://github.com/username/my-app.git
```

To deploy this project run

```bash
  npm run deploy
```


# Hi, I'm Sharafudheen! 👋


## 🚀 About Me
I'm a full stack developer. Iam working on brototype internship.skill have MERN(Mongodb,Expressjs,Reactjs,Nodejs)
and Python ,Django,


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherinempeterson.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)


