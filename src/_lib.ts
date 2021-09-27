import hash, { Translator } from 'short-uuid'; 

interface IShortenedUrl {
  originalUrl: string;
  shortenUrl: string;
  hash: string;
}

class CoreLibrary {
  private shortener: Translator;
  private urls: IShortenedUrl[];
  
  constructor() {
    this.shortener = hash();
    
    this.urls = [];
  }

  shortenUrl(url: string): string {
    const urlHash = this.shortener.new();

    const shortenUrl = `http://localhost:3333/${urlHash}`;

    console.log('shortened URL below');
    console.log(shortenUrl);

    const data: IShortenedUrl = { originalUrl: url, hash: String(hash), shortenUrl };

    this.urls.push(data);

    return shortenUrl;
  }

  findByHash(hash: string): IShortenedUrl | undefined {
    const shortened = this.urls.find(url => url.hash === hash);

    return shortened;
  }
}

const lib = new CoreLibrary();

export { lib }