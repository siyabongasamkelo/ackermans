import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "./DropDown.styled";
import { hover } from "../../../Features/DropDown";

const DropDownComp = ({ products }) => {
  const hovers = useSelector((state) => state.dropdown.value);
  const dispatch = useDispatch();

  return (
    <Dropdown
      hover={hovers}
      onMouseOver={() => {
        dispatch(hover(".kids"));
      }}
      onMouseLeave={() => {
        dispatch(hover(""));
      }}
    >
      <div className="beauty justify-content-around">
        <div>
          <h5>{products?.headers[0]}</h5>
          <ul>
            {products?.items1?.map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
        </div>
        <div>
          <h5>{products?.headers[1]}</h5>
          <ul>
            {products?.items2?.map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
        </div>
        <div>
          <h5>{products?.headers[2]}</h5>
          <ul>
            {products?.items3?.map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
          <h5>{products?.headers[3]}</h5>
          <ul>
            {products?.items4?.map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
        </div>
        <div>
          <h5>{products?.headers[4]}</h5>
          <ul>
            {products?.items5?.map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
        </div>
        <div>
          <h5>{products?.headers[5]}</h5>
          <ul>
            {products?.items6?.map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
        </div>
      </div>
    </Dropdown>
  );
};

export default DropDownComp;
