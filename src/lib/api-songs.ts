import axios from '../axios';
import { useCallback, useState } from 'react';
import { ErrorType, FetchState, RawSongs, Song } from '../type';
import requests from '../request';

type Return = {
  songs: Song[];
  fetchState: FetchState;
  error: ErrorType;
  fetchSongs: (song: string) => {};
};

const useGetSongs = (): Return => {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [songs, setSongs] = useState<Song[]>([]);
  const [error, setError] = useState<ErrorType>(null);

  const fetchSongs = useCallback(async (song: string) => {
    setFetchState(FetchState.LOADING);

    try {
      const res = await axios.get(requests.getSearchURL(song));
      const hits = res.data?.tracks?.hits;
      if (!hits) throw new Error("Sorry! Couldn't find the song!");

      const refinedData: Song[] = hits.map((hit: RawSongs) => ({
        id: hit.track.key,
        title: hit.track.title,
        subtitle: hit.track.subtitle,
        image: hit.track.images.coverart,
      }));

      setSongs(refinedData);
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
      console.error(err);
      let message = 'Something went wrong...';
      if (err instanceof Error) {
        message = err.message;
      }
      setError({ message });
    }
  }, []);

  return { fetchState, songs, error, fetchSongs };
};

export default useGetSongs;
