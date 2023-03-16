import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllQuestions } from '../../../helpers/functions/getAllQuestions';

const allEvents = (request: NextApiRequest, response: NextApiResponse) => {
  return response.send(getAllQuestions());
};

export default allEvents;
