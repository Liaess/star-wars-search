import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadingGif from "../../assets/loading.gif";
import { LoadingContainer, Loader, Main, Container } from "./PeoplePageWrapper";

export default function PeoplePage() {
  const { id } = useParams();
  const [informations, setInformations] = useState(false);
  const [movieResult, setMovieResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const req = axios.get(`https://swapi.dev/api/people/${id}`);
    req.then(({ data }) => {
      setInformations(data);
    });
    req.catch(() => {
      alert("Something went wrong, please try again!");
      return;
    });
  }, [id]);

  useEffect(async () => {
    if (!informations) return;
    let resultArray = [];
    for (let i = 0; i < informations.films.length; i++) {
      const req = await axios.get(`${informations.films[i]}`);
      resultArray = [...resultArray, req.data];
    }
    setMovieResult(resultArray);
    setIsLoading(true);
  }, [informations]);

  if (!isLoading) {
    return (
      <LoadingContainer>
        <Loader src={loadingGif} />
      </LoadingContainer>
    );
  }

  return (
    <Main>
      <Container>
        <span>{informations.name}</span>
        <p>Gender: {informations.gender}</p>
        <p>Height: {informations.height}</p>
        <p>Mass: {informations.mass}</p>
        <p>Eye Color: {informations.eye_color}</p>
        <p>Hair Color: {informations.hair_color}</p>
        {movieResult.length ? (
          movieResult.map((m, i) => (
            <p key={i}>Movie: {m.title}</p>
          ))
        ) : (
          <></>
        )}
      </Container>
    </Main>
  );
}
