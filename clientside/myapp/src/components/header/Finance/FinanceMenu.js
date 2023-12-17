import React from "react";
import HeaderMenuComp from "../HeaderMenuComp";
import { FinanctialSolutionss } from "../MenuData";

const FinanceMenu = () => {
  return (
    <>
      <HeaderMenuComp
        data={FinanctialSolutionss}
        title={"FINANCIAL SOLUTIONS"}
        shows={"showFinancial"}
      />
    </>
  );
};

export default FinanceMenu;
