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
                <CardTailwind />
                <CardTailwind primary fontSize="text-2xl"/>
                <CardTailwind />
                {/* <Card />
                <Card />
                <Card />
                <Card />
                <Card /> */}
            </CardList>
        </ThemeProvider>
    );
}

export default App;
