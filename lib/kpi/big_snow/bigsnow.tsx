import CardK from "@/lib/components/cards/card";
import { BigSnowKPI } from "./kpi_data_bigsnow";

const Avenue = () => {
  return (
    <div>
      {BigSnowKPI.map((item, index) => (
        <CardK key={index} {...item} />
      ))}
    </div>
  );
};

export default Avenue;
