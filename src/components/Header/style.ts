import styled from "styled-components";
import colors from "../StyleDefinition/colors";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 131px;
            :hover{
                transform: scale(1.04);
                transition: all 300ms ease;
            }
            :active{
                transform: scale(1.04);
                transition: all 300ms ease;
            }
    }

    ul{
        display: flex;
    }

    li{
        padding: 0px 41px;
    }
    li:hover{  
            color: ${colors.primary}
    }
    li:active{
        color: ${colors.primary}    
    }

`