import styled from 'styled-components';


export const FooterContainer = styled.footer`
    background-color: #000;
    padding: 10px 0;
    color: white;
    text-align: center;
    bottom: 0;
    width: 100%;
`; 


const Footer = () => {

    const anoAtual = new Date().getFullYear();

    return (
        <FooterContainer>
            <p>&copy; {anoAtual} - Todos os direitos reservados</p>
        </FooterContainer>
    );
};

export default Footer;
