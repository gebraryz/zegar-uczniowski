const Favicons = (): JSX.Element => (
  <>
    {['16x16', '32x32'].map((size, index: number) => (
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/images/favicons/favicon-${size}.png`}
        key={index + 1}
      />
    ))}
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href={`/images/favicons/favicon.ico`}
    />
    <link
      rel="icon"
      type="image/x-icon"
      href={`/images/favicons/favicon.ico`}
    />
  </>
);
export default Favicons;
