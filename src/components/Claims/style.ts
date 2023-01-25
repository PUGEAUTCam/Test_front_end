import styled from "styled-components";
import colors from "../StyleDefinition/colors";

export const ContainerClaims = styled.div`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const ClaimSection = styled.section`
    border: 1px solid #00000054;
    border-radius: 10px;
    width: 248px;
    display: flex;
    flex-direction: column;
    align-items: center;
        h4{
            margin-bottom: 24px;
        }
        div{
            display: flex;
            align-items: center;
        }
        p{
            margin-left: 12px;
        }
`

export const LogoLabo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    object-fit: cover;
    border: 1px solid ${colors.primary}
`