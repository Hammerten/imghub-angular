export class Post {
  public title: string;
  public view_count: number;
  public url: string;

  constructor(title: string, viewCount: number, imagePath: string) {
    this.title = title;
    this.view_count = viewCount;
    this.url = imagePath;
  }
}
