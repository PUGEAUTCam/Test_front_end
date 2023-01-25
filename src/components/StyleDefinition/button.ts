import styled from "styled-components";
import colors from "./colors";

interface ButtonProps {
    disabled?: boolean
}

export const Button = styled.button<ButtonProps>`
    background: ${colors.primary};
    border: 1px solid ${colors.primary};
    padding: 16px 24px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    margin: 34px 0px;
    opacity: ${props => props.disabled ? ".5" : "1"};
`
export const ButtonGroups = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

