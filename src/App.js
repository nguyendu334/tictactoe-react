// import Card from './components/card/Card';
// import Game from './components/tictactoe/Game';
import CardList from './components/card/CardList';
import { ThemeProvider } from 'styled-components';
import CardTailwind from './components/card/CardTailwind';

const theme = {
    colors: {
        blue: '#2979ff',
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CardList>
                {/* <Card /> */}
                <CardTailwind src="https://cdn.dribbble.com/users/2400293/screenshots/19060197/media/82d672bd58929b313f4805df5e48d586.png?compress=1&resize=1000x750&vertical=top" />
                <CardTailwind
                    primary
                    fontSize=""
                    src="https://cdn.dribbble.com/users/2400293/screenshots/20103938/media/0c7fe9ed05047d96103a7ecca65415bc.png?compress=1&resize=1000x750&vertical=top"
                />
                <CardTailwind />
            </CardList>
        </ThemeProvider>
    );
}

export default App;
