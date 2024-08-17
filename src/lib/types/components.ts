import { IconButtonType } from "../enums";

export type NavBarButtonType = {
  id: number;
  name: string;
  componentId: string;
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
  iconType: IconButtonType.DARK | IconButtonType.LIGHT
}

export type CaseStudyType = {
  id: number;
  body: string;
}

export type WorkingProcessType = {
  id: number;
  title: string;
  body: string;
}

export type TeamMemberType = {
  id: number;
  image: string;
  name: string;
  position: string;
  description: string;
}