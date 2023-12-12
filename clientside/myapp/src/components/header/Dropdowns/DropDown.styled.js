import styled from "styled-components";
export const Dropdown = styled.div`
  height: auto;
  .woman,
  .beauty,
  .baby {
    display: none;
    div {
      width: 18%;
      height: 100px;
      margin: 20px 0 20px 0;
    }
  }
  /* ${({ hover }) => hover} */
  ${({ hover }) => hover} {
    display: flex;
  }
`;
