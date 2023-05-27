import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@libs/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req;

  switch (method) {
    case 'GET':
      if (!query.id) {
        const { data } = await supabase.from('book_authors').select(`*`).order('id');
        res.status(200).json(data);
      } else {
        const { data }: any = await supabase
          .from('book_authors')
          .select(`*, book_quotes (*), book_books (*)`)
          .eq('id', query.id)
          .order('id');
        const { book_books, book_quotes } = data[0];
        delete data[0].book_books;
        delete data[0].book_quotes;
        const ready = {
          ...data[0],
          books: book_books,
          quotes: book_quotes,
        };
        // https://nextjs.org/docs/api-reference/next.config.js/headers#cache-control
        res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
        // res.status(200).json(data[0]);
        res.status(200).json(ready);
      }
      break;

    case 'POST':
      if (!body.name) {
        res.status(422).json({ error: 'Name required' });
      } else {
        const { error } = await supabase.from('book_authors').insert([
          {
            name: body.name,
            link: body.link,
            image: body.image,
            born: body.born,
            web: body.web,
            bio: body.bio,
          },
        ]);
        if (error) {
          res.status(422).json({ error: error.message });
        }
        res.status(200).json({ message: 'Success add author' });
      }
      break;

    case 'PUT':
      if (!body.name) {
        res.status(422).json({ error: 'Name required' });
      } else {
        const { error } = await supabase
          .from('book_authors')
          .update({
            name: body.name,
            link: body.link,
            image: body.image,
            born: body.born,
            web: body.web,
            bio: body.bio,
          })
          .eq('id', body.id);
        if (error) {
          res.status(422).json({ error: error.message });
        }
        res.status(201).json({ message: 'Success update author' });
      }
      break;

    case 'DELETE':
      if (!query.id) {
        res.status(422).json({ error: 'Id required' });
      } else {
        const { error } = await supabase.from('book_authors').delete().eq('id', query.id);
        if (error) {
          res.status(422).json({ error: error.message });
        }
        res.status(200).json({ message: 'Success delete author' });
      }
      break;

    default:
      res.status(200).json('Method required');
      break;
  }
}