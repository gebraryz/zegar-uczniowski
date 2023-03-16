import axios from 'axios';
import type { GetServerSideProps } from 'next';
import SEO from '../../components/SEO';
import DefaultLayout from '../../components/Layout';
import PageTemplate from '../../components/templates/Page';
import Counter from '../../components/Counter';
import { WEBSITE_DATA } from '../../helpers/constants';

const EventPage = ({ data }): JSX.Element => (
  <>
    <SEO title={data.name} />
    <DefaultLayout>
      <PageTemplate type={data.name}>
        <Counter time={data.date} isDependent={data.isDependent} />
      </PageTemplate>
    </DefaultLayout>
  </>
);

export const getServerSideProps: GetServerSideProps = async ({
  query: { slug },
}) => {
  const { data } = await axios.get(
    `${WEBSITE_DATA.baseURL}/api/events/${slug}`
  );

  return !data
    ? { redirect: { permanent: false, destination: '/404' } }
    : { props: { data } };
};

export default EventPage;
