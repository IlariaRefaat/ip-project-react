import { user1, user2, user3, User4 } from "./Users";
import { Post } from "../models/Post";
export const post1 = new Post({
  id: "1",
  category: "general",
  body: "John Christopher Depp II (born June 9, 1963) is an American actor, producer, musician and painter. He is the recipient of multiple accolades, including a Golden Globe Award and a Screen Actors Guild Award, in addition to nominations for three Academy Awards and two BAFTAs.",
  author: user1,
  createdAt: "1/5/2022",
});
export const post2 = new Post({
  id: "2",
  category: "projects",
  body: "EGYPT PROJECTS is the number one leading show in the building industry in Africa.  All the decision-makers meet the contractors to choose their partners and find products/services for the buildings of today & tomorrow.",
  author: user2,
  createdAt: "4/5/2021",
});
export const post3 = new Post({
  id: "3",
  category: "energy",
  body: "Egypt has been known to mainly depend, in all its energy-related activities, on three major sources: oil, natural gas and the hydroelectric power generated from the large dam projects over the Nile:",
  author: user1,
  createdAt: "1/12/2021",
});
export const post4 = new Post({
  id: "4",
  category: "cess",
  body: "JavaScript  often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.[11] Over 97% of websites use JavaScript on the client side for web page behavior,[12] often incorporating third-party libraries.[13] All major web browsers have a dedicated JavaScript engine to execute the code on users' devices",
  author: user3,
  createdAt: "3/4/2022",
});
export const posts = [post1, post2, post3, post4];
