import styled from 'styled-components'
import Profile from './Profile'
import ToggleButton from '../../../reusables-ui/ToggleButton';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { FaUserSecret } from 'react-icons/fa';
import { theme } from '../../../../theme';

export default function RightSideNav({userName} : {userName : string | undefined}) {
    const [isAdmin, setIsAdmin] = useState(false)
    const notify = async() => {
      !isAdmin ? toast.info("Mode admin activé", {
        icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }): null
      setIsAdmin(!isAdmin)
    }
    return (
    <RightSideNavStyled>
      <ToggleButton 
        isChecked={isAdmin} 
        onToggle={notify}
        labelIfChecked = "DEACTIVER LE MODE ADMIN"
        labelIfUnchecked = "ACTIVER LE MODE ADMIN"
      />
      <Profile userName= {userName}/>
      <ToastContainer/>
    </RightSideNavStyled>
      
        
  )
}
const RightSideNavStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap:50px;
  
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;