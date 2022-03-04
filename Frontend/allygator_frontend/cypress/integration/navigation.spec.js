it('use requests to navigation sidebar links', () => {

    const pages = ['dashboard', 'forum', 'connection','chat','miscellaneous','profile']
  
    cy.visit('/dashboard')
  
    pages.forEach(page => {
  
      cy
        .contains(page)
        .then((link) => {
          cy.request(link.prop('href'))
        })
  
    })
  
  });