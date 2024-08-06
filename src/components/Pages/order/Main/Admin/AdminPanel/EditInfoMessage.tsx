import styled from 'styled-components';
import { theme } from '../../../../../../theme';

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled >
            Cliquer sur un produit du menu pour le modifier 
            <span className="life-update">en temps réel</span>
    </EditInfoMessageStyled>
  )
}

const EditInfoMessageStyled = styled.span`
    padding: 15px 0 0 0;
    margin: 0;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.SM};
        .life-update{
            text-decoration: underline;
        }
    
`;