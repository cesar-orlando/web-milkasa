import {
  Box,
  Typography,
  Container,
  Card,
  Avatar,
  TextField,
  Stack,
  Paper,
  Divider,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { Email, Phone, WhatsApp, LocationOn, Visibility, EmojiEvents, Rocket } from "@mui/icons-material";
import PrimaryButton from "../components/PrimaryButton";

const About = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert("Gracias por tu mensaje. Te contactaremos pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #ba923f 0%, #a77f30 100%)",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Conócenos
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Tu aliado de confianza en bienes raíces
          </Typography>
        </Container>
      </Box>

      {/* Nuestra razón de ser */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="#3c3c3b">
            Nuestra razón de ser
          </Typography>
          <Divider sx={{ width: 100, mx: "auto", borderWidth: 2, borderColor: "#ba923f" }} />
        </Box>

        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4} alignItems="center">
          <Box flex={1}>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              <strong>Grupo Milkasa</strong> ofrece asesoría a través de su personal capacitado 
              para guiarlo en la selección de la mejor opción de inversión en inmuebles, 
              acompañándolo de inicio a fin de la operación, hasta concluir el proceso de 
              adquisición de su patrimonio.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              En <strong>Grupo Milkasa</strong> tenemos una trayectoria con más de 10 años de 
              experiencia en el ramo. Contamos con diversos servicios inmobiliarios para empresas 
              y particulares atendiendo sus necesidades, ofreciendo un trato personal que le brinda 
              seguridad, tranquilidad y conformidad, dejando una buena experiencia con nosotros.
            </Typography>
          </Box>
          <Box flex={1}>
            <Box
              component="img"
              src="/hero-building.png"
              alt="Grupo Milkasa"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Nuestro equipo */}
      <Box sx={{ bgcolor: "#f8f9fa", py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h6" color="#ba923f" fontWeight="bold">
              Estamos para ayudarte
            </Typography>
            <Typography variant="h4" fontWeight="bold" gutterBottom color="#3c3c3b">
              Nuestro equipo
            </Typography>
          </Box>

          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
            {/* Miembro 1 */}
            <Box flex={1}>
              <Card sx={{ textAlign: "center", p: 3, height: "100%" }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 2,
                    bgcolor: "#ba923f",
                    fontSize: "2rem",
                  }}
                >
                  JM
                </Avatar>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Juan Martínez
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Director General
                </Typography>
                <Typography variant="body2" gutterBottom>
                  contacto@grupomilkasa.com
                </Typography>
                <Typography variant="body2" gutterBottom>
                  (443) 123-4567
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
                  <IconButton color="primary">
                    <Email />
                  </IconButton>
                  <IconButton color="success">
                    <WhatsApp />
                  </IconButton>
                </Stack>
              </Card>
            </Box>

            {/* Miembro 2 */}
            <Box flex={1}>
              <Card sx={{ textAlign: "center", p: 3, height: "100%" }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 2,
                    bgcolor: "#ba923f",
                    fontSize: "2rem",
                  }}
                >
                  MR
                </Avatar>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  María Rodríguez
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Directora Comercial
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ventas@grupomilkasa.com
                </Typography>
                <Typography variant="body2" gutterBottom>
                  (443) 987-6543
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
                  <IconButton color="primary">
                    <Email />
                  </IconButton>
                  <IconButton color="success">
                    <WhatsApp />
                  </IconButton>
                </Stack>
              </Card>
            </Box>

            {/* Miembro 3 */}
            <Box flex={1}>
              <Card sx={{ textAlign: "center", p: 3, height: "100%" }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 2,
                    bgcolor: "#ba923f",
                    fontSize: "2rem",
                  }}
                >
                  CF
                </Avatar>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Carlos Fernández
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Asesor Inmobiliario Senior
                </Typography>
                <Typography variant="body2" gutterBottom>
                  asesoria@grupomilkasa.com
                </Typography>
                <Typography variant="body2" gutterBottom>
                  (443) 555-0123
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
                  <IconButton color="primary">
                    <Email />
                  </IconButton>
                  <IconButton color="success">
                    <WhatsApp />
                  </IconButton>
                </Stack>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ¿Qué nos define? */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="#3c3c3b">
            ¿Qué nos define?
          </Typography>
          <Divider sx={{ width: 100, mx: "auto", borderWidth: 2, borderColor: "#ba923f" }} />
        </Box>

        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
          {/* Misión */}
          <Box flex={1}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                textAlign: "center",
                height: "100%",
                background: "linear-gradient(135deg, #e91e63 0%, #c2185b 100%)",
                color: "white",
              }}
            >
              <Rocket sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Misión
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                Brindar a nuestros clientes la tranquilidad, confianza, comodidad y seguridad, 
                así como el beneficio a sus intereses y la mejor inversión de su patrimonio, 
                acompañándolos de principio a fin en el proceso de comercialización.
              </Typography>
            </Paper>
          </Box>

          {/* Visión */}
          <Box flex={1}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                textAlign: "center",
                height: "100%",
                background: "linear-gradient(135deg, #3f51b5 0%, #303f9f 100%)",
                color: "white",
              }}
            >
              <Visibility sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Visión
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                Superar las expectativas en el ramo inmobiliario con un servicio de calidad, 
                vanguardista e innovador, con resultados a niveles competitivos, siendo únicos 
                en nuestro servicio y la preferencia de nuestros clientes.
              </Typography>
            </Paper>
          </Box>

          {/* Valores */}
          <Box flex={1}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                textAlign: "center",
                height: "100%",
                background: "linear-gradient(135deg, #ff9800 0%, #f57c00 100%)",
                color: "white",
              }}
            >
              <EmojiEvents sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Valores
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                Honestidad, Compromiso, Lealtad, Respeto, Confidencialidad, Calidad, 
                Calidez, Confianza, Profesionalismo y Transparencia en cada proceso.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>

      {/* Formulario de contacto */}
      <Box sx={{ bgcolor: "#3c3c3b", py: 8, color: "white" }}>
        <Container maxWidth="lg">
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={6} alignItems="center">
            <Box flex={1}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Contáctanos
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ opacity: 0.9 }}>
                Ponte en contacto con nosotros, nos dará mucho gusto atenderte
              </Typography>
              
              <Stack spacing={2} mt={4}>
                <Box display="flex" alignItems="center" gap={2}>
                  <Phone sx={{ color: "#ba923f" }} />
                  <Typography variant="body1">
                    (443) 123-4567 / (443) 987-6543
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <Email sx={{ color: "#ba923f" }} />
                  <Typography variant="body1">
                    contacto@grupomilkasa.com
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <LocationOn sx={{ color: "#ba923f" }} />
                  <Typography variant="body1">
                    Michoacán, México
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Box flex={1}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label="Teléfono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                    />
                    <TextField
                      fullWidth
                      label="Mensaje"
                      name="mensaje"
                      multiline
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Hola, quisiera más información sobre sus servicios. ¡Gracias!"
                      required
                    />
                    <PrimaryButton type="submit" size="large" fullWidth>
                      ENVIAR
                    </PrimaryButton>
                  </Stack>
                </form>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
