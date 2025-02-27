import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme.ts";
import GlobalStyles from "./styles/globalStyles";
import {
  Header,
  OuterContainer,
  Container,
  Nav,
} from "./components/components.ts";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <OuterContainer>
      <ThemeProvider theme={darkTheme}>
        <Header>
          <Container>
            <h2>
              Biz<br></br>Vibe
            </h2>
          </Container>
          <Container>
            <Nav>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </Nav>
          </Container>
          <Container>
            <SearchBar /> {/* Include the SearchBar component */}
          </Container>
        </Header>
        <GlobalStyles />
      </ThemeProvider>
    </OuterContainer>
  );
}

export default App;
