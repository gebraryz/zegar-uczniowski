import axios from 'axios';
import type { GetServerSideProps } from 'next';
import SEO from '../components/SEO';
import Search from '../components/Search';
import DefaultLayout from '../components/Layout';
import PageTemplate from '../components/templates/Page';
import { WEBSITE_DATA } from '../helpers/constants';
import type { API } from '../types/API';

const AllEventsPage = ({ data }): JSX.Element => (
  <>
    <SEO title="Wszystkie wydarzenia" />
    <DefaultLayout>
      <PageTemplate type="Wszystkie wydarzenia">
        <Search events={data} />
      </PageTemplate>
    </DefaultLayout>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const type: API['events']['types'] = 'name';
  const { baseURL } = WEBSITE_DATA;

  const { data } = await axios.get(
    `${baseURL}/api/events/specific?type=${type}`
  );

  return {
    props: { data },
  };
};

export default AllEventsPage;
