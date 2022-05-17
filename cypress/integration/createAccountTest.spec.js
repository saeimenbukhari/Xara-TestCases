   /// <reference types="cypress" />
   const {newAccount} = require('../support/createAccount');

   describe('Login Test Cases', () => {
    beforeEach(() => {
        
      cy.visit('/')

      cy.wait(6000)

    })

    it('Create account validating that the fields are not empty', () => {
        let firstName='Aeimen'
        let lastName='Bukhari'
        let username='test@test123.com'
        let password='xaratest@223'

        newAccount.createAccount(firstName,lastName,username, password)
      })

    it('Create account with google works',()=>{

        //just checking the button works, to verify link redirection additonal scripts are needed
        newAccount.createWithGoogle()
      })

    it('Password verification with more than 8 letters', ()=>{
        
        newAccount.passwordValidation('abcdefgh')

      })

    it('Password verification with invalid input', ()=>{
        //less than 8 letters
        newAccount.passwordValidation('abc')


      })


    })