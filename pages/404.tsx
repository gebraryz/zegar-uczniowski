import SEO from '../components/SEO';
import DefaultLayout from '../components/Layout';
import PageTemplate from '../components/templates/Page';
import Paragraph from '../components/Paragraph';

const NotFoundPage = (): JSX.Element => (
  <>
    <SEO title="Nie znaleziono strony" />
    <DefaultLayout>
      <PageTemplate type="Nie znaleziono strony">
        <Paragraph>
          Ta strona nie została znaleziona. Spróbuj ponownie.
        </Paragraph>
      </PageTemplate>
    </DefaultLayout>
  </>
);

export default NotFoundPage;
