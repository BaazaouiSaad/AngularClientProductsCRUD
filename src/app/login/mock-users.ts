import { User } from "./user";

export const USERS: User[] = [
  {
    id: 11,
    firstName: "Saad",
    lastName: "Boubker",
    email: "boubker.saad@gmail.com",
    userName: "saadNash",
    password: "saadNash",
    isPublic: false,
    isAdmin: true
  },
  {
    id: 12,
    firstName: "Hamza",
    lastName: "Rachidi",
    email: "rachidi.hamza@gmail.com",
    userName: "hamzaToto",
    password: "hamzaToto",
    isPublic: true,
    isAdmin: false
  },
  {
    id: 13,
    firstName: "Zaid",
    lastName: "Kerouch",
    email: "kerouch.zaid@gmail.com",
    userName: "zaidNash",
    password: "zaidNash",
    isPublic: false,
    isAdmin: false
  }
];
