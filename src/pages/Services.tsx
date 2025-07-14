import { Box, Typography, Container, Paper, Stack, Button } from '@mui/material';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BusinessIcon from '@mui/icons-material/Business';
import GavelIcon from '@mui/icons-material/Gavel';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const servicios = [
  {
    icon: <HomeWorkIcon sx={{ fontSize: 48, color: '#7c3aed' }} />, 
    titulo: 'Venta y Renta de Propiedades',
    descripcion: 'Te ayudamos a vender, comprar o rentar casas, departamentos, terrenos y locales comerciales en las mejores zonas.'
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 48, color: '#e91e63' }} />, 
    titulo: 'Asesoría Legal y Notarial',
    descripcion: 'Acompañamiento legal en todo el proceso de compra-venta, escrituración, contratos y trámites notariales.'
  },
  {
    icon: <GavelIcon sx={{ fontSize: 48, color: '#ffb13b' }} />, 
    titulo: 'Gestión de Créditos Hipotecarios',
    descripcion: 'Te asesoramos y gestionamos tu crédito hipotecario con los principales bancos y SOFOMs.'
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48, color: '#26c6da' }} />, 
    titulo: 'Atención Personalizada',
    descripcion: 'Recibe atención profesional y personalizada durante todo el proceso, desde la búsqueda hasta la entrega.'
  },
];

const Services = () => {
  return (
    <Box sx={{ bgcolor: '#f7f7f7', minHeight: '100vh', py: 0 }}>
      {/* Hero visual */}
      <Box sx={{ width: '100%', height: { xs: 220, md: 320 }, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 0 }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80) center/cover', zIndex: 1 }} />
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.55)', zIndex: 2 }} />
        <Typography
          variant="h2"
          sx={{ position: 'relative', zIndex: 3, color: '#fff', fontWeight: 900, fontSize: { xs: 32, md: 48 }, textAlign: 'center', width: '100%' }}
        >
          Nuestros Servicios
        </Typography>
      </Box>

      {/* Cards de servicios */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" alignItems="stretch">
          {servicios.map((serv, i) => (
            <Paper key={i} elevation={3} sx={{ flex: 1, minWidth: 240, maxWidth: 340, p: 4, borderRadius: 4, textAlign: 'center', bgcolor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 2px 12px 0 rgba(60,60,60,0.08)' }}>
              <Box sx={{ mb: 2 }}>{serv.icon}</Box>
              <Typography variant="h6" fontWeight={900} color="#222" gutterBottom sx={{ fontSize: 22 }}>
                {serv.titulo}
              </Typography>
              <Typography color="#757575" sx={{ fontSize: 16, mb: 2, minHeight: 64 }}>{serv.descripcion}</Typography>
            </Paper>
          ))}
        </Stack>
      </Container>

      {/* Bloque de contacto destacado */}
      <Box sx={{ width: '100%', py: 8, bgcolor: '#7c3aed', mt: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={900} color="#fff" gutterBottom textAlign="center">
            ¿Listo para recibir atención profesional?
          </Typography>
          <Typography color="#fff" fontSize={18} mb={4} textAlign="center">
            Ponte en contacto con nosotros y recibe asesoría personalizada para tu operación inmobiliaria.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" sx={{ bgcolor: '#e91e63', color: '#fff', fontWeight: 700, borderRadius: 2, px: 5, py: 1.5, fontSize: 18, boxShadow: 2 }} href="/contacto">
              Contáctanos
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
export default Services;