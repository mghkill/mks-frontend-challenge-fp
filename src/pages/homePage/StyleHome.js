import styled from "styled-components";
import { Grid } from "@mui/material";

export const Container = styled(Grid)`
  overflow: hidden;
  width: 100vw;
`;

export const StyledHomeContainer = styled(Grid)`
  width: 90% !important;
  max-width: 938px;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  @media (max-width: 1200px) {
    max-width: 741px;
  }
    @media (max-width: 901px) {
    max-width: 508px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;  
  }

  @media (min-width: 601px) {
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;  

    & > * {
      flex: 1 1 calc(25% - 20px);  
      margin: 10px;  
    }
  }
`;

export const StyledHomeCard = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px auto !important;
`;
