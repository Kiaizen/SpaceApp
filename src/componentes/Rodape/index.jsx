import styled from "styled-components"
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

const FooterEstilizado = styled.footer`
    background-color: #04244F;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#fff;
    
    section{
        display: flex;
        justify-content: space-around;
        width: 162px;
        font-size: 35px;
        margin-left: 20px;
    }
    div{
        margin-right:20px;
        font-family:'Montserrat';
        font-weight: 500;
    }
`

const Rodape = () => {
    return(<FooterEstilizado>
        <section>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
        </section>
        <div>
            <h3>Desenvolvido por Alura.</h3>
        </div>
    </FooterEstilizado>)
}

export default Rodape