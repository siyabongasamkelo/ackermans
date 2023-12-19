import styled from "styled-components";
export const Dropdown = styled.div`
  height: auto;
  .woman,
  .beauty,
  .baby,
  .kids,
  .teens,
  .character,
  .homeware,
  .tech,
  .cellular {
    display: none;
    margin-top: -1%;
    margin-left: 1.5%;
    position: absolute;
    z-index: 2;
    background-color: white;
    width: 65%;
    @media only screen and (min-width: 992px) {
      width: 80%;
      margin-left: 3.5%;
    }
    @media only screen and (min-width: 1200px) {
      width: 65%;
      margin-left: 1.5%;
    }
  }
  ${({ hover }) => hover} {
    display: flex;
  }
`;
