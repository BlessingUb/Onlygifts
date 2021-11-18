## Onlygifts App:

A platform that allows users to receive small gifts from friends and families via stripe payment system using their unque sharable links.
[Heroku Deployment](https://only-gifts.herokuapp.com/)
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


## How to set up database and run the program locally
1. Clone this repo
2. In both root directory ie client and server
 ```
 cd client
 cd server
 ```
3. Create a .env file in the root directory
4. Set up a MongoDB account and follow the [guide]( https://docs.mongodb.com/manual/tutorial/getting-started/) to setting up your database
5. Add your connection string from MongoDB into your .env file
6. In the client directory run
 ```
 npm install 
 npm start
 ```
6. In the server directory run
 ```
 npm install nodemon
 npm start
 ```

### Meet the amazing Engineers who worked on this projects 
- [Corinne](https://github.com/CorinneBosch)
- [Blessing](https://github.com/BlessingUb)
- [Farya](https://github.com/Xfarya)
- [Hotu](https://github.com/ClaimingCookie5)
- [Suhani](https://github.com/suhani-zaman)
