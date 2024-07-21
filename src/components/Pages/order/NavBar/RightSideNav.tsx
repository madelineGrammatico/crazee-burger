import styled from 'styled-components'
import Profile from './Profile'
import ToggleButton from '../../../reusables-ui/ToggleButton';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

export default function RightSideNav({userName} : {userName : string | undefined}) {
    const [isAdmin, setIsAdmin] = useState(false)
    const notify = () => {
      setIsAdmin(!isAdmin)
      toast("whoooo!")
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
  
`;