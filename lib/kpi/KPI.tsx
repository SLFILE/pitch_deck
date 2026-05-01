import { FeatureBlock, SeaLifeKPI } from "./sealife/kpi_data_sealife";
import { AvenueKPI } from "./avenue/kpi_data_avenue";
import { DreamworksKPI } from "./dreamworks/kpi_data_dreamworks";
import { LegoKPI } from "./Lego/kpi_data_lego";
import { NickelodeonKPI } from "./nickelodeon/kpi_data_nickelodeon";
import { BigSnowKPI } from "./big_snow/kpi_data_bigsnow";

export const KPI: Record<string, FeatureBlock[]> = {
  sealife: SeaLifeKPI,
  avenue: AvenueKPI,
  dream_works: DreamworksKPI,
  lego: LegoKPI,
  nickelodeon: NickelodeonKPI,
  big_snow: BigSnowKPI,
};

export const KPIOMap: Record<string, FeatureBlock[]> = {
  NicklodeonUniverse: KPI.nickelodeon,
  BighSnow: KPI.big_snow,
  DreamWorks001: KPI.dream_works,
  Avenu001: KPI.avenue,
  logo_1: KPI.avenue,
  logo_2: KPI.avenue,
  SeaLifeAquarium: KPI.sealife,
  Lego: KPI.lego,
  Curve004_4: KPI.lego,
  Scene: KPI.avenue,
};
