# Xara Automation Test Cases 

This repositry holds automation test cases for the manual test cases designed and executed in the file below: 
[Google Sheet] (https://docs.google.com/spreadsheets/d/1lbxt2N6TSxbAlfhlvpl8GT6sZbiPdy-GVDiAUW5OBdE/edit#gid=0)

Test files have been written in the cypress/supoort folder and then used in the integration folders to make them re-usable. 

## Pre-Requisites: 
 Node.js(v12 or higher)
 VS Code or any other IDE

## Steps to Install 

1. Create a folder in your local directory. 
2. Open VS Code and open the folder. 
3. Open new terminal form **'Terminal -> New Terminal'.**
4. Go to the github repository and clone via HTTPS or simply cope the following command to the terminal:
 >             git clone https://github.com/saeimenbukhari/xaraTestCases.git
5. Type the following command in the terminal to install all dependencies: 
 >             npm install
6. Run the following command to start Cypress Runner which will have all the automation scripts present:
 >             npx cypress open
7. Once the Cypress runner is open, press the 'Run 2 Integration Specs' button. 

## Post Execution: 

All the scripts will run infront of you along side all the current script operations written in the script. 
Once execution is complete you will see how many test have passed or failed in the Test framework.
You can open up each test by clicking on each .spec file. 

