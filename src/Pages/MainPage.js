import styled from "styled-components";
import DebounceInput from "react-debounce-input";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainPage(){
    const [searchText, setSearchText] = useState("");
    const [showResult, setShowResult] = useState([]);
    const [selectedOption, setSelectedOption] = useState("Movie");

    function attemptToSearch(){
        if(searchText.length === 0){
            setShowResult([]);
            return
        }
        if(selectedOption === "Movie"){
            const req = axios.get(`https://swapi.dev/api/films/?search=${searchText}`)
            req.then(({data})=>{
                setShowResult(data.results);
            });
            req.catch(()=>{
                alert("Something went wrong, please try again!");
                return
            });
        }else if(selectedOption === "People"){
            const req = axios.get(`https://swapi.dev/api/people/?search=${searchText}`)
            req.then(({data})=>{
                setShowResult(data.results);
            });
            req.catch(()=>{
                alert("Something went wrong, please try again!");
                return
            });
        }
    }

    useEffect(()=>{
        attemptToSearch();
    },[selectedOption]) // eslint-disable-line
    
    return(
        <>
            <Main>
                <div>
                    <h1>Star Wars</h1>
                    <SearchArea>
                        <DebounceInput
                            type="text"
                            value={searchText}
                            debounceTimeout={0}
                            minLength={1}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                                attemptToSearch();
                            }}
                            placeholder="Search bar"
                        />
                        <select value={selectedOption} onChange={(e)=>setSelectedOption(e.currentTarget.value)}>
                            <option value="Movie">
                                Movie
                            </option>
                            <option value="People">
                                People
                            </option>
                        </select>
                    </SearchArea>
                    <Result showResult={showResult}>
                        {showResult.length ? (
                        showResult.map((r, i) => (
                            <EachResult key={i}>
                                {r.title || r.name}
                            </EachResult>
                        ))
                        ) : (
                            <></>
                        )}
                    </Result>
                </div>
            </Main>
        </>
    )
}

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 6rem;
        color: #fff;
        padding-bottom: 50px;
    }
    `

const SearchArea = styled.div`
    display: flex;
    input{
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
    button{
        width: 70px;
        height: 50px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        border-radius: 15px;
        border: none;
        outline: none;
        font-size: 1rem;
    }
    select{
        background-color: #fff;
        width: 70px;
        border: none;
        outline: none;
    }
`

const Result = styled.div`
    display: ${(props) => (props.showResult ? "flex" : "none")};
    flex-direction: column;
    width: 320px;
    background-color: #fff;
    gap: 10px;
    margin-left: 20px;
`

const EachResult = styled.p`
    font-size: 1rem;
`