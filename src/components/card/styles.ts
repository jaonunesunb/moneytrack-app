import styled from "styled-components";

const StyledCard = styled.div`
  height: 87px;
  width: 100%;
  border-radius: 4px;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;

  .div1 {
    height: 80%;
    margin-left: 13px;
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
      height: 9.78px;
      width: 8.56px;
      border-radius: 0px;
    }
  }

  @media (min-width: 769px) {
    width: 400px;

    .maior {
      font-size: 18px;
    }

    .entradamenor {
      font-size: 14px;
    }

    .vlor {
      font-size: 14px;
    }

    img {
      height: 10px;
      width: 9px;
    }
  }
`;

export default StyledCard;
