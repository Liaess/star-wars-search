import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:first-child{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  img {
    padding-bottom: 50px;
    padding-left: 10px;
    animation-name: fadeout;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    @keyframes fadeout {
      from {
        width: 0%;
      }
      to {
        width: 40%;
      }
    }
  }
`;

export const SearchArea = styled.div`
  display: flex;
  input {
    outline: none;
    width: 350px;
    height: 50px;
    border: none;
    text-align: center;
    font-size: 1rem;
    -webkit-border-top-left-radius: 30px;
    -webkit-border-bottom-left-radius: 30px;
    -moz-border-radius-topleft: 30px;
    -moz-border-radius-bottomleft: 30px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  select {
    background-color: #fff;
    width: 70px;
    border: none;
    outline: none;
  }
`;

export const Result = styled.div`
  display: ${(props) => (props.showResult ? "flex" : "none")};
  flex-direction: column;
  width: 320px;
  max-height: 150px;
  background-color: #fff;
  gap: 7px;
  margin-left: 20px;
  margin-top: 50px;
  position: absolute;
  overflow-y: auto;
  -webkit-border-bottom-right-radius: 5px;
  -webkit-border-bottom-left-radius: 5px;
  -moz-border-radius-bottomright: 5px;
  -moz-border-radius-bottomleft: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const EachResult = styled.p`
  font-size: 1rem;
  cursor: pointer;
`;
