const WEBSITE_DATA: {
  baseURL: string;
  title: string;
  description: string;
  routes: Record<string, `/${string}`>;
} = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000',
  title: 'Zegar uczniowski',
  description:
    'Odliczaj do istotnych dla polskich uczniów wydarzeń — szybko, prosto i wygodnie. ',
  routes: {
    home: '/',
    allEvents: '/wszystkie-wydarzenia',
    event: '/wydarzenie',
    QAA: '/pytania-i-odpowiedzi',
  },
};

const MESSAGES = {
  eventEnd: {
    dependent:
      'Obecne obliczanie dobiegło końca. Za niedługo zostanie ono wznowione.',
    notDependent:
      'Obecne obliczanie dobiegło końca. Odśwież stronę, ażeby wznowić odliczanie.',
  },
};

const FONT = 'Inter';
const FONT_FAMILIES = [
  FONT,
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  '"Open Sans"',
  '"Helvetica Neue"',
  'sans-serif',
].join(', ');

export { WEBSITE_DATA, MESSAGES, FONT, FONT_FAMILIES };
