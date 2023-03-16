import absoluteUrl from 'next-absolute-url';
import chromium from 'chrome-aws-lambda';
import type { NextApiRequest, NextApiResponse } from 'next';

const OGImageGenerator = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { origin } = absoluteUrl(request, 'localhost:8000');
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();

  await page.goto(`${origin}/layouts/${request.query.title}`);
  await page.setViewport({ width: 1200, height: 627 });
  const image = await page.screenshot();

  await browser.close();

  response.setHeader('Content-Type', 'image/jpg');
  response.setHeader(
    'Cache-Control',
    'public, immutable, no-transform, s-maxage=2592000, max-age=2592000'
  );

  response.send(image);
};

export default OGImageGenerator;
