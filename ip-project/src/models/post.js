import { User } from "./User";
export class Post {
  constructor({ id, category, body, author, createdAt }) {
    this.id = id;
    this.category = category;
    this.body = body;
    this.author = author;
    this.createdAt = createdAt;
  }
}
