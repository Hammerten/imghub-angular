export class Post {
  public title: string;
  public viewCount: number;
  public imagePath: string;

  constructor(title: string, viewCount: number, imagePath: string) {
    this.title = title;
    this.viewCount = viewCount;
    this.imagePath = imagePath;
  }
}
