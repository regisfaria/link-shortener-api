# Link Shortener API

## Overview

This problem was proposed at one programming test I've took part. I was asked to build one API which reduces URLs and when accessed by that **shortened url**, it should redirect the user into the original URL.

## Installation & Running

Simply run:

```bash
> yarn or npm install
```

Then you can run the server with:

```bash
> yarn server or npm run server
```

Server will be listening into **http://localhost:3333**

+ **POST Route**: __{{ BASE_URL }}/short__
It expect to receive one __{ url: string }__ on the **request.body**.
It returns __{ url: string }__ on the **response.body**, which is the shortened URL.

+ **GET Route**: __{{ BASE_URL }}/:hash__
It will redirect you to the originalUrl through your shortened link.

+ The app have one **GET Route**: __{{ BASE_URL }}/shortened/all__
It will return one **array** with all shortened links.

**OBS:** The api only uses memory storage, so every shortened link will be lost on server reset.

## Contact

Email: **regisprogramming@gmail.com**

[LinkedIn](https://www.linkedin.com/in/regissfaria/) Profile

[GitHub](https://github.com/regisfaria) Profile

[GitLab](https://gitlab.com/regisfaria) Profile
