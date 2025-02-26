import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme.ts';
import GlobalStyles from './styles/globalStyles';
import { Header, OuterContainer, Container, Nav } from './styles/components';

function App() {
    return (
      <OuterContainer>
        <ThemeProvider theme={darkTheme}>
          <Header>
        <h2>Biz<br></br>Vibe</h2>
        <Nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </Nav>
        </Header>
            <GlobalStyles />
            <Container>
                <h2>Welcome to the Dark Mode Site</h2>
            </Container>
        </ThemeProvider>
        </OuterContainer>
    );
}

export default App;