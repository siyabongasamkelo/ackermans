import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  showMenu,
  closeAll,
  closeIts,
  showTech,
  showAudio,
  showPowerAndCharger,
  showTechAccessories,
} from "../../Features/HeaderLinks";
import styled from "styled-components";
import { tech } from "./MenuData";

export const Top = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 50px;
  svg {
    margin-right: 20px;
  }
  div {
    svg {
      margin-left: 20px;
    }
  }
`;

const Tech = () => {
  const dispatch = useDispatch();
  const showTechs = useSelector((state) => state.header.value.showTech);

  return (
    <>
      {showTechs ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Tech
          </div>
          <XLg
            onClick={() => {
              dispatch(closeAll());
            }}
          />
        </Top>
      ) : (
        ""
      )}
      {showTechs
        ? tech.map((tech) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (tech === "Audio") {
                    dispatch(showTech());
                    dispatch(showAudio());
                  }
                  if (tech === "Power Bank & Chargers") {
                    dispatch(showTech());
                    dispatch(showPowerAndCharger());
                  }
                  if (tech === "Accessories") {
                    dispatch(showTech());
                    dispatch(showTechAccessories());
                  }
                }}
              >
                {tech} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Tech;
