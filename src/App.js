import styled from "styled-components";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
    return (
        <Block>
            <Nav />
            <Main />
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export default App;
