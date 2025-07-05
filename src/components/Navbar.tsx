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

      <Box display="flex" gap={1}>
        <Button 
          color="inherit" 
          component={RouterLink} 
          to="/"
          sx={{ 
            color: '#fff', 
            '&:hover': { color: '#ba923f' },
            fontWeight: 'bold' 
          }}
        >
          Inicio
        </Button>
        <Button 
          color="inherit" 
          component={RouterLink} 
          to="/propiedades"
          sx={{ 
            color: '#fff', 
            '&:hover': { color: '#ba923f' },
            fontWeight: 'bold' 
          }}
        >
          Propiedades
        </Button>
        <Button 
          color="inherit" 
          component={RouterLink} 
          to="/servicios"
          sx={{ 
            color: '#fff', 
            '&:hover': { color: '#ba923f' },
            fontWeight: 'bold' 
          }}
        >
          Servicios
        </Button>
        <Button 
          color="inherit" 
          component={RouterLink} 
          to="/nosotros"
          sx={{ 
            color: '#fff', 
            '&:hover': { color: '#ba923f' },
            fontWeight: 'bold' 
          }}
        >
          Conócenos
        </Button>
        <Button 
          color="inherit" 
          component={RouterLink} 
          to="/contacto"
          sx={{ 
            color: '#fff', 
            '&:hover': { color: '#ba923f' },
            fontWeight: 'bold' 
          }}
        >
          Contacto
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;