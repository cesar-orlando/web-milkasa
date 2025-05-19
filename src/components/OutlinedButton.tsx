import { Button } from '@mui/material';

const OutlinedButton = (props: any) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: '#ba923f',
        color: '#ba923f',
        fontWeight: 600,
        textTransform: 'none',
        px: 4,
        py: 1.5,
        borderRadius: 2,
        '&:hover': {
          bgcolor: '#ba923f',
          color: '#fff',
          borderColor: '#a77f30',
        },
        ...props.sx,
      }}
      {...props}
    />
  );
};

export default OutlinedButton;
