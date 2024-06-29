/// <reference types="cypress"/>

describe("Testes de Back", () => {

    it("Requisição GET", () => {
        cy.request("https://httpbin.org/get")
            .should(function(response){
                const {status, statusText} = response;
                expect(status).to.be.equal(200)
                expect(statusText).to.be.equal('OK')
            })
    })

    it("Requisição POST", () => {
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                name: 'Vinicius',
                age: '26'
            }
        }).should(function(response) {
            const {status, statusText} = response;
                expect(status).to.be.equal(200)
                expect(statusText).to.be.equal('OK')
        })
    })

    it("Requisição POST 2", () => {
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                name: 'Vinicius',
                age: '26'
            }
        }).its('body').should('not.be.empty');
    })
})