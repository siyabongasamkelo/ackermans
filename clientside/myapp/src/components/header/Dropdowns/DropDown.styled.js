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
  }
  ${({ hover }) => hover} {
    display: flex;
  }
`;
