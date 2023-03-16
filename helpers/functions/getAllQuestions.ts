import fs from 'fs';

const getAllQuestions = () => {
  return fs
    .readdirSync('data/questions')
    .flatMap((filename) =>
      JSON.parse(fs.readFileSync(`data/questions/${filename}`).toString())
    );
};

export { getAllQuestions };
