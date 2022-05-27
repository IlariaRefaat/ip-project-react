import { User } from "../models/User";
export const user1 = new User({
  id: "1",
  name: "Ilaria refaat",
  birthdate: "1999-05-16",
});
export const user2 = new User({
  id: "2",
  name: "Omar Lotfy",
  birthdate: "2000-04-10",
});
export const user3 = new User({
  id: "3",
  name: "Laila Mohammed",
  birthdate: "2000-06-11",
});
export const user4 = new User({
  id: "4",
  name: "Hana Yasser",
  birthdate: "1999-11-04",
});
export const users = [user1, user2, user3, user4];
