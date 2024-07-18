import styled from 'styled-components'
import Profile from './Profile'

export default function RightSideNav({userName}) {
    
    return (
    <RightSideNavStyled>
      {/* <div className='admin-button'>admin button</div> */}
      <Profile userName= {userName}/>
    </RightSideNavStyled>
      
        
  )
}
const RightSideNavStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  .admin-button {
  }
  
`;