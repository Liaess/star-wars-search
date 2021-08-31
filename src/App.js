import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import GlobalStyles from "./Styles/GlobalStyles";

function App() {

  return (
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={MainPage}/>
        </Switch>
      </BrowserRouter>
  )
}

export default App;