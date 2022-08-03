import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { publicRequest } from '../requestMethods';

import Header from '../components/Header';

const Main = styled.main`
    display: flex;
    flex-direction: column;
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
`;
const Info = styled.h5`
    font-size: 1.25rem;
    color: #49DAE3;
`;
const Text = styled.p`
    margin-left: 1rem;
`;

const Texto = () => {
    const [data, setData] = useState({});
    useEffect(()=>{
        async function getText(){
            try {
                const res = await publicRequest.get(`/2`);
                if (res.status === 200) {
                    setData(res.data);
                };
            } catch (err) {
                console.error("Error en la petición");
            };
        };
        getText();
    });
    return (
        <Main>
            <Header/>
            <Container>
                <Info>Valor:</Info>
                <Text>{data.valor}</Text>
            </Container>
            <Container>
                <Info>Invertido:</Info>
                <Text>{data.reverso}</Text>
            </Container>
            <Container>
                <Info>Tamaño:</Info>
                <Text>{data.tamaño}</Text>
            </Container>
        </Main>
    )
}

export default Texto