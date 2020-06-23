# UETCL-Dasboard

This App  allows project managers track the schedule of their products with the contractors. The App gives notifications on the progress of the project, whether it is completed, due completion, or it still has some months to go. 

<!-- ##  Features or Endpoints required 
       
Endpoint | Functionality
-------- | -------------
GET /products | Fetch all products
GET /products/<productId> | Fetch a single product record
GET /sales | Fetch all sale records
GET /sales/<saleId> | Fetch a single sale record
POST /products | Create a product
POST /sales | Create a sale order -->

##  Prerequisites
* Django restframework
* React js

##  Technologies 
* Python 3.7.0 and above

##  Reproducing the App
* This App has frontend and backend sections
* Fork the repo at https://github.com/Strewik/UETCL-dash
* git clone https://github.com/<your-username>/UETCL-dash
* cd into front directory and do 'yarn or npm install' to install dependencies
* In the main project folder set up a virtual environment (venv) e.g
'python3 -m venv venv'
* Activate the virtual environment
* While in the virtual environment do 'pip install django djangorestframework django-rest-knox' and any other dependencies as need be. 

##  Run the application
In the uetcldash directory run 'python manage.py runserver'
to start the backend of the App. 
* The index  page of the app can be found on  http://localhost:3000/
While in the front directory
* Do npm start or yarn start to start the frontend of the application
* The index  page of the app can be found on  http://localhost:3000/
<!-- * Test the end points of the app with [postman](https://www.getpostman.com/collections/b755891b1e6fe378ba0a) -->

<!-- ## Import the unittest library in the test file
* import Unittest
* Write tests
* Run nosetests  --with-coverage --cover-package=api to see if the tests are passing. In case of any failure then refactor the code and be sure the tests run successfully

## Deployment 
* This App is hosted on [Heroku]() -->


## Author 
Steven Kawooya
Irene Nyakate
