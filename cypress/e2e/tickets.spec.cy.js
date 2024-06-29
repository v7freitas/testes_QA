/// <reference types="cypress"/>
import ticketsPage from "../Pages/Tickets/TicketsPage";

describe ("Testes de tickets", () => {

    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))

    it("TC01 - Input First and Last Name", () => {
        const firstName = "Vinicius";
        const lastName = "Freitas";
        const fullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get(".agreement p").should("contain",`I, ${fullName}, wish `)

    })

    it("TC02 - Compra de Ingresso Full", () => {
        const firstName = "Vinicius";
        const lastName = "Freitas";
        const fullName = `${firstName} ${lastName}`;
        const email = "email@email.com";
        const specialRequest = "testando";
        

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get(".agreement p").should("contain",`I, ${fullName}, wish `)
        cy.get("#email").type(email);
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.get("#friend").check();
        cy.get("#requests").type(specialRequest, {delay: 0});
        cy.get("#agree").check();
        cy.get("#signature").type(fullName, {delay: 0});
        cy.get("button[type='submit']").click();
        cy.get(".success").should("be.visible");
        cy.get(".success").should("have.text", "Ticket(s) successfully ordered.");

    })

    it.only("TC03 - Compra de Ingresso Full Otimizada", () => {
        
        cy.fillMandatoryFields();
        ticketsPage.Success.should("be.visible");
        ticketsPage.Success.should("have.text", "Ticket(s) successfully ordered.");

    })
})