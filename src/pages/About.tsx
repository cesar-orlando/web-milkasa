import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
  Divider
} from '@mui/material';
import { useCompanyInfo } from '../hooks/useCompanyInfo';
import LoaderLottie from '../components/LoaderLottie';
import ContactSuccess from '../components/ContactSuccess';
import { useState } from 'react';

const About = () => {
  const { companyInfo, loading } = useCompanyInfo();
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setFormSubmitted(true);
      setSubmitting(false);
    }, 800);
  };

  if (loading || !companyInfo) return <LoaderLottie />;

  return (
    <Box sx={{ bgcolor: '#f7f7f7', minHeight: '100vh', py: 0 }}>
      {/* Hero/Encabezado */}
      <Box sx={{ bgcolor: '#e0e0e0', py: 6, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight="bold" color="#3c3c3b" gutterBottom>
          Conócenos
        </Typography>
        <Typography variant="h6" color="#3c3c3b" maxWidth={600} mx="auto">
          Somos profesionales en el ramo inmobiliario, brindamos resultados reales y honestos.
        </Typography>
      </Box>

      {/* Imagen principal (bloque gris) */}
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <Box sx={{ width: 320, height: 180, bgcolor: '#bdbdbd', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#757575', fontWeight: 600, fontSize: 20 }}>
          Aquí va la imagen principal
        </Box>
      </Box>

      {/* Razón de ser */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Paper elevation={2} sx={{ p: 4, borderLeft: '8px solid #ba923f', bgcolor: '#fff' }}>
          <Typography variant="h5" fontWeight="bold" color="#3c3c3b" gutterBottom>
            Nuestra razón de ser
          </Typography>
          <Typography variant="body1" color="#3c3c3b">
            {companyInfo.razonSer}
          </Typography>
        </Paper>
      </Container>

      {/* Nuestro equipo */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Typography variant="h5" fontWeight="bold" color="#3c3c3b" gutterBottom textAlign="center">
          Nuestro equipo
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
          {companyInfo.equipo.map((m) => (
            <Box key={m.id} sx={{ width: { xs: '100%', sm: '45%', md: '30%' }, minWidth: 220 }}>
              <Paper elevation={1} sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
                <Box sx={{ width: 90, height: 90, bgcolor: '#bdbdbd', borderRadius: '50%', mx: 'auto', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#757575', fontWeight: 600 }}>
                  Aquí va la imagen
                </Box>
                <Typography variant="subtitle1" fontWeight="bold" color="#3c3c3b">
                  {m.name}
                </Typography>
                <Typography variant="body2" color="#757575" mb={1}>{m.position}</Typography>
                <Typography variant="body2" color="#757575">{m.email}</Typography>
                <Typography variant="body2" color="#757575">{m.phone}</Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Valores y misión/visión */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Box display="flex" flexWrap="wrap" gap={4}>
          <Box sx={{ flex: 1, minWidth: 260 }}>
            <Paper elevation={1} sx={{ p: 3, bgcolor: '#fff', height: '100%' }}>
              <Typography variant="h6" fontWeight="bold" color="#3c3c3b" gutterBottom>
                Misión
              </Typography>
              <Typography variant="body2" color="#3c3c3b">{companyInfo.mision}</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" fontWeight="bold" color="#3c3c3b" gutterBottom>
                Visión
              </Typography>
              <Typography variant="body2" color="#3c3c3b">{companyInfo.vision}</Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: 1, minWidth: 260 }}>
            <Paper elevation={1} sx={{ p: 3, bgcolor: '#fff', height: '100%' }}>
              <Typography variant="h6" fontWeight="bold" color="#3c3c3b" gutterBottom>
                Nuestros valores
              </Typography>
              <Stack spacing={1}>
                {companyInfo.valores.map((valor, i) => (
                  <Typography key={i} variant="body2" color="#3c3c3b">• {valor}</Typography>
                ))}
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Container>

      {/* Formulario de contacto */}
      <Container maxWidth="sm" sx={{ mb: 8 }}>
        <Paper elevation={2} sx={{ p: 4, bgcolor: '#fff' }}>
          <Typography variant="h5" fontWeight="bold" color="#3c3c3b" gutterBottom textAlign="center">
            Contacto
          </Typography>
          <Typography variant="body2" color="#757575" textAlign="center" mb={2}>
            Ponte en contacto con nosotros, nos dará mucho gusto atenderte
          </Typography>
          {formSubmitted ? (
            <ContactSuccess />
          ) : (
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField label="Nombre" name="nombre" value={formData.nombre} onChange={handleFormChange} required fullWidth />
                <TextField label="Email" name="email" value={formData.email} onChange={handleFormChange} required fullWidth />
                <TextField label="Teléfono" name="telefono" value={formData.telefono} onChange={handleFormChange} fullWidth />
                <TextField label="Mensaje" name="mensaje" value={formData.mensaje} onChange={handleFormChange} required fullWidth multiline rows={3} />
                <Button type="submit" variant="contained" sx={{ bgcolor: '#ba923f', fontWeight: 600 }} disabled={submitting}>
                  {submitting ? 'Enviando...' : 'Enviar'}
                </Button>
              </Stack>
            </form>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
