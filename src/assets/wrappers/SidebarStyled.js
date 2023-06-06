import styled from 'styled-components'

const SidebarStyled = styled.div `
  text-align: center;
  
  .sidebar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--clr-white-1);
  z-index: 4;
  display: grid;
  /* justify-content: center;
  align-items: center; */
  place-items: center; /* include (justify-content&align-content) */
  transition: var(--transition);
  /* add later */
  transform: translateX(-100%);
}

.show-sidebar{
  transform: translateX(0);
}

  .close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border-color: transparent;
  font-size: 2rem;
  transition: var(--transition);
  color: var(--clr-red-1);
  cursor: pointer;
  }
  .close-btn:hover {
    color: var(--clr-red-2);
  }
  .links {
    margin-bottom: .5rem;
    text-align: center;
  }
  .links a {
  font-size: 2rem;
  text-transform: uppercase;
  transition: var(--transition);
  color: var(--clr-grey-6);
  margin-top: 2rem;
  letter-spacing: var(--spacing);
  display: grid;
  }

  .links a:hover {
    color: var(--clr-primary-5);
  }

.social-icons{
  display: grid;
  margin-top: .5rem;
  color: var(--clr-primary-10);
  width: 20rem;
  grid-template-columns: repeat(4,1fr);
  justify-content: center;
}

.social-icon{
  font-size: 2rem;
  color: var(--clr-black-6);
  transition: var(--transition);
}

.social-icon:hover{
  color: var(--clr-primary-5);
}

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default SidebarStyled