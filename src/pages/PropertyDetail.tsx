import { useParams } from "react-router-dom";
import { useProperties } from "../hooks/useProperties";
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  Divider,
  Stack,
  Grid,
} from "@mui/material";
import { useState } from "react";
import LoaderLottie from "../components/LoaderLottie";
import ContactSuccess from "../components/ContactSuccess";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BedIcon from '@mui/icons-material/Bed';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ChairIcon from '@mui/icons-material/Chair';
import ShowerIcon from '@mui/icons-material/Shower';
import WeekendIcon from '@mui/icons-material/Weekend';
import StraightenIcon from '@mui/icons-material/Straighten';

const fichaIcons = [
  { icon: DirectionsCarIcon, label: "Garaje(s)", key: "garaje", valueKey: "garaje" },
  { icon: HomeWorkIcon, label: "Niveles", key: "niveles", valueKey: "niveles" },
  { icon: BedIcon, label: "Habitaciones", key: "recamaras", valueKey: "recamaras" },
  { icon: KitchenIcon, label: "Cocina(s)", key: "cocinas", valueKey: "cocinas" },
  { icon: ChairIcon, label: "Comedor(es)", key: "comedores", valueKey: "comedores" },
  { icon: ShowerIcon, label: "Baños", key: "ban_os", valueKey: "ban_os" },
  { icon: WeekendIcon, label: "Sala(s)", key: "salas", valueKey: "salas" },
  { icon: StraightenIcon, label: "Medidas", key: "taman_o", valueKey: "taman_o" },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const { properties, loading } = useProperties();
  // TODOS LOS HOOKS VAN AQUÍ
  const [mainImgIdx, setMainImgIdx] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const property = properties.find((p) => p._id === id);

  if (loading) return <LoaderLottie />;
  if (!property) return <Typography>Propiedad no encontrada.</Typography>;

  // Imagen principal y galería
  const archivos = Array.isArray(property.data.archivos)
    ? property.data.archivos
    : typeof property.data.archivos === "string"
    ? property.data.archivos.split("\n").filter(Boolean)
    : [];
  const mainImage = archivos[mainImgIdx] || "/placeholder.jpg";

  // Ficha técnica ajustada a los campos reales
  const ficha = [
    { icon: DirectionsCarIcon, label: "Garaje(s)", value: property.data.estatus === "Activa" ? 1 : 0 },
    { icon: HomeWorkIcon, label: "Niveles", value: 1 },
    { icon: BedIcon, label: "Habitaciones", value: property.data.recamaras || 0 },
    { icon: KitchenIcon, label: "Cocina(s)", value: 1 },
    { icon: ChairIcon, label: "Comedor(es)", value: 1 },
    { icon: ShowerIcon, label: "Baños", value: property.data.ban_os || 0 },
    { icon: WeekendIcon, label: "Sala(s)", value: 1 },
    { icon: StraightenIcon, label: "Medidas", value: property.data.taman_o ? `${property.data.taman_o}` : "-m2" },
  ];

  // Mapa embed (mock)
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(property.data.direccio_n || property.data.ciudad || "Uruapan, Michoacán")}&output=embed`;

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* Hero con imagen de fondo y título */}
      <Box sx={{ width: "100%", height: { xs: 220, md: 340 }, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", mb: 0 }}>
        <Box sx={{ position: "absolute", inset: 0, background: `url(${mainImage}) center/cover`, zIndex: 1 }} />
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.55)", zIndex: 2 }} />
        <Typography
          variant="h2"
          sx={{ position: "relative", zIndex: 3, color: "#fff", fontWeight: 900, fontSize: { xs: 28, md: 44 }, textAlign: "center", width: "100%" }}
        >
          {property.data.titulo}
        </Typography>
      </Box>

      {/* Sección principal: galería + info básica */}
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 }, mb: 6 }}>
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            gap: 6,
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          {/* Galería/Carrusel */}
          <Box sx={{ flex: 1, minWidth: 0, mb: { xs: 4, md: 0 } }}>
            <Box sx={{ width: '100%', borderRadius: 3, overflow: 'hidden', boxShadow: 3, mb: 2 }}>
              <Box component="img" src={mainImage} alt={property.data.titulo} sx={{ width: '100%', height: 340, objectFit: 'cover', transition: '0.2s' }} />
            </Box>
            {archivos.length > 1 && (
              <Stack direction="row" spacing={1} mt={1}>
                {archivos.map((img, i) => (
                  <Box
                    key={i}
                    component="img"
                    src={img}
                    alt={`Miniatura ${i + 1}`}
                    onClick={() => setMainImgIdx(i)}
                    sx={{
                      width: 80,
                      height: 60,
                      objectFit: 'cover',
                      borderRadius: 2,
                      boxShadow: mainImgIdx === i ? 6 : 1,
                      border: mainImgIdx === i ? '2.5px solid #7c3aed' : '2px solid #fff',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.2s, border 0.2s',
                    }}
                  />
                ))}
              </Stack>
            )}
          </Box>
          {/* Información básica */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Paper elevation={2} sx={{
              p: { xs: 3, md: 5 },
              bgcolor: '#fff',
              borderRadius: 3,
              border: '1.5px solid #ececec',
              boxShadow: '0 2px 12px 0 rgba(60,60,60,0.06)',
              maxWidth: 700,
              mx: { xs: 0, md: 'auto' },
            }}>
              <Typography variant="h5" fontWeight={900} color="#7c3aed" gutterBottom sx={{ fontSize: 28 }}>
                Información básica
              </Typography>
              <Divider sx={{ mb: 2, borderColor: '#7c3aed', borderBottomWidth: 3, width: 80 }} />
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <LocationOnIcon sx={{ color: '#7c3aed', fontSize: 22 }} />
                <Typography fontWeight={700} color="#222" sx={{ fontSize: 18, textTransform: 'capitalize' }}>
                  {property.data.direccio_n || property.data.ciudad}
                </Typography>
              </Stack>
              <Typography fontWeight={900} color="#222" mb={1} sx={{ fontSize: 24 }}>
                $ {Number(property.data.precio).toLocaleString('es-MX')}
              </Typography>
              <Typography color="#757575" mb={2} sx={{ fontSize: 17, lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                {property.data.descripcion}
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>

      {/* Ficha Técnica */}
      <Box sx={{ bgcolor: "#f7f7f7", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h5" fontWeight={900} color="#7c3aed" gutterBottom>
            Ficha Técnica
          </Typography>
          <Divider sx={{ mb: 4, borderColor: '#7c3aed', borderBottomWidth: 3, width: 60 }} />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
            {ficha.map((item, i) => (
              <Box key={item.label} sx={{ textAlign: 'center', minWidth: 110, mb: 2 }}>
                <item.icon sx={{ color: '#26c6da', fontSize: 38, mb: 1 }} />
                <Typography fontWeight={700} color="#222" fontSize={18}>{item.value}</Typography>
                <Typography color="#757575" fontSize={15}>{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Ubicación */}
      <Box sx={{ bgcolor: "#fff", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h5" fontWeight={900} color="#7c3aed" gutterBottom>
            Ubicación
          </Typography>
          <Divider sx={{ mb: 4, borderColor: "#7c3aed", borderBottomWidth: 3, width: 60 }} />
          <Box sx={{ width: "100%", height: 340, borderRadius: 3, overflow: "hidden", boxShadow: 2 }}>
            <iframe
              title="Mapa de ubicación"
              src={mapSrc}
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Container>
      </Box>

      {/* Solicitar Información */}
      <Box sx={{ width: "100%", minHeight: 420, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#fff", mt: 8 }}>
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 1, background: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80) center/cover', opacity: 0.45 }} />
        <Box sx={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 900, px: 2, py: 8 }}>
          <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: 6, alignItems: 'center', width: '100%' }}>
            <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
              <Typography variant="h4" fontWeight={900} color="#fff" gutterBottom>
                Solicitar Información
              </Typography>
              <Typography color="#fff" fontSize={18} mb={2}>
                Ponte en contacto con nosotros, nos dará mucho gusto atenderte
              </Typography>
              <Typography color="#fff" fontWeight={700} mb={1}>
                📞 (452) 219 3262
              </Typography>
              <Typography color="#fff" fontWeight={700} mb={2}>
                ✉️ milkasa.24@gmail.com
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Paper elevation={2} sx={{ p: 4, bgcolor: '#fff', borderRadius: 3 }}>
                {showSuccess ? (
                  <ContactSuccess />
                ) : (
                  <Stack spacing={2}>
                    <input placeholder="Nombre" style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ccc' }} />
                    <input placeholder="Email" style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ccc' }} />
                    <input placeholder="Teléfono" style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ccc' }} />
                    <textarea placeholder={`Hola, quisiera más información de ${property.data.titulo}. Gracias!`} rows={3} style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ccc', resize: 'vertical' }} />
                    <Button variant="contained" sx={{ bgcolor: '#e91e63', fontWeight: 700, fontSize: 18 }} fullWidth onClick={() => setShowSuccess(true)}>
                      ENVIAR
                    </Button>
                  </Stack>
                )}
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;
