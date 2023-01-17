# Priddle

<p align="center">
  <img src="./client/src/image/logo.png"/>
</p>

Social Site that allows users to comment and post puzzles and riddles. 

### A live version of Priddle is deployed with Render and running here:

[Live Version](https://priddle.onrender.com/)



## Features


#### Posting





## Get started
After cloning the repo into you system you will need to: 
- make sure your system is running a ruby version 

After cloning the repo, run the following steps in the project directory to get started:

```
bundle install
```
Install Ruby gem packages associated with the project.

 ```
 rails db:migrate db:seed
 ```
Migrates all tables and associations that are needed. Also make sure to seed the backend so you have some data to work with.

 ```
 rails s
 ```
Start your Rails server. For a closer look at just the backend, you can open http://localhost:3000

Finally for your front end run:

```
npm start --prefix client
```
Runs the app in the development mode. 
