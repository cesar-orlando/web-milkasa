import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  TextField, 
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LocationOn,
  Business,
  People,
  CheckCircle,
  AccountBalance,
  StarRate
} from '@mui/icons-material';

const About = () => {
  return (
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#1976d2', 
              mb: 2
            }}
          >
            CONÓCENOS
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666', 
              fontWeight: 400,
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            Somos una empresa inmobiliaria con más de 10 años de experiencia en el mercado, 
            dedicada a brindar servicios de calidad y confianza a nuestros clientes.
          </Typography>
        </Box>

        {/* Quiénes Somos */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 3 }}>
                ¿Quiénes Somos?
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, fontSize: '1.1rem' }}>
                <strong>Grupo Milkasa</strong> es una empresa inmobiliaria establecida en León, Guanajuato, 
                con más de una década de experiencia en el sector inmobiliario mexicano. Nos especializamos 
                en la compra, venta, renta y administración de propiedades residenciales y comerciales.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, fontSize: '1.1rem' }}>
                Nuestro compromiso es proporcionar un servicio integral y personalizado, acompañando a 
                nuestros clientes en cada etapa del proceso inmobiliario, desde la evaluación inicial 
                hasta la conclusión exitosa de la operación.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                Con un equipo de profesionales altamente capacitados y certificados, garantizamos 
                transparencia, seguridad jurídica y la mejor asesoría para maximizar el valor de 
                su inversión inmobiliaria.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, bgcolor: '#f5f5f5' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2' }}>
                Datos de la Empresa
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <Business color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Años de experiencia" 
                    secondary="Más de 10 años"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationOn color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Ubicación" 
                    secondary="León, Guanajuato"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <People color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Equipo" 
                    secondary="Profesionales certificados"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountBalance color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Servicios" 
                    secondary="Venta, renta, administración"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* Servicios */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 4, textAlign: 'center' }}>
            Nuestros Servicios
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: "Venta de Propiedades",
                description: "Asesoría completa en la venta de casas, departamentos, terrenos y propiedades comerciales con el mejor precio del mercado."
              },
              {
                title: "Renta de Inmuebles",
                description: "Administración y renta de propiedades residenciales y comerciales con garantía de pago puntual y mantenimiento."
              },
              {
                title: "Valuación Profesional",
                description: "Avalúos comerciales y fiscales realizados por profesionales certificados para determinar el valor real de su propiedad."
              },
              {
                title: "Asesoría Legal",
                description: "Acompañamiento jurídico completo en todos los trámites legales y documentación necesaria para su operación."
              },
              {
                title: "Inversión Inmobiliaria",
                description: "Consultoria especializada para inversionistas que buscan las mejores oportunidades en el mercado inmobiliario."
              },
              {
                title: "Administración",
                description: "Gestión integral de propiedades en renta incluyendo cobranza, mantenimiento y relación con inquilinos."
              }
            ].map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card elevation={1} sx={{ height: '100%', '&:hover': { elevation: 3 } }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Misión y Visión */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 3 }}>
                Nuestra Misión
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                Brindar servicios inmobiliarios de la más alta calidad, ofreciendo soluciones integrales 
                y personalizadas que superen las expectativas de nuestros clientes, garantizando transparencia, 
                seguridad y el máximo valor en cada transacción inmobiliaria.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 3 }}>
                Nuestra Visión
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                Ser la empresa inmobiliaria líder en el Bajío mexicano, reconocida por nuestra excelencia 
                en el servicio, innovación tecnológica y compromiso con el desarrollo del sector inmobiliario, 
                contribuyendo al crecimiento económico de nuestra región.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Valores */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 4, textAlign: 'center' }}>
            Nuestros Valores
          </Typography>
          <Grid container spacing={2}>
            {[
              "Honestidad y Transparencia",
              "Profesionalismo",
              "Compromiso con el Cliente",
              "Responsabilidad Social",
              "Innovación Tecnológica",
              "Confidencialidad"
            ].map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                  <CheckCircle sx={{ color: '#1976d2', mr: 2 }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contacto */}
        <Paper elevation={2} sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 4, textAlign: 'center' }}>
            Contacto
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                Información de Contacto
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Phone sx={{ color: '#1976d2', mr: 2 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Teléfonos
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      (477) 449-5983 / (477) 284-9821
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ color: '#1976d2', mr: 2 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Email
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      contacto@grupomilkasa.com
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn sx={{ color: '#1976d2', mr: 2 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Dirección
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      León, Guanajuato, México
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                Envíanos un Mensaje
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Nombre completo"
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                />
                <TextField
                  label="Correo electrónico"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                />
                <TextField
                  label="Teléfono"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <TextField
                  label="Mensaje"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#1976d2',
                    '&:hover': {
                      bgcolor: '#1565c0'
                    },
                    py: 1.5
                  }}
                >
                  ENVIAR MENSAJE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

      </Container>
    </Box>
  );
};

export default About;
