import styled from "styled-components";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export const StyledCard = styled(Card)`
  width: 218px;
  height: auto;
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px !important;
`;

export const StyledCardMedia = styled((props) => <CardMedia {...props} />)`
  width: 140px !important;
  margin: 2px auto;
`;

export const StyledTypographyName = styled(Typography)`
  font-family: "Montserrat", sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 19px !important;
  text-align: left !important;
  margin: 4px 0 !important;
  flex-grow: 1;
  margin-right: 8px !important;
  max-width: 124px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #2c2c2c;
  padding-left: 14px;
`;

export const StyledTypographyPrice = styled(Typography)`
  font-family: "Montserrat", sans-serif !important;
  font-size: 15px !important;
  font-weight: 700 !important;
  line-height: 15px !important;
  padding-right: 12px !important;
`;

export const StyledSpanPrice = styled(Typography)`
  font-family: "Montserrat", sans-serif !important;
  background-color: #373737;
  color: #ffffff;
  padding: 2px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const StyledTypographyDescription = styled(Typography)`
  font-family: "Montserrat", sans-serif !important;
  font-size: 10px !important;
  font-weight: 300 !important;
  line-height: 12px !important;
  text-align: left !important;
  margin: 4px 0 !important;
  max-width: 184px;
`;

export const StyledButton = styled(Button)`
  font-family: "Montserrat", sans-serif !important;
  width: 218px;
  height: 31.91px;
  margin-top: 8px !important;
  border-top-right-radius: 0 !important;
  border-top-left-radius: 0 !important;
  background-color: #0f52ba !important;
`;
