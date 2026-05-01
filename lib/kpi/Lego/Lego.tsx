import { LegoKPI } from "./kpi_data_lego";
import CardK from "@/lib/components/cards/card";
const Lego = () => {
  return (
    <div>
      {LegoKPI.map((item, index) => (
        <CardK key={index} {...item} />
      ))}
    </div>
  );
};

export default Lego;
