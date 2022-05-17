   /// <reference types="cypress" />
   const {newAccount} = require('../support/createAccount');

   describe('Login Test Cases', () => {
    beforeEach(() => {
        
      cy.visit('https://cloud.xara.com')

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


        newAccount.createWithGoogle()
      })

      it.only('Password verification', ()=>{
        newAccount.passwordValidation('abc')

        newAccount.passwordValidation('abcdefgh')

      })


    })