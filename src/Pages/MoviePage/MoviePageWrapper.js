import styled from "styled-components";

export const LoadingContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`;

export const Main = styled.div`
  color: #ffbe00;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  perspective: 500px;
  perspective-origin: bottom;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  transform: scaleY(0.9);
  font-size: 2.7rem;
  @media (max-width: 1000px) {
    font-size: 2rem;
    overflow: visible;
  }
`;

export const Container = styled.div`
  position: absolute;
  text-align: center;
  top: 0;
  left: 13%;
  right: 13%;
  animation: play 50s;
  p {
    padding-bottom: 15px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    font-weight: bold;
  }
  @keyframes play {
    0% {
      transform: rotateX(10deg) translate3d(0, 50rem, 0);
    }
    25% {
      transform: rotateX(10deg) translate3d(0, 0rem, 0);
    }
    85% {
      opacity: 1;
    }
  }
`;
