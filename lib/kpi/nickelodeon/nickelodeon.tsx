import React from "react";
import { NickelodeonKPI } from "./kpi_data_nickelodeon";
import CardK from "@/lib/components/cards/card";
const Nickelodeon = () => {
  return (
    <div>
      {NickelodeonKPI.map((item, index) => (
        <CardK key={index} {...item} />
      ))}
    </div>
  );
};

export default Nickelodeon;
