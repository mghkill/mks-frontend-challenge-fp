import styled from "styled-components";
import { Grid } from "@mui/material";

export const StyledContainer = styled(Grid)`
  background-color: #0f52ba !important;
  color: #ffffff;
  height: 101px;
  padding: 0 64px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    z-index: 2;
    height: 48px;
    padding: 0 18px;
  }
`;

export const LogoContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

export const SystemsTypography = styled.div`
  font-family: "Montserrat", sans-serif ;
  font-size: 16px ;
  font-weight: 300 ;
  line-height: 19px ;
  text-align: left;
  padding-left: 8px;
  padding-top: 6px;
`;

export const CartContainer = styled.div`
  font-family: "Montserrat", sans-serif !important;
  background-color: #ffffff;
  color: black;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 5px;
  width: 90px;
  border-radius: 8px;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    height: 24px !important;
    padding: 2px;
    font-size: 12px !important;
  }
`;
