import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "./DropDown.styled";
import { hover } from "../../../Features/DropDown";

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
        <div>
          <h5>{headers[0]}</h5>
          <ul>
            {products[0].map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
        </div>
        <div>
          <h5>{headers[1]}</h5>
          <ul>
            {products[1].map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
        </div>
        <div>
          <h5>{headers[2]}</h5>
          <ul>
            {products[2].map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
          <h5>{headers[3]}</h5>
          <ul>
            {products[3].map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
        </div>
        <div>
          <h5>{headers[4]}</h5>
          <ul>
            {products[4].map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
        </div>
        <div>
          <h5>{headers[5]}</h5>
          <ul>
            {products[5].map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
        </div>
      </div>
    </Dropdown>
  );
};

export default DropDownComp;
