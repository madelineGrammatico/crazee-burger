import styled from 'styled-components';
import LoginForm from "./LoginForm"
import Logo from '../../reusables-ui/Logo';
import image from "../../../assets/lumière.jpg"

export function LoginPage() {
    
    return <LoginPageStyled>
        <Logo/>
        <LoginForm/>
    </LoginPageStyled>
    
}
const LoginPageStyled = styled.div`
   background-color: hotpink;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   flex-wrap: wrap;

   ::before {
    content: "avant";
    background: ${image};
   }
`;