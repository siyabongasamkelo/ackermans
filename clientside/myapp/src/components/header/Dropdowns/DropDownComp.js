import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "./DropDown.styled";
import { hover } from "../../../Features/DropDown";
import styled from "styled-components";

export const Divs = styled.div`
  width: 18%;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  padding-top: 7px;
  margin-left: -15%;
  cursor: pointer;
  transition: 0.5 ease-in-out;
  &:hover {
    color: green;
  }
`;

const DropDownComp = ({ products, classNames, headers }) => {
  const hovers = useSelector((state) => state.dropdown.value);
  const dispatch = useDispatch();
  return (
    <Dropdown
      hover={hovers}
      onMouseOver={() => {
        dispatch(hover(`.${classNames}`));
      }}
      onMouseLeave={() => {
        dispatch(hover(""));
      }}
    >
      <div className={`${classNames} justify-content-around`}>
        <Divs>
          <h5>{headers[0]}</h5>
          <Ul>
            {products[0].map((items) => {
              return <Li>{items}</Li>;
            })}
          </Ul>
        </Divs>
        <Divs>
          <h5>{headers[1]}</h5>
          <Ul>
            {products[1].map((items) => {
              return <Li>{items}</Li>;
            })}
          </Ul>
        </Divs>
        <Divs>
          <h5>{headers[2]}</h5>
          <Ul>
            {products[2].map((items) => {
              return <Li>{items}</Li>;
            })}
          </Ul>
          <h5>{headers[3]}</h5>
          <Ul>
            {products[3].map((items) => {
              return <Li>{items}</Li>;
            })}
          </Ul>
        </Divs>
        <Divs>
          <h5>{headers[4]}</h5>
          <Ul>
            {products[4].map((items) => {
              return <Li>{items}</Li>;
            })}
          </Ul>
        </Divs>
        <Divs>
          <h5>{headers[5]}</h5>
          <Ul>
            {products[5].map((items) => {
              return <Li>{items}</Li>;
            })}
          </Ul>
        </Divs>
      </div>
    </Dropdown>
  );
};

export default DropDownComp;
