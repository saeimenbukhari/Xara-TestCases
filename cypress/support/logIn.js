export class logIn{

    loginToApp(username, password){
        
    

            cy.get('.MuiTypography-body2 >.MuiTypography-root').contains("Sign in").click()
        
              cy.get('[name="email"]').type(username).should('have.value',username);
          
              cy.get('[name="password"]').type(password).should('have.value',password);
          
              cy.get('[type="button"]').contains('Sign in').click();
          
              cy.wait(7000)
    }

    userNonExsist(username,password){

        cy.get('.MuiTypography-body2 >.MuiTypography-root').contains("Sign in").click()
        
              cy.get('[name="email"]').type(username).should('have.value',username);
          
              cy.get('[name="password"]').type(password).should('have.value',password);
          
              cy.get('[type="button"]').contains('Sign in').click();
          
              cy.wait(8000)

              let errorMessage=username+' is not registered.Please  register  for a Xara Cloud account.'

              cy.get('[class="MuiFormHelperText-root Mui-error"]').should('have.text',errorMessage)




    }

    invalidPassword(username,password){
        cy.get('.MuiTypography-body2 >.MuiTypography-root').contains("Sign in").click()
        
        cy.get('[name="email"]').type(username).should('have.value',username);
    
        cy.get('[name="password"]').type(password).should('have.value',password);
    
        cy.get('[type="button"]').contains('Sign in').click();
    
        cy.wait(5000)

        let errorMessage='The password is incorrect.If you used to sign in with your Xara account email and password, please  get a new password  for use with Xara Cloud.'

        cy.get('[class="MuiFormHelperText-root Mui-error"]').should('have.text',errorMessage)


    }

    

}

export const newLogIn= new logIn()