// REACT
import { useState } from "react";
// COMPONENTS
import OffersHeader from "./../OffersHeader/OffersHeader";
import OffersOptions from "./../OffersOptions/OffersOptions";

export const wkType = {
  PRO: "PRO",
  B2B: "B2B",
};

const OffersCards = () => {
  // REACT STATE
  const [type, setType] = useState(wkType.PRO);

  return (
    <div>
      <OffersHeader type={type} setType={setType} />
      <OffersOptions type={type} />
    </div>
  );
};

export default OffersCards;
