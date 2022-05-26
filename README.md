# Restro
Restro is an realtime food delivery and tracking website
# To Run This Project

# Step 1
Install Nodejs, MongoDB and yarn 

# Step 2
open project in vs code

# Step 3
open mongoDB compass and click connect

# Step 4
Now, make a database name pizza and collection name menus
import menus.json file in collection menus

# step 5
Open Project In vs code the open terminal 

# step 6
# insall dependencies using following command

# DevDependencies

yarn add laravel-mix@5.0.4 nodemon@2.0.4 resolve-url-loader@3.1.0 sass@1.26.9 sass-loader@8.0.2 vue-template-compiler@2.6.11 -D

# Dependencies

yarn add @babel/plugin-proposal-class-properties@7.12.1 @material-ui/core@4.12.3 @material-ui/icons@4.11.2 @stripe/stripe-js@1.10.0 axios@0.19.2 bcrypt@5.0.0 connect-mongo@3.2.0 cross-env@7.0.2 dotenv@16.0.0 ejs@3.1.3 express@4.17.1 express-ejs-layouts@2.5.0 express-flash@0.0.2 express-session@1.17.1 moment@2.27.0 mongoose@5.9.25 noty@3.2.0-beta passport@0.4.1 passport-local@1.0.0 socket.io@2.3.0 stripe@8.118.0
run yarn install commad

# Step 7
open two terminal and run following command

yarn dev
yarn watch

# Step 8 
Open browser and go to localhost:3300 or type 127.0.0.1:3300

# Step 9

# To Make a Admin
As all the register user are role as customer, so to Make a admin resgister using the registration form on website and the goto mongoDB compass then to user database after the open users collection and look for user details you want to make admin, once found change role from customer to admin