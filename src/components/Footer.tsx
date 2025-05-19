import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 4,
      textAlign: 'center',
      bgcolor: '#3c3c3b',
      color: '#fff',
      mt: 10,
    }}
  >
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} Grupo Milkasa. Todos los derechos reservados.
    </Typography>
  </Box>
);

export default Footer;
