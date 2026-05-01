import CardK from "@/lib/components/cards/card";
import { DreamworksKPI } from "./kpi_data_dreamworks";
const Lego = () => {
  return (
    <div>
      {DreamworksKPI.map((item, index) => (
        <CardK key={index} {...item} />
      ))}
    </div>
  );
};

export default Lego;
