import styled from "styled-components";
import { Button as MuiButton } from "@material-ui/core";

export const StyledButton = styled(MuiButton)`
    &.MuiButton-root {
        height: 80px;
        width: 350px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        margin: auto;
        border-radius: 12px;
        background-color: #dceafd;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #435EBE;
        font-size: 1.2rem;
        font-family: Roboto-Black;
        text-transform: uppercase;
        letter-spacing: 1mm;


        &:hover {
            background-color: #4d97ff;
            color: #FFF;
        }
    }
`;