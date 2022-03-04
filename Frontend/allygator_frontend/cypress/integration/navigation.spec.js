it('use requests to navigation bar links', () => {

    const pages = ['dashboard', 'forum', 'connection','chat','miscellaneous','profile']
  
    cy.visit('/')
  
    pages.forEach(page => {
  
      cy
        .contains(page)
        .then((link) => {
          cy.request(link.prop('href'))
        })
  
    })
  
  });