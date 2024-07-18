import styled from "styled-components";
import burgerLogo from "/images/logo-orange.png"
import {theme} from "../../theme/index.ts"

export default function Logo({className}: {className?: string}) {
  return (
    <LogoStyled className={className}>
      <header>CRAZY <img src={burgerLogo}></img> BURGER</header>
    </LogoStyled>
  )
  
}
const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0 20px; */

  header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1rem;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive
  }
  
  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 ${theme.gridUnit /2}px;
  }
`;