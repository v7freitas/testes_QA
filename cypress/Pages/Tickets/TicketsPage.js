class TicketsPage {


    constructor(){
        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.email = '#email';
        this.agree = '#agree';
        this.submitButton = 'button[type="submit"]';
        this.success = '.success'
    }


    get FirstName () {
        return cy.get(this.firstName);
    }

    get LastName () {
        return cy.get(this.lastName);
    }

    get Agree () {
        return cy.get(this.agree);
    }

    get Email () {
        return cy.get(this.email);
    }

    get SubmitButton () {
        return cy.get(this.submitButton);
    }

    get Success () {
        return cy.get(this.success);
    }
}

const ticketsPage = new TicketsPage();

export default ticketsPage;