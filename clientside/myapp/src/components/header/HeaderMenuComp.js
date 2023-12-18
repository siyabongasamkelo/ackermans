import { CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { show, closeAll } from "../../Features/HeaderLink";

export const Top = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 50px;
  svg {
    margin-right: 20px;
    fill: black;
  }
`;
export const List = styled.div`
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 20px;
  svg {
    margin-right: 30px;
  }
`;

const HeaderMenuComp = ({ data, shows, title }) => {
  const dispatch = useDispatch();
  const showMenus = useSelector((state) => state.headers.value[shows]);

  return (
    <>
      {showMenus ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <h3>{title}</h3>
          <XLg
            onClick={() => {
              dispatch(closeAll());
            }}
          />
        </Top>
      ) : (
        ""
      )}
      {showMenus
        ? data?.map((menu) => {
            return (
              <List
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  dispatch(show(menu));
                }}
              >
                {menu} <CaretRightFill style={{ fill: "black" }} />
              </List>
            );
          })
        : ""}
    </>
  );
};

export default HeaderMenuComp;
