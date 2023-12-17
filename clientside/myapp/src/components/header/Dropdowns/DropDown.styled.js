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
    margin-top: -2%;
    div {
      width: 18%;
      margin: 50px 0 20px 0;
      ul {
        list-style: none;
        li {
          padding-top: 7px;
          margin-left: -15%;
          cursor: pointer;
          transition: 0.5 ease-in-out;
          &:hover {
            color: green;
          }
        }
      }
    }
  }
  ${({ hover }) => hover} {
    display: flex;
  }
`;
