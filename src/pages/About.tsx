import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Avatar, 
  Button, 
  TextField, 
  Paper,
  Divider,
  IconButton
} from '@mui/material';
import { 
  Email, 
  WhatsApp, 
  Phone, 
  LocationOn 
} from '@mui/icons-material';

const About = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#2c3e50', 
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Conócenos
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#7f8c8d', 
              fontWeight: 300,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Conoce más sobre nuestra empresa y el equipo que hace posible tus sueños inmobiliarios
          </Typography>
        </Box>

        {/* Nuestra Razón de Ser */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#2c3e50', 
              mb: 4, 
              textAlign: 'center',
              fontSize: { xs: '1.8rem', md: '2.5rem' }
            }}
          >
            Nuestra razón de ser
          </Typography>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.8, 
                color: '#34495e',
                mb: 3
              }}
            >
              <strong>Grupo Milkasa</strong> ofrece asesoría a través de su personal capacitado para guiarlo, 
              en la selección de la mejor opción de inversión en inmuebles, acompañando lo de inicio a fin 
              de la operación, hasta concluir el proceso de adquisición de su patrimonio.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.8, 
                color: '#34495e',
                mb: 3
              }}
            >
              En <strong>Grupo Milkasa</strong> tenemos una trayectoria con más de 10 años de experiencia 
              en el ramo. Contamos con diversos servicios inmobiliarios para empresas y particulares atendiendo 
              sus necesidades, ofreciendo un trato personal que le brinda seguridad, tranquilidad y conformidad, 
              dejando una buena experiencia con nosotros.
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold', 
                color: '#e74c3c',
                textAlign: 'center',
                fontSize: '1.3rem'
              }}
            >
              Estamos para ayudarte
            </Typography>
          </Paper>
        </Box>

        {/* Nuestro Equipo */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#2c3e50', 
              mb: 4, 
              textAlign: 'center',
              fontSize: { xs: '1.8rem', md: '2.5rem' }
            }}
          >
            Nuestro equipo
          </Typography>
          <Grid container spacing={4}>
            {/* Miembro 1 */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Avatar 
                    sx={{ 
                      width: 100, 
                      height: 100, 
                      mx: 'auto', 
                      mb: 2,
                      bgcolor: '#3498db'
                    }}
                  >
                    JD
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Juan Pérez
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Co-Fundador
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    correo@grupomilkasa.com
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    (477) 123-4567
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <IconButton color="primary">
                      <Email />
                    </IconButton>
                    <IconButton color="success">
                      <WhatsApp />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Miembro 2 */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Avatar 
                    sx={{ 
                      width: 100, 
                      height: 100, 
                      mx: 'auto', 
                      mb: 2,
                      bgcolor: '#e74c3c'
                    }}
                  >
                    MM
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    María Martínez
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    CEO
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    maria@grupomilkasa.com
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    (477) 449-5983
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <IconButton color="primary">
                      <Email />
                    </IconButton>
                    <IconButton color="success">
                      <WhatsApp />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Miembro 3 */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Avatar 
                    sx={{ 
                      width: 100, 
                      height: 100, 
                      mx: 'auto', 
                      mb: 2,
                      bgcolor: '#27ae60'
                    }}
                  >
                    CL
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Carlos López
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Director Ejecutivo
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    carlos@grupomilkasa.com
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    (477) 123-4567
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <IconButton color="primary">
                      <Email />
                    </IconButton>
                    <IconButton color="success">
                      <WhatsApp />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* ¿Qué nos define? */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#2c3e50', 
              mb: 4, 
              textAlign: 'center',
              fontSize: { xs: '1.8rem', md: '2.5rem' }
            }}
          >
            ¿Qué nos define?
          </Typography>
          <Grid container spacing={4}>
            {/* Misión */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 3 }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#3498db', 
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  Misión
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.6, 
                    color: '#34495e',
                    textAlign: 'justify'
                  }}
                >
                  Darles a nuestros clientes la tranquilidad, confianza, comodidad y seguridad 
                  así como el beneficio a sus intereses y la mejor inversión de su patrimonio, 
                  acompañándolos de principio a fin en el proceso de comercialización a su entera satisfacción.
                </Typography>
              </Paper>
            </Grid>

            {/* Visión */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 3 }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#e74c3c', 
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  Visión
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.6, 
                    color: '#34495e',
                    textAlign: 'justify'
                  }}
                >
                  Superar las expectativas en el ramo inmobiliario, tener un servicio de calidad. 
                  Vanguardista e innovador, con resultados a niveles competitivos, siendo únicos 
                  en nuestro servicio, y ser la preferencia de nuestros clientes a nivel nacional e internacional.
                </Typography>
              </Paper>
            </Grid>

            {/* Valores */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 3 }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#27ae60', 
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  Valores
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.6, 
                    color: '#34495e',
                    textAlign: 'center'
                  }}
                >
                  Honestidad • Compromiso • Lealtad • Respeto • Confidencialidad • 
                  Calidad • Calidez • Confianza • Profesionalismo
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Contáctanos */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#2c3e50', 
              mb: 4, 
              textAlign: 'center',
              fontSize: { xs: '1.8rem', md: '2.5rem' }
            }}
          >
            Contáctanos
          </Typography>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                textAlign: 'center', 
                mb: 4, 
                fontSize: '1.1rem',
                color: '#34495e'
              }}
            >
              Ponte en contacto con nosotros, nos dará mucho gusto atenderte
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2c3e50' }}>
                    Información de contacto
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Phone sx={{ mr: 2, color: '#3498db' }} />
                    <Typography>477 449 5983 / 477 284 9821</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Email sx={{ mr: 2, color: '#3498db' }} />
                    <Typography>contacto@grupomilkasa.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOn sx={{ mr: 2, color: '#3498db' }} />
                    <Typography>León, Guanajuato, México</Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Teléfono"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    label="Mensaje"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: '#3498db',
                      '&:hover': {
                        bgcolor: '#2980b9'
                      },
                      py: 1.5,
                      fontSize: '1.1rem'
                    }}
                  >
                    ENVIAR
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>

      </Container>
    </Box>
  );
};

export default About;
