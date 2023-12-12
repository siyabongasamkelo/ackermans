import { Dropdown } from "./DropDown.styled";

const DropDownBaby = () => {
  return (
    <Dropdown>
      <div className="baby justify-content-around">
        <div>
          <h5>NEWBORN</h5>
          <ul>
            <li>Babygrows</li>
            <li>Rompers</li>
            <li>Bottom & Leggings</li>
            <li>Baby Vests</li>
            <li>Sets</li>
            <li>Accessories</li>
            <li>Shoes</li>
          </ul>
        </div>
        <div>
          <h5>BOYS 3-36 MONTHS</h5>
          <ul>
            <li>Tops</li>
            <li>Bottoms & Jeans</li>
            <li>Jackets & Knitewear</li>
            <li>Tracksuits</li>
            <li>Sets</li>
            <li>Dungarees</li>
            <li>Accessories</li>
            <li>Shoes</li>
          </ul>
        </div>
        <div>
          <h5>GIRLS 3-36 MONTHS</h5>
          <ul>
            <li>Dresses & Dungarees</li>
            <li>Tops & T-Shirts</li>
            <li>Bottom & Jeans</li>
            <li>Jackets & Knitewear</li>
            <li>Tracksuits</li>
            <li>Sets</li>
            <li>Accessories</li>
            <li>Shoes</li>
          </ul>
        </div>
        <div>
          <h5>BABY ESSENTIALS</h5>
          <ul>
            <li>Baby Bedroom</li>
            <li>Baby Bathroom</li>
            <li>Nappies & Wipes</li>
            <li>Bags & Luggage</li>
            <li>Baby Toiletries</li>
            <li>Feeding & Accessories</li>
          </ul>
        </div>
        <div>
          <h5>Sale</h5>
          <ul>
            <li>LIMITED EDITION</li>
            <li>CHRISTMAS</li>
            <li>LILLY + SID</li>
            <li>TURTLEDOVE LONDON</li>
            <li>MY FIRST WARDROBE</li>
          </ul>
        </div>
      </div>
    </Dropdown>
  );
};

export default DropDownBaby;
