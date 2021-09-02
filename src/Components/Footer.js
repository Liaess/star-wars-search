import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Main>
      <Container>
        <h1>Talk to the creator</h1>
        <Redirects>
          <Link to="https://www.linkedin.com/in/yann-melo/" target="_blank">
            <FaLinkedin />
          </Link>
          <Link to="https://github.com/Liaess" target="_blank">
            <FaGithub />
          </Link>
        </Redirects>
      </Container>
    </Main>
  );
}

const Main = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #0D1117;
  -webkit-border-top-left-radius: 50px;
  -webkit-border-top-right-radius: 50px;
  -moz-border-radius-topleft: 50px;
  -moz-border-radius-topright: 50px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  h1 {
    font-size: 1.2rem;
    padding-bottom: 10px;
    padding-top: 4px;
  }
  svg {
    font-size: 40px;
  }
`;

const Redirects = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 200px;
`;
