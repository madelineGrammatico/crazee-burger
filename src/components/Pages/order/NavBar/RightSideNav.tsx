import styled from 'styled-components'
import Profile from './Profile'
import { useState } from 'react';
import ToggleButton from '../../../reusables-ui/ToggleButton';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { FaUserSecret } from 'react-icons/fa';
import ToastAdmin from './ToastAdmin';

export default function RightSideNav({userName} : {userName : string | undefined}) {
    const [isAdmin, setIsAdmin] = useState(false)
    const notify = () => {
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
      <ToastAdmin />
      <Profile userName= {userName}/>
    </RightSideNavStyled>
      
        
  )
}
const RightSideNavStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap:50px;
  
`;