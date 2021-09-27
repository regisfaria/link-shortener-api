import Router from 'express';

const routes = Router();

import { lib } from './_lib';

routes.post('/short', (req, res) => {
  console.log(req.body)
  
  const { url } = req.body;

  const shortenedLink = lib.shortenUrl(url);

  return res.json({ url: shortenedLink })
})  

routes.get('/:hash', (req, res) => {
  const { hash } = req.params;

  const url = lib.findByHash(hash);

  if (!url) {
    throw new Error('Given hash not found');
  }

  return res.send(301).redirect(url.originalUrl);
})

export { routes };