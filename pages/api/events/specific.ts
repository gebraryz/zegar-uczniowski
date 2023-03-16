import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllEvents } from '../../../helpers/functions/getAllEvents';

const specificEvent = (request: NextApiRequest, response: NextApiResponse) => {
  const allEvents = getAllEvents().map((data) =>
    request.query.type === 'name'
      ? { slug: data.slug, name: data.name }
      : data[String(request.query.type)]
  );

  return response.send(allEvents);
};

export default specificEvent;
