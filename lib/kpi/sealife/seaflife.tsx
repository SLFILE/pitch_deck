import CardK from "@/lib/components/cards/card";
import { SeaLifeKPI } from "./kpi_data_sealife";
const Nickelodeon = () => {
  return (
    <div>
      {SeaLifeKPI.map((item, index) => (
        <CardK key={index} {...item} />
      ))}
    </div>
  );
};

export default Nickelodeon;
