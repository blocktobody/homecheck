import type { NextApiRequest, NextApiResponse } from 'next';

import { CONTENT_TYPE, Data } from '../../types';

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { contentType = CONTENT_TYPE.DONGHENG } = query;

  const data = await import(`../../data/${contentType}.json`);

  res.status(200).json(data);
}
