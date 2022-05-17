   /// <reference types="cypress" />
   const {newLogIn} = require('../support/logIn');

   describe('Login Test Cases', () => {
    beforeEach(() => {
        
      cy.visit('https://cloud.xara.com')

      cy.wait(6000)

    })

    it('Login to app validating that the fields are not empty', () => {

        let username='saeimenbukhari@gmail.com'
        let password='xaratest@223'

        newLogIn.loginToApp(username, password)
      })

      it('User does not exist',()=>{
        let username='test@test1.com'
        let password='xaratest@223'

        newLogIn.userNonExsist(username, password)
      })

      it('Invalid password is entered',()=>{
        let username='saeimenbukhari@gmail.com'
        let password='xarat@223'

        newLogIn.invalidPassword(username, password)
      })

    })