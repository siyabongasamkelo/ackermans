import styled from "styled-components";

export const Options = styled.div`
  height: 400px;
  width: ${({ width }) => width};
  margin-top: ${({ mg }) => mg};
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    height: 260px;
    width: 100%;
    margin-top: 10px;
  }
  @media only screen and (min-width: 768px) {
    height: 260px;
    width: 100%;
    margin-top: 10px;
  }
  @media only screen and (min-width: 992px) {
    height: 400px;
    width: ${({ width }) => width};
  }
`;
