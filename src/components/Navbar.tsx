// 📁 src/components/Navbar.tsx
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static" sx={{ bgcolor: '#3c3c3b' }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box display="flex" alignItems="center">
        <img
          src="/logo-grupo-milkasa.png"
          alt="Grupo Milkasa"
          style={{ height: 50, marginRight: 12 }}
        />
        <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
          Grupo Milkasa
        </Typography>
      </Box>

      <Box>
        <Button color="inherit" component={RouterLink} to="/">Inicio</Button>
        {/* <Button color="inherit" component={RouterLink} to="/nosotros">Nosotros</Button> */}
        <Button color="inherit" component={RouterLink} to="/propiedades">Propiedades</Button>
        {/* <Button color="inherit" component={RouterLink} to="/servicios">Servicios</Button> */}
        {/* <Button color="inherit" component={RouterLink} to="/contacto">Contacto</Button> */}
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;