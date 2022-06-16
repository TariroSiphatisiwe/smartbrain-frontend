# smartbrain-frontend
A React full-stack face detection application, which is connected to a postgresql database using a REST-api

## Front End Technologies : Deployed on GitHub Pages

1.React

2.Tachyons

3.Clarifai API

4.CSS, HTML

**How it works**:

The front end part of the face recognition app was made using React, tachyons , Css and HTML, this helped to create a responsive user interface. I also included the
clarifai API, and made a function to calculate and be able to locate and detect a face.

## Back End Technologies : Deployed on Heroku

1.Node.js

2.Express.js

3.Knex.js

4.Cors

5.Postgresql

**How it works**:

After creating the front end, I made a server using Express.js and Node.js, I was able to come up with a RESTful API in which requests can be made to my database 
postgresql schema.

# App Features

## Sign In and Register Pages:

### Functionality:

-Can switch between the Registration form and Sign in form 

<a href="URL_REDIRECT" target="blank"><img align="center" src="https://i.postimg.cc/k5m4XN8V/Screenshot-2022-05-05-at-3-50-43-PM.png"/></a>

<a href="URL_REDIRECT" target="blank"><img align="center" src="https://i.postimg.cc/0jRJg6xx/Screenshot-2022-05-05-at-4-07-15-PM.png"/></a>

-Once you click on register or sign in, it takes you to the face detection page

<a href="URL_REDIRECT" target="blank"><img align="center" src="https://i.postimg.cc/kXFkMxB6/Screenshot-2022-06-16-at-3-35-08-AM.png"/></a>

## Face Detection Page

### Functionality:

-Paste PNG url and click detect e.g **https://i.postimg.cc/qMhTkt22/joel-mott-La-K153ghdig-unsplash.jpg**

-Your picture will atomatically upload and the face will be detected and will count the number of entries of that particular user

-Data collected in the signin Database schema is used to update name of user, 


<a href="URL_REDIRECT" target="blank"><img align="center" src="https://i.postimg.cc/ZKTpXHnY/Screenshot-2022-05-06-at-12-09-52-PM.png"/></a>


