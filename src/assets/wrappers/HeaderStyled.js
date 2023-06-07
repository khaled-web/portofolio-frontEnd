import styled from 'styled-components'

const HeaderStyled = styled.header `
 background-color: var(--clr-primary-10);
 padding-bottom: 5rem;
.hero{
 z-index: -1;
}

 
.hero .underline{
  margin-bottom: 0.5rem;
  margin-left: 0;
}


.hero-center{
  min-height: calc(100vh-5rem);
  display: grid;
  place-items: center;
  
}

.hero-info h4{
  color: var(--clr-grey-5);
}

.hero-icons{
  justify-items: start;
}

.hero-btn{
  margin-top: 1.2rem;
}

.hero-img{
  display: none;
}

@media screen and (min-width: 992px){
  .hero-img{
    display: block;
    position: relative;
  }

  .hero-center{
    grid-template-columns: 1fr 1fr;
  }

  .hero-photo{
    max-width: 25rem;
    max-height: 35rem;
    object-fit: cover;
    border-radius: var(--radius);
    position: relative;
  }

  .hero-img::before{
    content: "";
    width: 100%;
    height: 100%;
    border: 0.25rem solid var(--clr-primary-5);
    position: absolute;
    top: 2rem;
    right: -2rem;
    border-radius: var(--radius);
  }
}


.social-icons{
  display: grid;
  margin-top: 2rem;
  color: var(--clr-primary-10);
  width: 15rem;
  grid-template-columns: repeat(4,1fr);
  justify-content: center;
}

.social-icon{
  font-size: 1.5rem;
  color: var(--clr-black-6);
  transition: var(--transition);
}

.social-icon:hover{
  color: var(--clr-primary-5);
}
`

export default HeaderStyled