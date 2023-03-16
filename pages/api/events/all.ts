import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllEvents } from '../../../helpers/functions/getAllEvents';

const allEvents = (request: NextApiRequest, response: NextApiResponse) => {
  const allEvents = !request.query.limit
    ? getAllEvents()
    : getAllEvents().slice(0, Number(request.query.limit));

  return response.send(allEvents);
};

export default allEvents;
