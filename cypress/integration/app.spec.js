describe('E2e tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    afterEach(() => {
        cy.window().then(win => win.document.activeElement.blur());
    });

    it('should render Hello World on root path', () => {
        cy.get('body').should('contain', 'Hello World');
    });
});