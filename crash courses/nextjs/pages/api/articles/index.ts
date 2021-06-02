import { articles } from '../../../data';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'; // for typescript

// define the res parameter as the return type
export default function handler(req: NextApiRequest, res: NextApiResponse<Article[]>) {
  res.status(200).json(articles);
}

// you can access this by going to http://localhost:3000/api/articles
