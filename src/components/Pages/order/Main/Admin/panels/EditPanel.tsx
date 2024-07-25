// import React from 'react'
// import { theme } from "../../../../../theme";
import { FaHamburger } from 'react-icons/fa';
import styled from "styled-components"
import TextInput from '../../../../../reusables-ui/TextInput';


export default function EditPanel() {
  return (
    <EditPanelStyled>
        <TextInput
            placeholder="edit profil"
            value=""
            onChange={()=> {}}
            Icon={FaHamburger}
        />
        <button>Editer un produit du menu</button>
    </EditPanelStyled>
  )
}
const EditPanelStyled = styled.form`
  
`;
