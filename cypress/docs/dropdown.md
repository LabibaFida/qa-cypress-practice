# SauceDemo - Product Sort Dropdown Documentation

## Application Under Test
**Website:** [https://www.saucedemo.com](https://www.saucedemo.com)  
**Module:** Inventory - Product Sort Dropdown

---

## Test Case

### TC_01 - Verify dropdown options and selection

**Preconditions:**  
- User is logged in and on the Inventory page  

**Test Steps:**  
1. Check the dropdown is visible  
2. Select "Name (A to Z)"  
3. Verify dropdown value is "az"  
4. Select "Name (Z to A)"  
5. Verify dropdown value is "za"  
6. Select "Price (low to high)"  
7. Verify dropdown value is "lohi"  
8. Select "Price (high to low)"  
9. Verify dropdown value is "hilo"  

**Expected Result:**  
- Dropdown is visible  
- User can select each option  
- Selected value matches expected value  