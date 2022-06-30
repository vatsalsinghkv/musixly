import { Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    marginBottom: 50,
  },
  btn: {
    width: 150,
    maxWidth: '30%',
  },
});

type formProps = {
  onSubmit: (song: string) => void;
};

const SongForm = ({ onSubmit }: formProps) => {
  const classes = useStyles();
  const [song, setSong] = useState('');
  const [error, setError] = useState(false);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (song.trim() === '') {
      setError(true);
      return;
    }

    onSubmit(song);
    setSong('');
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (error && value.trim()) setError(false);
    setSong(value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler} autoComplete="off">
      <TextField
        value={song}
        onChange={changeHandler}
        placeholder="Enter a song"
        variant="outlined"
        fullWidth
        error={error}
        style={{ marginRight: '1rem' }}
      />
      <Button type="submit" variant="contained" className={classes.btn}>
        Search
      </Button>
    </form>
  );
};

export default SongForm;
