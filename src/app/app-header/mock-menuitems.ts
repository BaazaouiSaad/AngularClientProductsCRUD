import { MenuItem } from "./menuItem";
import { Child } from "./menuItem";

export const CHILDMNGPRODUCT: Child[] = [
  {
    id: 11,
    item: "Add"
  },
  {
    id: 12,
    item: "Update"
  },
  {
    id: 13,
    item: "Delete"
  }
];

export const MENUITEMS: MenuItem[] = [
  {
    id: 11,
    parent: "Home",
    childs: null
  },

  {
    id: 12,
    parent: "Products",
    childs: null
  },

  {
    id: 13,
    parent: "Manage Products",
    childs: CHILDMNGPRODUCT
  },
  {
    id: 14,
    parent: "Login",
    childs: null
  }
];
