import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllEvents } from '../../../helpers/functions/getAllEvents';

const slugEvent = (request: NextApiRequest, response: NextApiResponse) => {
  const specificEvent = getAllEvents().find(
    ({ slug }) => slug === request.query.slug
  );

  return response.send(specificEvent);
};

export default slugEvent;
