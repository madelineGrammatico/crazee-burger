import styled from 'styled-components';
import LoginForm from "./LoginForm"
import Logo from '../../reusables-ui/Logo';
import image from "../../../assets/F03burger-background.jpg"

export function LoginPage() {
    
    return (
        <LoginPageStyled>
            <Logo className="login-logo"/>
            <LoginForm/>
        </LoginPageStyled>
    )
}
const LoginPageStyled = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   flex-wrap: wrap;

    &::before {
        content: "";
        background: url(${image}) rgba(0, 0, 0, 0.7);
        background-size: cover;
        background-position: center;
        background-blend-mode: darken;

        position: absolute;
        top: 0;
        left:0;
        right:0;
        bottom:0;
        z-index: -1;
    }
    .login-logo {
        transform: scale(2.5)
    }
`;