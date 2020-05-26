export class Meme {
  userName: String;
  votes: number;
  image: string;

  constructor(userName: String, votes: number, image: string) {
    this.userName = userName;
    this.votes = votes;
    this.image = image;
  }
}
