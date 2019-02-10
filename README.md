# Protractor Cucumber Framework

![alt tag](./metadata/logo.png)

###Overview
This framework is developed to test "https://openweathermap.org/" using Protractor with Cucumber.
<br>
<h4>Features

1) Supports BDD
2) Protractor is used to support angular applications.
3) Page object model is used for maintainability.
3) Cucumber reporting which helps to publish BDD result in a readable format.
4) Multiple browser support.

## Project Structure

![alt tag](./metadata/projectStracture.png)
#### Prerequisites
1) Install Node.js -https://nodejs.org/en/download/
2) Install Java Development Kit -https://www.java.com/en/download/

#### Project Setup
1) Take checkout for master branch
2) From project folder, hit below commands in command prompt
* npm install
 * npm install -g protractor
 * npm install -g cucumber
 * 'webdriver-manager update' to update selenium drivers.

#### Execution
* Open terminal
* Hit protractor protractor.config --suite=landingPage

#### Reporting
* Reports will be generated automatically after execution at ./reports folder.

![alt tag](./metadata/report.png)

#### Jenkins Setup


==============================================================
##### Acceptance Criteria:
###### Point 01:
Validate Landing page title
Validate presence of unit toggle button at Landing page
Validate presence of weather graph at Landing page
Validate presence of header menu at Landing page   
Validate presence of footer menu at Landing page

###### Point 02 and 03
Validate error message is shown for invalid location.
Validate valid information is shown for valid location.

###### Extra Validation:
Validate user is able to change unit of measurement to Metric.
Validate user is able to change unit of measurement to Imperial.

##### Question:
If you had more time what would you do differently or additionally?
<br>Current project contains validations in step definition file and protractor API is called at page object level. Given time, it would be best approach if we could devide whole framework into below 3 components:
<br>1st component contains BDD and step definition (No validations at step level)
<br>2nd component contains testHelper and PO: It is the replica of page and contains all action which a manual tester does.
<br>3rd component contains protractor related functions which is called in second component.
<br>lib folder containing all common functions
<br> utility folder containing all utilities to parse files (eg: xml, xls, json parser etc)
<br>
###### Advantage of dividing framework in described format are below:
* If we want to move away from cucumber and want to adopt new technology then only 1st component will change and rest will remain change.
* If Business requirement or UI is changed then we need to modify only second component.
* If we move from protractor and want to use different technology then only 3rd component will change.    

