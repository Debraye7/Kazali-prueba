import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: 0px 1px 8px 0px #000;
    padding: 1rem;
    z-index: 100;
`;
const Title = styled.h1`
    color: #49DAE3;
    margin-bottom: 1rem;
`;

const Header = () => {
    return (
        <Container>
            <Title>
                <Link to="/" style={{ color: '#49DAE3' }}>Lista de viviendas</Link>
            </Title>
            <Link to={"2"}>Texto</Link>
        </Container>
    );
};

export default Header;