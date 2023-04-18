class LoginPage
{
getUserName()
{
    return cy.get(':nth-child(1) > .form-control')
}

getPassword()
{
    return cy.get(':nth-child(2) > .form-control')
}

getButtonClick()
{
    return cy.get('.btn')
}

}
export default LoginPage