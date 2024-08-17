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
  componentId: ComponentIds.STUDIES
}, {
  id: 2,
  name: ButtonTitles.PROCESS,
  componentId: ComponentIds.PROCESS
}, {
  id: 3,
  name: ButtonTitles.TEAM,
  componentId: ComponentIds.TEAM
}, {
  id: 4,
  name: ButtonTitles.CONTACT,
  componentId: ComponentIds.CONTACT
}, {
  id: 5,
  name: ButtonTitles.REQUEST_QOUTE,
  componentId: ''
}];