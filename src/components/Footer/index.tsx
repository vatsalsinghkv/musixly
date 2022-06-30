import { memo } from 'react';
import './index.scss';

const Footer = ({
  name = 'Vatsal Singh',
  github = 'https://github.com/vatsalsinghkv',
}) => {
  return (
    <footer className="footer">
      {'created by '}
      <a className="name" href={github} target="_blank" rel="noreferrer">
        {name}
      </a>
    </footer>
  );
};

export default memo(Footer);
