import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 400px;
    padding-bottom: 50px;
    padding-left: 10px;
  }
  @media (max-width: 600px){
    img{
      padding: 0px;
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
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    input{
      -webkit-border-radius: 50px;
      -moz-border-radius: 50px;
      border-radius: 50px;
    }
    select{
      width: 350px;
      margin-bottom: 70px;
    }
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
  margin-bottom: 5px;
  position: absolute;
  overflow-y: auto;
  -webkit-border-bottom-right-radius: 5px;
  -webkit-border-bottom-left-radius: 5px;
  -moz-border-radius-bottomright: 5px;
  -moz-border-radius-bottomleft: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  @media (max-width: 600px){
    margin: 0px;
  }
`;

export const EachResult = styled.p`
  font-size: 1rem;
  cursor: pointer;
`;
