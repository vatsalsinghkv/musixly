import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { trimTo } from '../helper';
import { Song } from '../type';
import SongItem from './SongItem';

type propType = { songs: Song[] };

const useStyles = makeStyles({
  list: {
    listStyle: 'none',
  },
});

const SongList = ({ songs }: propType) => {
  const classes = useStyles();

  return (
    <Typography variant="body2" component="ul" className={classes.list}>
      {songs.map((song: Song) => (
        <SongItem
          key={song.id}
          id={song.id}
          title={trimTo(song.title, 25)}
          subtitle={song.subtitle}
          image={song.image}
        />
      ))}
    </Typography>
  );
};

export default SongList;
