import main from '../assets/images/main.svg';
import styled from 'styled-components';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            magnam reiciendis qui vero iste aperiam illum voluptatibus accusamus
            perferendis delectus iure laudantium est non nesciunt expedita
            voluptatem? Officia aspernatur veritatis fugiat quaerat, ab
            laboriosam mollitia ipsum, ratione illum doloribus maxime molestias!
            Obcaecati quis temporibus nobis nulla perferendis reprehenderit
            exercitationem deserunt.
          </p>
          <Link to="/register">
            <button className="btn btn-hero">Login/Register</button>
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
