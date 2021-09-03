import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadingGif from "../../assets/loading.gif";
import { LoadingContainer, Loader, Main, Container } from "./MoviePageWrapper";

export default function MoviePage() {
  const { id } = useParams();
  const [informations, setInformations] = useState(false);
  const [charactersResult, setCharacterResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const req = axios.get(`https://swapi.dev/api/films/${id}`);
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
    for (let i = 0; i < 3; i++) {
      const req = await axios.get(`${informations.characters[i]}`);
      resultArray = [...resultArray, req.data];
    }
    setCharacterResult(resultArray);
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
        <span>{informations.title}</span>
        <p>{informations.opening_crawl}</p>
        <p>Director: {informations.director}</p>
        <p>Producer: {informations.producer}</p>
        {charactersResult.length >= 3 ? (
          charactersResult.map((c, i) => (
            <p key={i}>
              Character {i + 1}: {c.name}
            </p>
          ))
        ) : (
          <></>
        )}
      </Container>
    </Main>
  );
}
