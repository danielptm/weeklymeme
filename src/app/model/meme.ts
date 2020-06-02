export class Meme {

  id: string;
  userName: string;
  votes: number;
  image: string;

  constructor(id:string, userName: string, votes: number, image: string) {
    this.id = id;
    this.userName = userName;
    this.votes = votes;
    this.image = image;
  }
}
