import { CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { show, closeAll } from "../../Features/HeaderLink";

export const Top = styled.div`
  background-color: white;
  height: 50px;
  svg {
    margin-right: 20px;
    fill: black;
  }
  @media only screen and (min-width: 768px) {
    svg {
      margin-right: 80px;
    }
  }
`;
export const List = styled.div`
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  svg {
    margin-right: 30px;
  }
  @media only screen and (min-width: 768px) {
    svg {
      margin-right: 80px;
    }
  }
`;
export const Label = styled.label`
  margin-left: 30px;
`;
export const Title = styled.h3`
  color: green;
  font-size: 16px;
  margin-left: 30px;
`;

const HeaderMenuComp = ({ data, shows, title }) => {
  const dispatch = useDispatch();
  const showMenus = useSelector((state) => state.headers.value[shows]);

  return (
    <>
      {showMenus ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <Title>{title}</Title>
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
                <Label>{menu}</Label>
                <CaretRightFill style={{ fill: "black" }} />
              </List>
            );
          })
        : ""}
    </>
  );
};

export default HeaderMenuComp;
