import { Typography } from '@mui/material';
import { memo } from 'react';
import { Link } from 'react-router-dom';

type propsType = {
  children: string | React.ReactNode;
};

const Title = ({ children }: propsType) => {
  return (
    <Typography
      variant="h2"
      textAlign="center"
      marginTop="40px"
      marginBottom="30px"
    >
      <Link to="/">{children}</Link>
    </Typography>
  );
};

export default memo(Title);
