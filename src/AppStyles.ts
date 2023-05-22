import styled from "styled-components";

export const StyleAPP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    background: #343a40;
    color: #fff;

    .DivHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;

      .ImgLogo {
        height: 80px;
        width: 80px;
      }

      .BtnBegin {
        padding: 8px 12px;
        border: none;
        background: #212529;
        color: #fff;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: #495057;
        }
      }
    }
  }

  .secBarca {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;

    .divForm {
      flex-grow: 1;
      flex-basis: 320px;
      padding: 20px;
    }

    .divList {
      flex-grow: 1;
      flex-basis: 320px;
      background: #f8f9fa;
      border-radius: 4px;
      padding: 20px;
      margin-top: 20px;
      min-height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &.emptyList {
        min-height: initial;
      }

      .DivBtnsFilters {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
      }
    }
  }
`;

export const BtnsFilter = styled.button<{ active: boolean }>`
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  background-color: ${(props) => (props.active ? "#03D99B" : "#03A1FC")};
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #343a40;
  }
`;

