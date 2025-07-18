import { Box, Typography, Container, Paper, Stack, Button, TextField, Alert } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import ContactSuccess from '../components/ContactSuccess';

// Types for API requests
interface CreateRecordRequest {
  tableSlug: string;
  data: Record<string, any>;
  c_name: string;
  createdBy: string;
}

// API function to create records
const createRecord = async (recordData: CreateRecordRequest) => {
  try {
    const response = await axios.post('https://api-virtual-voices.onrender.com/api/records/', recordData);
    return response.data;
  } catch (error) {
    console.error('Error creating record:', error);
    throw new Error('No se pudo crear el registro');
  }
};

const Contact = () => {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['nombre', 'email', 'mensaje'];
    const missing: string[] = [];
    
    requiredFields.forEach(field => {
      const value = form[field as keyof typeof form];
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        missing.push(field);
      }
    });

    if (missing.length > 0) {
      setError(`Faltan campos requeridos: ${missing.map(field => {
        const labels: Record<string, string> = {
          nombre: 'Nombre',
          email: 'Email',
          mensaje: 'Mensaje'
        };
        return labels[field] || field;
      }).join(', ')}`);
      return;
    }

    try {
      setSubmitting(true);
      setError(null);

      // Prepare data for API
      const recordData: CreateRecordRequest = {
        tableSlug: 'pagina-web',
        data: {
          nombre: form.nombre.trim(),
          email: form.email.trim(),
          telefono: form.telefono.trim() || '',
          mensaje: form.mensaje.trim(),
          fecha_contacto: new Date().toISOString(),
          origen: 'formulario_contacto'
        },
        c_name: 'grupo-milkasa',
        createdBy: 'web-contact'
      };

      // Create record in API
      await createRecord(recordData);
      
      // Show success message
      setSubmitted(true);
    } catch (err) {
      setError('Error al enviar el mensaje. Por favor intenta nuevamente.');
      console.error('Error submitting form:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ bgcolor: '#f7f7f7', minHeight: '100vh', py: 0 }}>
      {/* Hero visual */}
      <Box sx={{ width: '100%', height: { xs: 220, md: 320 }, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 0 }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80) center/cover', zIndex: 1 }} />
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.55)', zIndex: 2 }} />
        <Typography
          variant="h2"
          sx={{ position: 'relative', zIndex: 3, color: '#fff', fontWeight: 900, fontSize: { xs: 32, md: 48 }, textAlign: 'center', width: '100%' }}
        >
          Contáctanos
        </Typography>
      </Box>

      {/* Datos de contacto */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper elevation={2} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, mb: 6, bgcolor: '#fff', boxShadow: '0 2px 12px 0 rgba(60,60,60,0.08)' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center" justifyContent="space-between">
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" fontWeight={900} color="#7c3aed" gutterBottom>
                Información de contacto
              </Typography>
              <Typography color="#222" fontSize={18} mb={1}>
                <b>Teléfonos:</b> (452) 219 3262
              </Typography>
              <Typography color="#222" fontSize={18} mb={1}>
                <b>Email:</b> milkasa.24@gmail.com
              </Typography>
              <Typography color="#222" fontSize={18} mb={1}>
                <b>Dirección:</b> Uruapan, Michoacán, México
              </Typography>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <Box component="img" src="/logo-grupo-milkasa.png" alt="Logo Grupo Milkasa" sx={{ width: 100, height: 100, objectFit: 'contain', opacity: 0.8 }} />
            </Box>
          </Stack>
        </Paper>

        {/* Formulario de contacto */}
        <Paper elevation={2} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, bgcolor: '#fff', boxShadow: '0 2px 12px 0 rgba(60,60,60,0.08)' }}>
          <Typography variant="h5" fontWeight={900} color="#7c3aed" gutterBottom textAlign="center">
            Envíanos un mensaje
          </Typography>
          <Typography color="#757575" mb={3} textAlign="center">
            ¿Tienes dudas o quieres agendar una cita? Completa el formulario y te contactamos a la brevedad.
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}
          
          {submitted ? (
            <ContactSuccess />
          ) : (
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField 
                  label="Nombre" 
                  name="nombre" 
                  value={form.nombre} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                  error={!!(error && error.includes('Nombre'))}
                />
                <TextField 
                  label="Email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                  type="email" 
                  error={!!(error && error.includes('Email'))}
                />
                <TextField 
                  label="Teléfono" 
                  name="telefono" 
                  value={form.telefono} 
                  onChange={handleChange} 
                  fullWidth 
                />
                <TextField 
                  label="Mensaje" 
                  name="mensaje" 
                  value={form.mensaje} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                  multiline 
                  rows={4} 
                  error={!!(error && error.includes('Mensaje'))}
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#e91e63', 
                    color: '#fff', 
                    fontWeight: 700, 
                    borderRadius: 2, 
                    px: 5, 
                    py: 1.5, 
                    fontSize: 18, 
                    boxShadow: 2,
                    '&:hover': {
                      bgcolor: '#c2185b'
                    }
                  }} 
                  disabled={submitting}
                >
                  {submitting ? 'Enviando...' : 'Enviar'}
                </Button>
              </Stack>
            </form>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default Contact;