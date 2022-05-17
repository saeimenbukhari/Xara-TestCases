export class createAccount{

    createAccount(firstName,lastName,email,password){

        cy.get('[class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart MuiInputBase-marginDense MuiOutlinedInput-marginDense"]')
              .eq(0)
        .type(firstName)
        .find('input')
              .should('have.value',firstName)

        cy.get('[class="MuiFormControl-root MuiTextField-root input-field-div MuiFormControl-marginDense"]')  
        .type(lastName)
        .find('input')

        .should('have.value',lastName)
        
        cy.get('[class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart MuiInputBase-marginDense MuiOutlinedInput-marginDense"]')
          .eq(0)
        .type(email)
          .find('input')

          .should('have.value',email)

        cy.get('[class="MuiFormControl-root MuiTextField-root input-field-div MuiFormControl-marginDense MuiFormControl-fullWidth"]')
          .eq(1)
          .type(password)
          .find('input')

          .should('have.value',password)

          cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-fullWidth"]')
            .contains('Create an account')
            .click()



    }

    createWithGoogle(){

        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall"]')
          .eq(0)
          .click()


    }

    passwordValidation(password){

        if(password.length > 7){
            cy.get('[class="MuiFormControl-root MuiTextField-root input-field-div MuiFormControl-marginDense MuiFormControl-fullWidth"]')
            .eq(1)
            .type(password)
            .find('input')
            .should('have.value',password)
        }
        else{
            newAccount.createAccount('firstName','lastName','email@test1.com','123')
            cy.get('[class="MuiFormHelperText-root Mui-error"]')
            .should('contain','Please choose a password at least 8 characters long')
        }
        
          

    }


}
export const newAccount= new createAccount()