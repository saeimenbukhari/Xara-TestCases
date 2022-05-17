export class logIn{

    loginToApp(username, password){
        
    
            //click the 'Sign In' link
            cy.get('.MuiTypography-body2 >.MuiTypography-root').contains("Sign in").click()
              
            //get the email and password fields and type the values
              cy.get('[name="email"]').type(username).should('have.value',username);
          
              cy.get('[name="password"]').type(password).should('have.value',password);
            // press the button to submit file 
              cy.get('[type="button"]').contains('Sign in').click();
          
              cy.wait(7000)
    }

    userNonExsist(username,password){
        //click the 'Sign In' link
        cy.get('.MuiTypography-body2 >.MuiTypography-root').contains("Sign in").click()
        
              //get the email and password fields and type the values
              cy.get('[name="email"]').type(username).should('have.value',username);
          
              cy.get('[name="password"]').type(password).should('have.value',password);

             // press the button to submit file
              cy.get('[type="button"]').contains('Sign in').click();
          
              cy.wait(8000)

              let errorMessage=username+' is not registered.Please  register  for a Xara Cloud account.'

              //checking that field validation is active
              cy.get('[class="MuiFormHelperText-root Mui-error"]').should('have.text',errorMessage)




    }

    invalidPassword(username,password){
        //click the 'Sign In' link
        cy.get('.MuiTypography-body2 >.MuiTypography-root').contains("Sign in").click()
        
        //get the email and password fields and type the values
        cy.get('[name="email"]').type(username).should('have.value',username);
    
        cy.get('[name="password"]').type(password).should('have.value',password);
        
        // press the button to submit file
        cy.get('[type="button"]').contains('Sign in').click();
    
        cy.wait(5000)

        let errorMessage='The password is incorrect.If you used to sign in with your Xara account email and password, please  get a new password  for use with Xara Cloud.'
        
        //checking that field validation is active
        cy.get('[class="MuiFormHelperText-root Mui-error"]').should('have.text',errorMessage)



    }

    

}

export const newLogIn= new logIn()