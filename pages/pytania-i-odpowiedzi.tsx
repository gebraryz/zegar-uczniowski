import axios from 'axios';
import type { GetServerSideProps } from 'next';
import DefaultLayout from '../components/Layout';
import PageTemplate from '../components/templates/Page';
import QAA from '../components/QAA';
import SEO from '../components/SEO';
import { WEBSITE_DATA } from '../helpers/constants';
import type { API } from '../types/API';

const QuestionsAndAnswersPage = ({ data }): JSX.Element => (
  <>
    <SEO
      title="Pytania i odpowiedzi"
      description="Zestawienie pytań oraz odpowiedzi."
    />
    <DefaultLayout>
      <PageTemplate type="Pytania i odpowiedzi">
        <QAA data={data} />
      </PageTemplate>
    </DefaultLayout>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const type: API['questions']['types'] = 'all';
  const { baseURL } = WEBSITE_DATA;

  const { data } = await axios.get(`${baseURL}/api/questions/${type}`);

  return {
    props: { data },
  };
};

export default QuestionsAndAnswersPage;
