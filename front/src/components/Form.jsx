import styled from 'styled-components';

const Formulario = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    background-color: #49DAE344;
`;
const FormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 1rem;
`;
const FormTitle = styled.h6`
    text-align: center;
    letter-spacing: .15rem;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    width: 100%;
    color: #49DAE3;
`;
const Container = styled.div`
    min-width: ${props=>props.size};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1rem;
`;
const Text = styled.p`
    margin-right: 1rem;
    color: #000a;
`;
const Input = styled.input`
    color: #49DAE3;
    width: 60%;
    background-color: transparent;
    border-radius: .25rem;
    border: .2rem solid transparent;
    border-bottom: .2rem solid #49DAE3;
    margin-bottom: 1rem;
    outline: none;
    transition: all .5s ease;
    &:hover{
        color: #fff;
        background-color: #49DAE3;
        border: .2rem solid #49DAE3;
    }
`;
const Select = styled.select`
    padding: 0 .5rem;
    color: #49DAE3;
    background-color: transparent;
    border-radius: .25rem;
    border: .2rem solid transparent;
    border-bottom: .2rem solid #49DAE3;
    outline: none;
    transition: all .5s ease;
    cursor: pointer;
    &:hover{
        color: #fff;
        background-color: #49DAE3;
        border: .2rem solid #49DAE3;
    }
`;
const Option = styled.option`

`;
const Button = styled.button`
    color: #fff;
    background-color: #49DAE3;
    border: .15rem solid #49DAE3;
    border-radius: .25rem;
    padding: .25rem 1rem;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
        background-color: #fff;
        color: #49DAE3;
    }
    margin-bottom: 1rem;
`;


const Form = ({ postData }) => {
    return (
        <Formulario onSubmit={postData}>
            <FormContainer>
                <FormTitle>Agregar Vivienda</FormTitle>
                <Container size={'40%'}>
                    <Text>Tipo:</Text>
                    <Input type="text" id='type'/>
                </Container>
                <Container size={'40%'}>
                    <Text>Tamaño:</Text>
                    <Select defaultValue={''} id="size">
                        <Option value={''} hidden>Seleccionar...</Option>
                        <Option value={'Grande'}>Grande</Option>
                        <Option value={'Pequeño'}>Pequeño</Option>
                    </Select>
                </Container>
                <Container size={'100%'}>
                    <Select defaultValue={'available'} id="availability">
                        <Option value={'available'}>Disponible</Option>
                        <Option value={'occupied'}>Ocupada</Option>
                    </Select>
                </Container>
            </FormContainer>
            <Button type="submit">Registrar</Button>
        </Formulario>
    )
}

export default Form