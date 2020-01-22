export class MenuItem {
  id: number;
  parent: string;
  childs: child[];
}

export class Child {
  id: number;
  item: string;
}
