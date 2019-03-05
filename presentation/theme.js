import theme from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/prism';
import prismJSON from 'react-syntax-highlighter/languages/prism/json';
import prismTypescript from 'react-syntax-highlighter/languages/prism/typescript';

export default {
  ...theme,
  prism: {
    style: okaidia,
    languages: {
      json: prismJSON,
      typescript: prismTypescript,
    }
  },
  h1: {
    'border-bottom': 'black solid 5px',
    'text-align': 'left',
    'text-transform': 'uppercase',
  },
  h2: {
    'text-align': 'left',
  },
  p: {
    'text-align': 'left',
  },
};
