import { CaretRightFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

const Womans = () => {
  // const [showWomans, setShowWomans] = useState(false);

  const showWomans = useSelector((state) => state.header.value.showWomans);
  // console.log(theCart);
  const woman = [
    "View all in Woman",
    "Sale",
    "Clothing",
    "Lingerie & Sleepwear",
    "Shoes",
    "Accessories",
    "ActiveWare",
    "Limited Edition",
    "The LIngerie Shop",
    "The Denim Shop",
    "Bra Guide",
    "Trnding",
    "Christmas",
    "Summer-Ware Capsule",
  ];

  return (
    <>
      {showWomans
        ? woman.map((woman) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {}}
              >
                {woman} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Womans;
