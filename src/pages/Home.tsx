import SongForm from '../components/SongForm';
import SongsList from '../components/SongsList';
import Spinner from '../components/Spinner';
import useGetSongs from '../lib/api-songs';
import { FetchState } from '../type';

const Home = () => {
  const { songs, fetchState, error, fetchSongs } = useGetSongs();
  const submitHandler = async (song: string) => {
    fetchSongs(song);
  };

  return (
    <>
      <SongForm onSubmit={submitHandler} />
      {fetchState === FetchState.ERROR && <p>{error?.message}</p>}
      {fetchState === FetchState.LOADING && <Spinner />}
      {fetchState === FetchState.SUCCESS && <SongsList songs={songs} />}
    </>
  );
};

export default Home;
