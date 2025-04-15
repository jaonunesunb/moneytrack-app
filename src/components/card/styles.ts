import styled from "styled-components";

const StyledCard = styled.div`
  height: auto;
  width: 100%;
  border-radius: 4px;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  .div1 {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .maior {
      font-family: "Nunito";
      font-weight: 700;
      font-size: 18px;
      color: #212529;
    }

    .entradamenor {
      font-family: "Nunito";
      font-weight: 400;
      font-size: 14px;
      color: #343a40;
    }
  }

  .div2 {
    .vlor {
      font-family: "Nunito";
      font-weight: 400;
      font-size: 14px;
      color: #212529;
    }
  }

  .divIMGBTN {
    button {
      margin-top: 15px;
    }

    img {
      height: 10px;
      width: 10px;
      border-radius: 0px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 8px;
    .maior {
      font-size: 16px;
    }

    .entradamenor {
      font-size: 12px;
    }

    .vlor {
      font-size: 12px;
    }

    img {
      height: 8px;
      width: 8px;
    }
  }
`;

export default StyledCard;
