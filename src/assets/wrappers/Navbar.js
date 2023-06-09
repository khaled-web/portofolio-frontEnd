import styled from 'styled-components'

const NavbarStyled = styled.nav `
.nav-links{
  display: none;
}

.navbar-General{
  background-color: var(--clr-primary-10);
  height: 5rem;
  display: grid;
  align-items: center;
  transition: var(--transition);
  z-index: -1;
}

.nav-center{
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
}

.nav-header{
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
}

.nav-logo{
  width: 17rem;
}

.nav-btn{
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  font-size: 2rem;
  cursor: pointer;
  justify-self: end;
}

@media screen and (min-width:768px){

.navbar-General{
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

/* fixed navbar */
.navbar-fixed{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--clr-white-1);
  z-index: 2;
  box-shadow: var(--light-shadow);
}

`
export default NavbarStyled