// import React from 'react'
import { theme } from "../../../../../../theme";
import styled from "styled-components"
import TextInput from '../../../../../reusables-ui/TextInput';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';

export default function AddPanel() {
  return (
    <AddPanelStyled>
      <img src="#"/>
      <form className="container-form">
        <TextInput
            placeholder="Nom du produit (ex: Super Burger)"
            value=""
            onChange={()=> {}}
            Icon={FaHamburger}
        /> 
        <TextInput
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            value=""
            onChange={()=> {}}
            Icon={BsFillCameraFill}
        /> 
        <TextInput
            placeholder="Prix"
            value=""
            onChange={()=> {}}
            Icon={MdOutlineEuro}
        /> 
        <button>Ajouter un nouveau produit au menu</button>
      </form>
    </AddPanelStyled>
  )
}
const AddPanelStyled = styled.div`
  width: 880px;
  display: grid;
  grid-template-columns: 215px 1fr;
  align-items: start;
  gap: 20px;
  img{
    border: 1px solid black;
    width: 215px;
    height: 120px;
  }
  .container-form {
    display: flex;
    flex-direction: column;
    gap: 8px;

    div {
    background-color: ${theme.colors.background_white};
    height:35px;
    padding: 0 16px 0 24px;
    margin:0;
      input{
        /* background-color: ${theme.colors.background_white};
         */
        background: hotpink;
      }
    }
    button {
      width: fit-content
    }
  }
  
`;
