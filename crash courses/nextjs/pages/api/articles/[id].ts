import { articles } from '../../../data';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<Article | { message: string }>) {
  const id = req.query.id;
  const filtered = articles.filter((article: Article) => article.id.toString() === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Article with the id of ${id} is not found.` });
  }
}

// you can access this by going to http://localhost:3000/api/articles/1
