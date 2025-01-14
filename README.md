## Onlygifts App:

A platform that allows users to receive small gifts from friends and families via stripe payment system using their unque sharable links.

## How to set up database and run the program locally
1. Clone this repo
2. Fromt he main directory, enter into both root directory ie client and server

 ```
 cd client
 cd server
 ```
3. Install node.js and npm on your machine. then run npm i on both client and server directory.
4. Create a .env file in the server side root directory - rememeber to add to your gitignore file.
5. Set up a MongoDB account and follow the [guide]( https://docs.mongodb.com/manual/tutorial/getting-started/) to setting up your database
6. Add your connection string from MongoDB into your .env file and set it to be equal to DB_URI
7. In the client directory run
 ```
 npm install 
 npm start
 ```
6. In the server directory run
 ```
 npm install nodemon
 npm start
 ```

## Check how the Application works
Start the server side of your application in the terminal cd server && npm start
You will get notified if the connection is establised successfully.

Open the client side concurrently in a new terminal cd client && npm start
Your browser should open up a new window and direct you to localhost:3000.

Now you can register on Only Gifts and share your custom link with your friends!

## Test the Application
To run integration tests open the cypress extension in your command line.
In a separate terminal start your client local host.

```bash
cd client && npx cypress open
cd client && npm start

```
Execute all tests in your terminal.
Start local host first and run cypress in a second terminal.

```bash
cd client && npm start
cd client && npx cypress run

```

For the Server Tests
The server side uses Jest for end-point testing. Test data is stored in a separate database table. Create a separate database in your cluster.
Set it equal to DB_URI_TEST in your .env file.

```bash 
cd server && npm test
```

## Epics:

```
As a user
So that I may receive a gift from my friend
I would like to create an account on onlygifts.
```
~ (- sign-up page ~ username, email, password - database setup - verification - profile page)

```
As a friend
So that I may show my appreciation
I would like to be send a small gift to my friend.
```

~ (- profile page link (access to page) - button to make a donation - receive a message thanking friend for gift)


## User Stories

```
As a user
So that I can receive a gift from my friends and family
I want to register an account on onlygifts.
```
```
As a registered user on onlygifts
So that I can access my profile
I want to login into my account on onlygifts.
```
```
As a registered user on onlygifts
So that no one can pose as me
I want to logout of my account on onlygifts.
```
```
As a user
So that I can tell a little about myself to my friends 
I want to have a profile on onlygifts.
```
```
As a user
So that I can share my profile with my friends 
I want to generate a unique sharable link  on onlygifts.
```
```
As a giver
So that I can show some appreciation to my friend 
I want to donate to my friend on onlygifts.
```
```
As a giver
So that I can show some appreciation in words to my friend 
I want to send a courtesy message to the onlygifts.
```
```
As a registered user on onlygifts
So that I can feel the love from my givers
I want to see a list of messages sent to me.
```







### Meet the amazing Engineers who worked on this projects 
- [Farya](https://github.com/Xfarya)
- [Corinne](https://github.com/CorinneBosch)
- [Blessing](https://github.com/BlessingUb)
- [Hotu](https://github.com/ClaimingCookie5)
- [Suhani](https://github.com/suhani-zaman)
