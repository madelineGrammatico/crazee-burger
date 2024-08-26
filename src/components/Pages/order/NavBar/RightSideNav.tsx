import styled from 'styled-components'
import Profile from './Profile'
import { useContext } from 'react';
import ToggleButton from '../../../reusables-ui/ToggleButton';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { IoMdInformationCircle } from "react-icons/io";
import ToastAdmin from './ToastAdmin';
import OrderContext from '../../../../context/OrderContext';

export default function RightSideNav() {
    const {isModeAdmin, setisModeAdmin} =useContext(OrderContext)

    const notify = () => {
      !isModeAdmin ? toast.info("Mode admin activé", {
        icon: <IoMdInformationCircle size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }): null
      setisModeAdmin(!isModeAdmin)
    }
    return (
    <RightSideNavStyled>
      <ToggleButton 
            isChecked={isModeAdmin} 
            onToggle={notify}
            labelIfChecked = "DEACTIVER LE MODE ADMIN"
            labelIfUnchecked = "ACTIVER LE MODE ADMIN"
        />
      <ToastAdmin />
      <Profile/>
    </RightSideNavStyled>
      
        
  )
}
const RightSideNavStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap:50px;
  
`;