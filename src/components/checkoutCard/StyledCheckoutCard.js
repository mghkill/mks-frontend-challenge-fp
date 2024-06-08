import styled from "styled-components";

export const StyledCheckoutCardBox = styled.div`
  width: 90%;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  color: black;
  margin: 22px auto;
  border-radius: 8px;
  align-items: center;
  align-content: center;

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    width: 385px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .title,
    .description {
      text-align: left;
    }
  }
`;

export const ButtonAddRemove = styled.button`
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const CountSpan = styled.span`
  font-family: "Montserrat", sans-serif !important;
  font-size: 8px;
  font-weight: 400;
  line-height: 9.75px;
  text-align: left;
`;

export const NameStyle = styled.p`
  font-family: "Montserrat", sans-serif !important;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  margin: 0;
  margin-top: 6px;
  width: 118px;
  padding-left: 4px;
  margin-bottom: 5px;
`;

export const PriceTotal = styled.p`
  font-family: "Montserrat", sans-serif !important;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin-top: 4px;
  margin-bottom: 5px;
  white-space: nowrap
`;

export const BoxAddRemove = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  margin-right: 10px;
`;
