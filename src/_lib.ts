import hash, { Translator } from 'short-uuid'; 

interface IShortenedUrl {
  originalUrl: string;
  shortUrl: string;
  hash: string;
}

interface IShortUrl {
  url: string;
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

    const shortUrl = `http://localhost:3333/${urlHash}`;

    const data: IShortenedUrl = { originalUrl: url, hash: urlHash, shortUrl };
    this.urls.push(data);

    return shortUrl;
  }

  findByHash(hash: string): IShortenedUrl | undefined {
    const shortened = this.urls.find(url => url.hash === hash);

    return shortened;
  }

  findAllShortLinks(): IShortUrl[] {
    const urls = this.urls.map(url => ({ url: url.shortUrl }));

    return urls;
  }
}

const lib = new CoreLibrary();

export { lib }