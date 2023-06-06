import styled from 'styled-components'

const NavbarStyled = styled.nav `
  height: 5rem;
  padding: 1rem;
  display: grid;
  align-items: center;
  transition: var(--transition);
  /* filter: blur(30px); */
  z-index: -1;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* img {
      width: 175px;
      margin-left: -15px;
    } */
  }
  .nav-logo{
  width: 17rem;
}
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
@media screen and (min-width:768px){
.nav{
  background: var(--clr-primary-10);
}

.nav-btn{
  display: none;
}

.nav-links{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  justify-items: center;
  column-gap: 2rem;
  justify-self: end;
}

.nav-links a {
  text-transform: uppercase;
  color: var(--clr-black-5);
  font-weight: bold;
  letter-spacing: var(--spacing);
  transition: var(--transition);
}

.nav-links a:hover{
  color: var(--clr-primary-5);
}

.nav-center{
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
}
}

`
export default NavbarStyled