context("2:Layout", () => {
    context("2.0+", () => {
        test("14: Promises", () => {
            bela
                .ready('/w2ui/demos/#/layout/14')
                .begin('Click buttons')
                    .get('button:contains(Show Message)')
                    .click()
                    .wait('#w2ui-message0', 'to.not.have.class', 'animating')
                    .get('#msg-log')
                    .should('have.text', 'message is ready')
                    .get('#w2ui-message0 button:contains(Ok)')
                    .click()
                    .wait('#w2ui-message0', 'to.disappear')
                    .get('button:contains(Load Content 1)')
                    .click()
                    .get('#msg-log')
                    .wait('#w2ui-message0', 'to.not.have.class', 'animating')
                    .should('have.text', 'content 1 is loaded')
                    .get('button:contains(Load Content 2)')
                    .click()
                    .wait('#w2ui-message0', 'to.not.have.class', 'animating')
                    .get('#msg-log')
                    .should('have.text', 'content 2 is loaded')
                .end()
        })
    })
})