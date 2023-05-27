import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@libs/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req;
  const header = req.headers.authorization;
  const token = req.headers.authorization?.split(' ')[1] || '';

  switch (method) {
    case 'GET':
      if (!query.id) {
        const { data } = await supabase.from('book_tags').select(`*`).order('id');
        res.status(200).json(data);
      } else {
        const { data: tags } = await supabase.from('book_tags').select(`*`).eq('id', query.id).order('id');
        const { data: quotes_tags } = await supabase
          .from('book_quotes_tags')
          .select(`*`)
          .eq('tag_id', query.id)
          .order('id');
        const { data: quotes } = await supabase.from('book_quotes').select(`*`).order('id');

        const quotes_by_tags = [];
        for (const tag of quotes_tags) {
          for (const quote of quotes) {
            if (tag.quote_id == quote.id) {
              quotes_by_tags.push({
                ...quote,
              });
            }
          }
        }
        // https://nextjs.org/docs/api-reference/next.config.js/headers#cache-control
        res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
        res.status(200).json({ ...tags[0], quotes_by_tags });
      }
      break;

    case 'POST':
      if (!body.name) {
        res.status(422).json({ error: 'Name required' });
      } else {
        const { error } = await supabase.from('book_tags').insert([
          {
            name: body.name,
            link: body.link,
          },
        ]);
        if (error) {
          res.status(422).json({ error: error.message });
        }
        res.status(200).json({ message: 'Success add tag' });
      }
      break;

    case 'PUT':
      if (!body.name) {
        res.status(422).json({ error: 'Name required' });
      } else {
        const { error } = await supabase
          .from('book_tags')
          .update({
            name: body.name,
            link: body.link,
          })
          .eq('id', body.id);
        if (error) {
          res.status(422).json({ error: error.message });
        }
        res.status(201).json({ message: 'Success update tag' });
      }
      break;

    case 'DELETE':
      if (!header) return res.status(401).json({ error: 'Please provide bearer token in headers' });
      const { data: session } = await supabase.from('book_sessions').select('*').eq('token', token).single();
      if (session) {
        if (!query.id) {
          res.status(422).json({ error: 'Id required' });
        } else {
          const { error } = await supabase.from('book_tags').delete().eq('id', query.id);
          if (error) {
            res.status(422).json({ error: error.message });
          }
          res.status(200).json({ message: 'Success delete tag' });
        }
      } else {
        res.status(401).json({ message: 'Token invalid' });
      }
      break;

    default:
      res.status(200).json('Method required');
      break;
  }
}
