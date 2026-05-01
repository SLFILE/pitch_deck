import CardK from "@/lib/components/cards/card";
import { AvenueKPI } from "./kpi_data_avenue";
const Avenue = () => {
  return (
    <div>
      {AvenueKPI.map((item, index) => (
        <CardK key={index} {...item} />
      ))}
    </div>
  );
};

export default Avenue;
