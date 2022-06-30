import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Song } from '../../type';
import './index.scss';

const SongItem = ({ title, subtitle, image, id }: Song) => {
  return (
    <li className="song">
      <Link to={id} className="song__item">
        <div className="song__item--left">
          <img src={image} alt={title} className="song__img" />
        </div>
        <div className="song__item--right">
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="body2" component="cite">
            {subtitle}
          </Typography>
        </div>
      </Link>
    </li>
  );
};

export default SongItem;
