class HomePage
{
getGlobalFeeds()
{
    return cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link')
}

get17thTab()
{
    return cy.get(':nth-child(17) > .page-link')
}

}

export default HomePage;