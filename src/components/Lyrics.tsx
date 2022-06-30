import { Typography } from '@mui/material';
import { getId } from '../helper';
import { LyricsType } from '../type';

type propsType = { lyrics: LyricsType };

const Lyrics = ({ lyrics }: propsType) => {
  return (
    <main>
      {lyrics.map((line: string) => (
        <Typography
          key={getId()}
          variant="subtitle1"
          textAlign="center"
          component="p"
        >
          {line ? line : <br />}
        </Typography>
      ))}
    </main>
  );
};

export default Lyrics;
