import axios from '../axios';
import { useCallback, useState } from 'react';
import { ErrorType, FetchState, RawSongDetails, SongDetails } from '../type';
import requests from '../request';

type Return = {
  song: SongDetails;
  fetchState: FetchState;
  error: ErrorType;
  fetchSong: (songId: string) => {};
};

const useGetSong = (): Return => {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [song, setSong] = useState<SongDetails>({} as SongDetails);
  const [error, setError] = useState<ErrorType>(null);

  const fetchSong = useCallback(async (songId: string) => {
    setFetchState(FetchState.LOADING);

    try {
      const res = await axios.get(requests.getSongDetailsURL(songId));
      const data: RawSongDetails = res.data;

      const refinedData: SongDetails = {
        id: data.key,
        title: data.title,
        subtitle: data.subtitle,
        image: data.images.coverart,
        lyrics: data.sections.find(section => section.type === 'LYRICS')
          ?.text ?? ["Sorry! Couldn't find the lyrics"],
      };

      setSong(refinedData);
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
      console.log(err);
      let message = 'Something went wrong...';
      if (err instanceof Error) {
        message = err.message;
      }
      setError({ message });
    }
  }, []);

  return { fetchState, song, error, fetchSong };
};

export default useGetSong;
