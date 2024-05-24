import styled from "styled-components";
import burgerLogo from "/images/logo-orange.png"
export default function Logo() {
  return (
    <LogoStyled>
      <header>CRAZY <img src={burgerLogo}></img> BURGER</header>
    </LogoStyled>
  )
  
}
const LogoStyled = styled.div`
    display: flex;
    align-items: center;

    transform: scale(2.5);
    padding: 0 20px;
  header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: #ffa01b;
    font-size: 36px;
    line-height:1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing:1.5px;
    font-family: "Amatic SC", cursive
  }
  
  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`;