import { NavBarButtonType } from "../types";
import { ButtonTitles } from "./buttonTitles";
import { ComponentIds } from "./ids";

export const ListOfButtons: NavBarButtonType[] = [{
  id: 0,
  name: ButtonTitles.SERVICES,
  componentId: ComponentIds.SERVICES
}, {
  id: 1,
  name: ButtonTitles.STUDY,
  componentId: ''
}, {
  id: 2,
  name: ButtonTitles.PROCESS,
  componentId: ''
}, {
  id: 3,
  name: ButtonTitles.TEAM,
  componentId: ''
}, {
  id: 4,
  name: ButtonTitles.CONTACT,
  componentId: ''
}, {
  id: 5,
  name: ButtonTitles.REQUEST_QOUTE,
  componentId: ''
}];