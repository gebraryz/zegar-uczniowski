import SEO from '../components/SEO';
import DefaultLayout from '../components/Layout';
import PageTemplate from '../components/templates/Page';
import Paragraph from '../components/Paragraph';

const ServerErrorPage = (): JSX.Element => (
  <>
    <SEO title="Wystąpił problem podczas pobierania danych" />
    <DefaultLayout>
      <PageTemplate type="Wystąpił problem podczas pobierania danych">
        <Paragraph>
          Podczas pobierania danych wystąpił problem, przez co nie możemy
          obecnie wyświetlić Ci niektórych danych.
        </Paragraph>
      </PageTemplate>
    </DefaultLayout>
  </>
);

export default ServerErrorPage;
