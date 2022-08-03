import styled from 'styled-components';
import { useState } from 'react';

import { publicRequest } from '../requestMethods';

import Form from '../components/Form';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Main = styled.main`
    display: flex;
    flex-direction: column;
`;
const Lista = styled.div`
    display: flex;
    flex-direction: column;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem 0;
    border-bottom: .15rem solid #49DAE3;
    width: 100%;
`;
const ItemTitle = styled.h6`
    margin-bottom: .75rem;
    font-size: 1.25rem;
    color: #49DAE3;
`;
const House = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;
const Text = styled.p`
`;

const Home = () => {
    const [resData, setResData] = useState(null);
    const [map, setMap] = useState([]);
    const postData = async (e)=>{
        e.preventDefault();
        const type = document.getElementById('type');
        const size = document.getElementById('size');
        const availability = document.getElementById('availability');
        try {
            const res = await publicRequest.post(`/1`, {
                type: type.value,
                size: size.value,
                availability: availability.value === 'available' ? true : false
            });
            if(res.status === 200){
                setResData(res.data);
                map.push(res.data);
                console.log(res.data)
            };
        } catch (err) {
            console.log('Error en la petición');
        }
    };
    const makeRandomId= (length) => {
        let id = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++ ) {
          id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return id;
    }
    return (
        <Main>
            <Header/>
            <Form postData={postData}/>
            <Lista>
                {map.map((item)=>{
                    return( 
                        <Container key={makeRandomId(10)}>
                            <ItemTitle>Vivienda {map.indexOf(item) + 1}</ItemTitle>
                            <House>
                            {item.type && 
                                <Text><strong>Tipo:</strong> {item.type}</Text>
                            }
                            {item.size && 
                                <Text><strong>Tamaño:</strong> {item.size}</Text>
                            }
                            {item.availability && 
                                <Text>Disponible</Text>
                            }
                            </House>
                        </Container>
                    )
                })}
            </Lista>
        </Main>
    )
}

export default Home