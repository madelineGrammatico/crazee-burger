import { PropsImagePreviewType } from "../../../../../../lib/types";
import { theme } from "../../../../../../theme";
import styled from "styled-components"


export default function ImagePreview({title, imageSource}: PropsImagePreviewType) {
  return (
    <ImagePreviewStyled>
    { imageSource ? 
      <img src={imageSource} 
        alt={title ? title : imageSource}/> 
    : 
      <div className="imagePreview-fail">
          <span>aucune image</span>
        </div>
    }
   </ImagePreviewStyled>
  )
}
const  ImagePreviewStyled= styled.div`
    width: 215px;
    height: 120px;
    display: flex;
    justify-content: end;
    align-items: center;
    grid-area: 1 / 1 / 1 / 2;

    img {
        display: flex;
        justify-content: end;
        align-items: center;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .imagePreview-fail{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.greyLight};
        border: 1px solid ${theme.colors.greyLight};
    }

`;