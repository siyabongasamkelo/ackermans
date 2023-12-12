import { Dropdown } from "./DropDown.styled";

const DropDownWoman = () => {
  return (
    <Dropdown>
      <div className="woman justify-content-around">
        <div>
          <h5>CLOTHING</h5>
          <ul>
            <li>Tops</li>
            <li>T-Shirts</li>
            <li>Demin Jeans</li>
            <li>Pants</li>
            <li>Shorts</li>
            <li>Skirts</li>
            <li>Dresses & Jumpsuits</li>
          </ul>
        </div>
        <div>
          <h5>LINGERIE & SLEEPWEAR</h5>
          <ul>
            <li>Bras</li>
            <li>Panties</li>
            <li>Seamfree</li>
            <li>Shapeware</li>
            <li>Socks & Hosiery</li>
            <li>Lingrie Essentials</li>
            <li>Sleepwear</li>
            <li>Matching Sets</li>
          </ul>
        </div>
        <div>
          <h5>SHOES</h5>
          <ul>
            <li>Heels</li>
            <li>Pumps & Flats</li>
            <li>Sandals</li>
            <li>Sneakers & Trainers</li>
          </ul>
          <h5>ACCESSORIES</h5>
          <ul>
            <li>Bags & Wallets</li>
            <li>Headgear</li>
          </ul>
        </div>
        <div>
          <h5>ACTIVEWEAR</h5>
          <ul>
            <li>Tops</li>
            <li>Pants</li>
          </ul>
        </div>
        <div>
          <h5>Sale</h5>
          <ul>
            <li>LIMITED EDITION</li>
            <li>THE LINGERIE SHOP</li>
            <li>THE DEMIN SHOP</li>
            <li>TRENDING</li>
            <li>CHRISTMAS</li>
            <li>SUMMER-WARE CAPSULE</li>
          </ul>
        </div>
      </div>
    </Dropdown>
  );
};

export default DropDownWoman;
