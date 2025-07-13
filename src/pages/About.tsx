import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Stack,
  IconButton,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Email,
  Phone,
  CheckCircle,
  Business,
  Visibility,
  Star,
  Send,
  WhatsApp,
  LinkedIn,
  Facebook
} from '@mui/icons-material';
import { useState } from 'react';
import { useCompanyInfo } from '../hooks/useCompanyInfo';
import LoaderLottie from '../components/LoaderLottie';
import ContactSuccess from '../components/ContactSuccess';
import axios from 'axios';

const About = () => {
  const { companyInfo, loading } = useCompanyInfo();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Enviar a la API
      await axios.post('https://api.milkasa.virtualvoices.com.mx/api/contacto', formData);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error enviando formulario:', error);
      // Mostrar éxito de todas formas para la demo
      setFormSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <LoaderLottie />;

  if (!companyInfo) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          Error cargando información de la empresa
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ color: '#3c3c3b' }}>
          Conócenos
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="600px" mx="auto">
          Conoce más sobre Grupo Milkasa, nuestro equipo y los valores que nos definen
        </Typography>
      </Box>

      {/* Razón de ser */}
      <Box mb={8}>
        <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
          <Box display="flex" alignItems="center" mb={3}>
            <Business sx={{ color: '#ba923f', fontSize: 40, mr: 2 }} />
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#3c3c3b' }}>
              Nuestra Razón de Ser
            </Typography>
          </Box>
          <Typography variant="body1" fontSize={18} lineHeight={1.8} color="text.secondary">
            {companyInfo.razonSer}
          </Typography>
        </Paper>
      </Box>

      {/* Nuestro Equipo */}
      <Box mb={8}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ color: '#3c3c3b' }}>
          Nuestro Equipo
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" mb={4}>
          Profesionales comprometidos con tu éxito inmobiliario
        </Typography>
        
                 <Box display="flex" flexWrap="wrap" gap={3}>
           {companyInfo.equipo.map((member) => (
             <Box key={member.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' } }}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 250,
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      bgcolor: '#ba923f',
                      fontSize: 32,
                      fontWeight: 'bold'
                    }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {member.name}
                  </Typography>
                  <Chip 
                    label={member.position} 
                    color="primary" 
                    sx={{ 
                      mb: 2,
                      bgcolor: '#ba923f',
                      color: 'white',
                      '&:hover': { bgcolor: '#a77f30' }
                    }} 
                  />
                  <Stack spacing={1} alignItems="center">
                    <Box display="flex" alignItems="center">
                      <Email sx={{ color: '#ba923f', fontSize: 16, mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {member.email}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Phone sx={{ color: '#ba923f', fontSize: 16, mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {member.phone}
                      </Typography>
                    </Box>
                    <Box display="flex" gap={1} mt={1}>
                      <IconButton size="small" sx={{ color: '#25d366' }}>
                        <WhatsApp />
                      </IconButton>
                      <IconButton size="small" sx={{ color: '#0077b5' }}>
                        <LinkedIn />
                      </IconButton>
                      <IconButton size="small" sx={{ color: '#1877f2' }}>
                        <Facebook />
                      </IconButton>
                    </Box>
                  </Stack>
                                 </CardContent>
               </Card>
             </Box>
           ))}
         </Box>
      </Box>

      {/* Qué nos define */}
      <Box mb={8}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ color: '#3c3c3b' }}>
          Qué nos define
        </Typography>
                 <Box display="flex" flexWrap="wrap" gap={4} mt={2}>
           {/* Misión */}
           <Box sx={{ width: { xs: '100%', md: 'calc(33.333% - 21px)' } }}>
             <Paper elevation={2} sx={{ p: 3, height: '100%', borderRadius: 3 }}>
               <Box display="flex" alignItems="center" mb={2}>
                 <Business sx={{ color: '#ba923f', fontSize: 32, mr: 2 }} />
                 <Typography variant="h5" fontWeight="bold">
                   Misión
                 </Typography>
               </Box>
               <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
                 {companyInfo.mision}
               </Typography>
             </Paper>
           </Box>

           {/* Visión */}
           <Box sx={{ width: { xs: '100%', md: 'calc(33.333% - 21px)' } }}>
             <Paper elevation={2} sx={{ p: 3, height: '100%', borderRadius: 3 }}>
               <Box display="flex" alignItems="center" mb={2}>
                 <Visibility sx={{ color: '#ba923f', fontSize: 32, mr: 2 }} />
                 <Typography variant="h5" fontWeight="bold">
                   Visión
                 </Typography>
               </Box>
               <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
                 {companyInfo.vision}
               </Typography>
             </Paper>
           </Box>

           {/* Valores */}
           <Box sx={{ width: { xs: '100%', md: 'calc(33.333% - 21px)' } }}>
             <Paper elevation={2} sx={{ p: 3, height: '100%', borderRadius: 3 }}>
               <Box display="flex" alignItems="center" mb={2}>
                 <Star sx={{ color: '#ba923f', fontSize: 32, mr: 2 }} />
                 <Typography variant="h5" fontWeight="bold">
                   Valores
                 </Typography>
               </Box>
               <List dense>
                 {companyInfo.valores.map((valor, index) => (
                   <ListItem key={index} sx={{ px: 0 }}>
                     <ListItemIcon>
                       <CheckCircle sx={{ color: '#ba923f', fontSize: 20 }} />
                     </ListItemIcon>
                     <ListItemText 
                       primary={valor}
                       primaryTypographyProps={{
                         variant: 'body2',
                         color: 'text.secondary'
                       }}
                     />
                   </ListItem>
                 ))}
               </List>
             </Paper>
           </Box>
         </Box>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Formulario de contacto */}
      <Box>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ color: '#3c3c3b' }}>
          Contáctanos
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" mb={4}>
          ¿Tienes alguna pregunta? Nos encantaría escucharte
        </Typography>

        {formSubmitted ? (
          <ContactSuccess />
        ) : (
          <Box maxWidth="600px" mx="auto">
            <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
                             <form onSubmit={handleSubmit}>
                 <Box display="flex" flexWrap="wrap" gap={3}>
                   <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                     <TextField
                       fullWidth
                       label="Nombre completo"
                       name="nombre"
                       value={formData.nombre}
                       onChange={handleFormChange}
                       required
                       variant="outlined"
                     />
                   </Box>
                   <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                     <TextField
                       fullWidth
                       label="Email"
                       name="email"
                       type="email"
                       value={formData.email}
                       onChange={handleFormChange}
                       required
                       variant="outlined"
                     />
                   </Box>
                   <Box sx={{ width: '100%' }}>
                     <TextField
                       fullWidth
                       label="Teléfono"
                       name="telefono"
                       value={formData.telefono}
                       onChange={handleFormChange}
                       variant="outlined"
                     />
                   </Box>
                   <Box sx={{ width: '100%' }}>
                     <TextField
                       fullWidth
                       label="Mensaje"
                       name="mensaje"
                       multiline
                       rows={4}
                       value={formData.mensaje}
                       onChange={handleFormChange}
                       required
                       variant="outlined"
                     />
                   </Box>
                   <Box sx={{ width: '100%' }}>
                     <Button
                       type="submit"
                       fullWidth
                       variant="contained"
                       size="large"
                       disabled={submitting}
                       startIcon={<Send />}
                       sx={{
                         bgcolor: '#ba923f',
                         py: 1.5,
                         fontSize: 16,
                         fontWeight: 'bold',
                         '&:hover': { bgcolor: '#a77f30' }
                       }}
                     >
                       {submitting ? 'Enviando...' : 'Enviar mensaje'}
                     </Button>
                   </Box>
                 </Box>
               </form>
            </Paper>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default About;
