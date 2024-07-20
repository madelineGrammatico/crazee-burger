import styled from 'styled-components'
import Profile from './Profile'
import ToggleButton from '../../../reusables-ui/ToggleButton';
import { useState } from 'react';

export default function RightSideNav({userName} : {userName : string | undefined}) {
    const [isAdmin, setIsAdmin] = useState(false)
    return (
    <RightSideNavStyled>
      <ToggleButton 
        isChecked={isAdmin} 
        onToggle={()=> setIsAdmin(!isAdmin)}
        labelIfChecked = "DEACTIVER LE MODE ADMIN"
        labelIfUnchecked = "ACTIVER LE MODE ADMIN"
      />
      <Profile userName= {userName}/>
    </RightSideNavStyled>
      
        
  )
}
const RightSideNavStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap:50px;
  .admin-button {
  }
  
`;