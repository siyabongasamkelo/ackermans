import { Dropdown } from "./DropDown.styled";

const DropDownBeauty = () => {
  return (
    <Dropdown>
      <div className="beauty justify-content-around">
        <div>
          <h5>MAKEUP</h5>
          <ul>
            <li>Eyes</li>
            <li>Lips</li>
            <li>Face</li>
            <li>Cosmetic Accessories</li>
          </ul>
        </div>
        <div>
          <h5>BATH & BODY</h5>
          <ul>
            <li>Bath</li>
            <li>Toiletries</li>
            <li>Hair Care</li>
            <li>Bath & Body</li>
          </ul>
        </div>
        <div>
          <h5>SKIN CARE</h5>
          <ul>
            <li>Cleanser</li>
            <li>Moisturisor</li>
          </ul>
          <h5>ORAL CARE</h5>
          <ul>
            <li>Toothpaste</li>
            <li>Toothbrush</li>
          </ul>
        </div>
        <div>
          <h5>FRAGRANCE</h5>
          <ul>
            <li>Pocket Perfumes</li>
          </ul>
        </div>
        <div>
          <h5>Brands</h5>
          <ul>
            <li>Maybe Line</li>
            <li>Essence</li>
            <li>Be Fabulas</li>
          </ul>
        </div>
      </div>
    </Dropdown>
  );
};

export default DropDownBeauty;
