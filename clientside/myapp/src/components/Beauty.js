import { CaretRightFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Beauty = () => {
  const showBeauty = useSelector((state) => state.header.value.showBeauty);

  const beauty = [
    "View all in Beauty",
    "Makeup",
    "Bath & Body",
    "Skincare",
    "Oral Care",
    "Fragrance",
    "Brands",
  ];

  return (
    <>
      {showBeauty
        ? beauty.map((beauty) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {beauty} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Beauty;
