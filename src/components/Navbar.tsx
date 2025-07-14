// 📁 src/components/Navbar.tsx
import { AppBar, Toolbar, Typography, Button, Box, Stack, Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const menu = [
  { label: 'Inicio', to: '/' },
  { label: 'Venta', to: '/venta' },
  { label: 'Renta', to: '/renta' },
  { label: 'Servicios', to: '/servicios' },
  // { label: 'Conócenos', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <Box>
      {/* Top bar con teléfono y selector de idioma */}
      <Box sx={{ bgcolor: '#111', color: '#fff', px: 4, py: 0.5, fontSize: 15, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderBottom: '1px solid #222', minHeight: 36 }}>
        <Typography sx={{ mr: 3, fontWeight: 400 }}>
          Llámanos al <b>(452) 219 3262</b>
        </Typography>
      </Box>
      {/* Main navbar */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: '#000', boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)', borderBottom: '1.5px solid #222' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: 96, px: 4 }}>
          {/* Logo y nombre */}
          <Box display="flex" alignItems="center">
            <Box
              component="img"
              src="/logo-grupo-milkasa.png"
              alt="Grupo Milkasa logo"
              sx={{ width: 72, height: 72, objectFit: 'contain', borderRadius: 2, mr: 2.5 }}
            />
            <Typography variant="h5" component="div" sx={{ color: '#fff', fontWeight: 900, letterSpacing: 1, fontSize: 28 }}>
              Grupo Milkasa
            </Typography>
          </Box>
          {/* Menú */}
          <Stack direction="row" spacing={2.5} alignItems="center">
            {menu.map((item) => {
              const isActive = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to));
              return (
                <Button
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  sx={{
                    color: isActive ? '#e91e63' : '#fff',
                    fontWeight: 700,
                    fontSize: 18,
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    textTransform: 'none',
                    bgcolor: isActive ? 'rgba(233,30,99,0.08)' : 'transparent',
                    boxShadow: 'none',
                    transition: 'color 0.18s, background 0.18s',
                    '&:hover': {
                      color: '#e91e63',
                      bgcolor: 'rgba(233,30,99,0.08)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;