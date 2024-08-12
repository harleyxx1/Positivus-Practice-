import { IconButtonType } from "../enums";

export type NavBarButtonType = {
  id: number;
  name: string;
}

export type CompanyType = {
  id: number;
  source: string;
}

export type ServicesType = {
  id: number;
  icon: string;
  name: string;
  bgColor: string;
  textBgColor: string;
  textColor: string;
  iconHasBg: boolean;
  iconType: IconButtonType.DARK | IconButtonType.LIGHT
}