import DebounceInput from "react-debounce-input";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";
import { Main, SearchArea, Result, EachResult } from "./MainPageWrapper";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [searchText, setSearchText] = useState("");
  const [showResult, setShowResult] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Movie");

  function attemptToSearch() {
    if (searchText.length === 0) {
      setShowResult([]);
      return;
    }
    if (selectedOption === "Movie") {
      const req = axios.get(
        `https://swapi.dev/api/films/?search=${searchText}`
      );
      req.then(({ data }) => {
        setShowResult(data.results);
      });
      req.catch(() => {
        alert("Something went wrong, please try again!");
        return;
      });
    } else if (selectedOption === "People") {
      const req = axios.get(
        `https://swapi.dev/api/people/?search=${searchText}`
      );
      req.then(({ data }) => {
        setShowResult(data.results);
      });
      req.catch(() => {
        alert("Something went wrong, please try again!");
        return;
      });
    }
  }

  useEffect(() => {
    attemptToSearch();
  }, [selectedOption]); // eslint-disable-line

  return (
    <>
      <Main>
        <div>
          <img src={logo} alt="star-wars-logo" />
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
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.currentTarget.value)}
            >
              <option value="Movie">Movie</option>
              <option value="People">People</option>
            </select>
            <Result showResult={showResult}>
              {showResult.length ? (
                showResult.map((r, i) => (
                  <Link
                    to={
                      selectedOption === "People"
                        ? `/people/${r.url.slice(29)}`
                        : `/movie/${r.url.slice(28)}`
                    }
                  >
                    <EachResult key={i}>{r.title || r.name}</EachResult>
                  </Link>
                ))
              ) : (
                <></>
              )}
            </Result>
          </SearchArea>
        </div>
      </Main>
      <Footer />
    </>
  );
}
