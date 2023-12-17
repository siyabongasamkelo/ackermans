import styled from "styled-components";
export const Dropdown = styled.div`
  height: auto;
  .woman,
  .beauty,
  .baby {
    display: none;
    margin-top: -2%;
    div {
      width: 18%;
      margin: 50px 0 20px 0;
      ul {
        list-style: none;
        li {
          padding-top: 7px;
          margin-left: -15%;
        }
      }
    }
  }
  ${({ hover }) => hover} {
    display: flex;
  }
`;
