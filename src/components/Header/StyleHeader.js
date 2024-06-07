import styled from "styled-components";
import { Grid, Typography } from "@mui/material";

export const StyledContainer = styled(Grid)`
  background-color: #0f52ba !important;
  color: #ffffff;
  height: 101px;
  padding: 0 64px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  @media (max-width: 600px) {
    height: 48px;
    padding: 0 18px;
  }
`;

export const LogoContainer = styled(Typography)`
  font-family: "Montserrat", sans-serif !important;
  font-size: 40px !important;
  font-weight: 600 !important;
  line-height: 19px !important;
  text-align: left;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 32px !important;
  }
`;

export const SystemsTypography = styled(Typography)`
  font-family: "Montserrat", sans-serif !important;
  font-size: 16px !important;
  font-weight: 300 !important;
  line-height: 19px !important;
  text-align: left;
  padding-left: 8px;
  padding-top: 6px;
`;

export const CartContainer = styled.div`
  font-family: "Montserrat", sans-serif !important;
  background-color: #ffffff;
  color: black;
  display: flex;
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
