import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import MoviePage from "./Pages/MoviePage";
import PeoplePage from "./Pages/PeoplePage";
import GlobalStyles from "./Styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
      <Switch>
        <Route path="/movie/:id" exact component={MoviePage} />
      </Switch>
      <Switch>
        <Route path="/people/:id" exact component={PeoplePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
