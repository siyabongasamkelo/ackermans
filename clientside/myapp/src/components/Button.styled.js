import styled from "styled-components";
export const Button = styled.div`
  height: 50px;
  /* width: ${({ width }) => width}; */
  /* margin-top: ${({ mt }) => mt}; */
  padding: 0 30px 0 30px;
  background-color: green;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: rgba(0, 128, 0, 0.9);
  }
`;
