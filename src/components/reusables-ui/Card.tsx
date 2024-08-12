import styled, { css } from "styled-components"
import { theme } from "../../theme";
import Button from "./Button";
import { TiDelete } from "react-icons/ti";
import { DEFAULT_IMAGE } from "../../lib/constants";
import { CardType } from "../../lib/types";
import { CardStyledProps } from "../../lib/interfaces";


export default function Card({ 
    title, 
    imageSource, 
    leftDescription, 
    isButtonDelete, 
    onDelete, 
    onClick, 
    isHoverAble,
    isSelected,
    onAdd
  } : CardType) {
  const image = imageSource ? imageSource : DEFAULT_IMAGE

  return (
    <CardStyled className="produit" onClick={onClick} $isHoverAble={isHoverAble} $isSelected={isSelected}>
      <div className="card">
        {isButtonDelete && <button className="close" onClick={onDelete} aria-label="delete-button"><TiDelete/></button>}
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{leftDescription}</div>
            <div className="right-description">
              <Button 
                label={"Ajouter"} 
                className="Button--add"
                onClick={onAdd}/>
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div<CardStyledProps>`
  
  border-radius: ${theme.borderRadius.extraRound};
  height: 330px;

  .card {
    box-sizing: border-box;
    background: ${theme.colors.white};
    width: 240px;
    height: 330px;
    display: grid;
    grid-template-rows: 30px 50% 1fr;
    padding: 15px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};

    .close {
        grid-area: 1 / 1 / 2 / 2;
        justify-self: end;
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;

        svg {
        width: 30px;
        height:30px;
        color:  ${theme.colors.primary};
        transition: all 200ms ease-out;
        &:hover{
          color:  ${theme.colors.red};
          transition: all 200ms ease-out;
        }
        &:active{
          color:  ${theme.colors.primary};
        }
        &.is-disabled {
          opacity: 50%;
          cursor: not-allowed;

        }
      }
    
    }
    .image {
      width: 100%;
      height: auto;
      margin-top: 5px;
      margin-bottom: 20px;
      grid-area: 2/ 1 / 3/ 2;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      grid-area: 3 / 1 / 4 / 2;
      
      .title {
        margin: auto 5px;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: "Amatic SC", cursive;
        grid-area: 1 / 1 / 2 / 2;
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 10px;
        grid-area: 2 / 1 / 3 / 2;

        .left-description {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.fonts.weights.medium};
          color: ${theme.colors.primary};
          grid-area: 1 / 1 / 2 / 2;
        }

        .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};
          grid-area: 1 / 2 / 2 / 3;
        }
      }
    }
  }
  ${({$isHoverAble})=> $isHoverAble && hoverAbleStyle};
  ${({ $isHoverAble, $isSelected})=> $isHoverAble && $isSelected && selectedStyle};
`
const hoverAbleStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: ease-out 0.4s;
    box-shadow:  ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }
`
const selectedStyle = css`
  .card {
    background-color:  ${theme.colors.primary};
    .close svg{
      color:  ${theme.colors.white};
      :hover{
        color:  ${theme.colors.red};
      }
      :active{
        color:  ${theme.colors.white};
      }
    }

    .text-info {
      .description {
        .left-description {
            color:  ${theme.colors.white};
        }
      }
    }

    .Button--add {
      color:  ${theme.colors.primary};
      background-color:  ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;

      &:hover{
        color:  ${theme.colors.white};
        background-color:  ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
        transition: all 200ms ease-out;
      }
      &:active{
        color:  ${theme.colors.primary};
        background-color:  ${theme.colors.white};
        border:  ${theme.colors.white};
      }
      &.is-disabled {
        opacity: 50%;
        cursor: not-allowed;
      }
    }
  }
`