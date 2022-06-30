import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Lyrics from '../components/Lyrics';
import Spinner from '../components/Spinner';
import useGetSong from '../lib/api-song';
import { FetchState } from '../type';

const Song = () => {
  const { songId } = useParams();

  const { song, fetchState, error, fetchSong } = useGetSong();

  useEffect(() => {
    songId && fetchSong(songId);
  }, [songId, fetchSong]);

  return (
    <section>
      {fetchState === FetchState.ERROR && <p>{error?.message}</p>}
      {fetchState === FetchState.LOADING && <Spinner />}
      {fetchState === FetchState.SUCCESS && (
        <>
          <Typography
            variant="h5"
            textAlign="center"
            marginBottom="5px"
            color="primary"
          >
            {song?.title}
          </Typography>
          <Typography
            variant="subtitle2"
            textAlign="center"
            marginBottom="50px"
            fontSize="12px"
          >
            - {song?.subtitle}
          </Typography>
          <Lyrics lyrics={song.lyrics} />
        </>
      )}
    </section>
  );
};

export default Song;
