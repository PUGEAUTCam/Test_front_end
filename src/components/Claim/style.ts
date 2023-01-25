import styled from "styled-components";
import colors from "../StyleDefinition/colors";

export const DivLabo = styled.div`
    display: flex;
    align-items: center;
        h3{
            margin-left: 20px;
        }  
`

export const ArticleMessage = styled.article`
    border-bottom: 1px solid #00000063;
    display: flex;
    align-items: center;
    padding: 20px 0px;
        p{
            color: ${colors.primary};
            font-weight: bold;
            margin-right: 10px;
        }
`