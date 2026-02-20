# SauceDemo - Login Module Documentation
## Application Under Test 

## Website: https://www.saucedemo.com

## Module: Login

### Test Cases 
TC_01 - Verify user can login with valid credentials

### Preconditions:

User is on the SauceDemo login page

### Test Steps:

Enter username: standard_user

Enter password: secret_sauce

Click Login button

### Expected Result:

User should be redirected to the Inventory page (/inventory.html)

Inventory page title "Products" should be visible

TC_02 - Verify error message is displayed for invalid login credentials

### Preconditions:

User is on the SauceDemo login page

### Test Steps:

Enter username: invalid_user

Enter password: wrong_password

Click Login button

Expected Result:

Error message should be visible:
"Username and password do not match"

User should remain on the login page