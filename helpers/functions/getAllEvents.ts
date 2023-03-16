import fs from 'fs';

const getAllEvents = () => {
  return fs
    .readdirSync('data/events')
    .flatMap((filename) =>
      JSON.parse(fs.readFileSync(`data/events/${filename}`).toString())
    )
    .map((data) => ({
      name: data.name,
      slug: data.slug,
      isDependent: data.isDependent,
      date:
        data.isDependent === false
          ? Date.now() -
              Date.parse(`${new Date().getFullYear()}/${data.date}`) <
            0
            ? Date.parse(`${new Date().getFullYear()}/${data.date}`)
            : Date.parse(`${new Date().getFullYear() + 1}/${data.date}`)
          : Date.parse(data.date),
    }));
};

export { getAllEvents };
