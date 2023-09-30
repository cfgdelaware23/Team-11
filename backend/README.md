# Backend Code
This is the backend code for our project. The backend code is linked to a MongoDB database which holds all information about each customer. Each customer 

## Schemas
There are four database schemas to our code.

###     1. Feedback
The feedback schema stores user's usernames and numeric values for four variables: nutrition, affordability, satisfaction, and ease. The username is stored to track the unique feedback that each customer gives. Nutrition, affordability, ease, and satisfaction all store an number between one and five answering the following questions respectively - how nutrious would you rank our food, how affordable are our products to you, how easy has the process regarding membership, and how satisfied are you with Wellfare?

###     2. Income categories
The income categories schema stores user's usernames and boolean values for three variables: publicHousing, EBT, and SNAP. The username is used to identify which user the values correspond to. If a user qualifies for a program, its variable value will be set to true.
###     3. Product data
The product data schema stores three variable for every product: productID, stars, and basePrice. The ID is a unique ID given to each product, the stars represent a health rating out of four of the product, and the base price represents the origional price of the product. Administrators can add and delete products to the product data collection.
###     4. Purchase history
The purchase history schema stores user's usernames and their purchase history. Purchase history is an array of product IDs. The IDs can be used to look up the corresponding product in the product data collection.
###     5. User data
The user data schema stores user's names, personalized discount, usernames, current stars, date last updated, and whether the last update was made by a user or someone else. Current stars is a health rating calculated by the health ratings of the produces the customer has bought. It serves to incentivize customers to buy the healthiest products.  
## Routes

## Requests
