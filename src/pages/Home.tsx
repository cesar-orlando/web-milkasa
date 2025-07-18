import { Box, Typography, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import LoaderLottie from "../components/LoaderLottie";
import { useProperties } from "../hooks/useProperties";
import { useNavigate } from "react-router-dom";

const palabras = ["Local", "Casa", "Departamento", "Terreno"];

const TYPING_SPEED = 80; // ms por letra
const PAUSE_AFTER = 900; // ms después de escribir la palabra
const PAUSE_BEFORE = 400; // ms antes de empezar a escribir la siguiente

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const { properties, loading } = useProperties();
  const navigate = useNavigate();

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const palabra = palabras[wordIndex];

    if (typing) {
      if (displayed.length < palabra.length) {
        timeout = setTimeout(() => {
          setDisplayed(palabra.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), PAUSE_AFTER);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(palabra.slice(0, displayed.length - 1));
        }, TYPING_SPEED / 1.5);
      } else {
        timeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % palabras.length);
          setTyping(true);
        }, PAUSE_BEFORE);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  return (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh' }}>
      {/* Hero con fondo y overlay */}
      <Box sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 400, md: 520 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Imagen de fondo hero */}
        <Box sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'url(/depas2.png) center/cover',
          top: 0,
          left: 0,
          zIndex: 1,
        }} />
        {/* Overlay oscuro */}
        <Box sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.55)',
          top: 0,
          left: 0,
          zIndex: 2,
        }} />
        {/* Contenido hero */}
        <Box sx={{ position: 'relative', zIndex: 3, width: '100%', textAlign: 'center', px: 2 }}>
          <Typography
            variant="h2"
            sx={{
              color: '#fff',
              fontWeight: 900,
              fontSize: { xs: 36, md: 64 },
              lineHeight: 1.1,
              mb: 2,
              textShadow: '0 2px 8px rgba(0,0,0,0.25)'
            }}
          >
            Compra o renta tu<br />
            <span style={{ display: 'inline-block', minHeight: 80 }}>
              {Array.from(displayed).map((letra, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    color: '#ffb13b',
                    fontWeight: 900,
                    fontSize: '1em',
                    transform: typing ? 'translateY(0)' : 'translateY(10px)',
                    opacity: 1,
                    transition: 'transform 0.18s cubic-bezier(.4,2,.6,1), opacity 0.18s',
                    marginRight: 2,
                  }}
                >
                  {letra}
                </span>
              ))}
              <span style={{
                display: 'inline-block',
                width: 18,
                height: 48,
                background: 'none',
                borderLeft: '3px solid #ffb13b',
                marginLeft: 2,
                opacity: typing ? 1 : 0.3,
                animation: 'blink 1s steps(1) infinite',
                verticalAlign: 'bottom',
              }} />
            </span>
          </Typography>
          <Typography variant="h6" sx={{ color: '#fff', mb: 4, fontWeight: 400 }}>
            Somos profesionales en el ramo inmobiliario, brindamos resultados reales y honestos.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              sx={{
                bgcolor: '#e91e63',
                color: '#fff',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                fontSize: 18,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                '&:hover': { bgcolor: '#c2185b' }
              }}
            >
              VENTA
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#ffb13b',
                color: '#222',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                fontSize: 18,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                '&:hover': { bgcolor: '#e09e2f', color: '#fff' }
              }}
            >
              RENTA
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Sección logo y Mi prioridad, tu patrimonio */}
      <Box sx={{ bgcolor: '#fff', width: '100%', py: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Box component="img" src="/logo-grupo-milkasa.png" alt="Logo Milkasa" sx={{ width: 120, height: 120, objectFit: 'contain' }} />
        </Box>
        <Typography variant="h3" fontWeight={900} color="#222" textAlign="center" gutterBottom>
          Mi prioridad, <span style={{ color: '#ffb13b' }}>tu patrimonio</span>
        </Typography>
      </Box>

      {/* Sección bienvenida multilingüe */}
      <Box sx={{ width: '100%', bgcolor: '#222', py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Mock color shapes */}
        <Box sx={{ position: 'absolute', left: 0, top: 0, width: 120, height: '100%', bgcolor: '#ffb13b', borderTopRightRadius: 80, zIndex: 1, opacity: 0.8 }} />
        <Box sx={{ position: 'absolute', right: 0, bottom: 0, width: 180, height: '100%', bgcolor: '#8e24aa', borderTopLeftRadius: 120, zIndex: 1, opacity: 0.7 }} />
        <Box sx={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 900, px: 2 }}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} flexWrap="wrap" sx={{ mb: 2 }}>
            <Typography sx={{ color: '#ffb13b', fontWeight: 700, fontSize: 28 }}>bienvenido</Typography>
            <Typography sx={{ color: '#ffb13b', fontWeight: 700, fontSize: 28 }}>| welcome</Typography>
            <Typography sx={{ color: '#ffb13b', fontWeight: 700, fontSize: 28 }}>| 어서 오십시오</Typography>
            <Typography sx={{ color: '#ffb13b', fontWeight: 700, fontSize: 28 }}>| いらっしゃいませ</Typography>
            <Typography sx={{ color: '#ffb13b', fontWeight: 700, fontSize: 28 }}>| willkommen</Typography>
            <Typography sx={{ color: '#ffb13b', fontWeight: 700, fontSize: 28 }}>| benvenuto</Typography>
          </Stack>
        </Box>
      </Box>

      {/* Cards de propiedades reales */}
      <Box sx={{ bgcolor: '#fff', py: 8 }}>
        <Typography variant="h3" fontWeight={900} color="#222" textAlign="center" gutterBottom sx={{ mb: 4 }}>
          <span style={{ color: '#ffb13b' }}>Propiedades</span>
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4, flexWrap: 'wrap' }}>
          {['Todas', 'Bodega', 'Casa', 'Departamento', 'Local', 'Oficinas', 'Terreno'].map((cat, i) => (
            <Box key={cat} sx={{ 
              background: i === 0 
                ? 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%)'
                : i === 1 
                ? 'linear-gradient(135deg, #dc2626 0%, #ea580c 50%, #f97316 100%)'
                : i === 2 
                ? 'linear-gradient(135deg, #b45309 0%, #d97706 50%, #ea580c 100%)'
                : i === 3 
                ? 'linear-gradient(135deg, #92400e 0%, #b45309 50%, #d97706 100%)'
                : i === 4 
                ? 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fdba74 100%)'
                : i === 5 
                ? 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%)'
                : 'linear-gradient(135deg, #d97706 0%, #ea580c 50%, #f97316 100%)',
              color: '#fff', 
              fontWeight: 700, 
              px: 3, 
              py: 1, 
              borderRadius: 2, 
              fontSize: 18, 
              mb: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                filter: 'brightness(1.1)'
              }
            }}>
              {cat}
            </Box>
          ))}
        </Stack>
        {loading ? (
          <LoaderLottie />
        ) : (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {properties.slice(0, 3).map((record) => {
              const imageUrl = Array.isArray(record.data.archivos)
                ? record.data.archivos[0]
                : typeof record.data.archivos === 'string'
                ? record.data.archivos.split('\n')[0]
                : "/placeholder.jpg";
              return (
                <Box key={record._id} sx={{ width: 320, bgcolor: '#fff', borderRadius: 3, boxShadow: 3, mb: 4, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 420, height: 420 }}>
                  <Box component="img" src={imageUrl} alt={record.data.titulo} sx={{ height: 180, width: '100%', objectFit: 'cover', mb: 0 }} />
                  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Typography variant="h6" fontWeight={900} color="#222" gutterBottom>
                      {record.data.titulo}
                    </Typography>
                    <Typography color="#757575" sx={{ mb: 2, fontSize: 15, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', minHeight: 44, lineHeight: 1.2 }}>
                      {record.data.descripcion}
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: '#e91e63', color: '#fff', fontWeight: 700, borderRadius: 2, px: 3, py: 1, fontSize: 16, mt: 'auto' }} onClick={() => navigate(`/propiedades/${record._id}`)}>
                      + INFO
                    </Button>
                  </Box>
                  {/* Decorativo naranja degradado */}
                  <Box sx={{ 
                    position: 'absolute', 
                    right: 0, 
                    bottom: 0, 
                    width: 60, 
                    height: 60, 
                    background: [
                      'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                      'linear-gradient(135deg, #b45309 0%, #d97706 100%)',
                      'linear-gradient(135deg, #92400e 0%, #b45309 100%)',
                      'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                      'linear-gradient(135deg, #d97706 0%, #ea580c 100%)',
                      'linear-gradient(135deg, #fb923c 0%, #fdba74 100%)'
                    ][parseInt(record._id)%6], 
                    borderTopLeftRadius: 60, 
                    zIndex: 1, 
                    opacity: 0.7 
                  }} />
                </Box>
              );
            })}
          </Box>
        )}
      </Box>

      {/* Banner catálogo */}
      <Box sx={{ width: '100%', minHeight: 320, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#fff', mb: 8 }}>
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 1, background: 'url(/depas.png) center/cover', opacity: 0.45 }} />
        <Box sx={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center', px: 2 }}>
          <Typography variant="h4" fontWeight={900} color="#222" gutterBottom>
            Busca más opciones en nuestro catálogo
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
            <Button variant="contained" sx={{ bgcolor: '#e91e63', color: '#fff', fontWeight: 700, borderRadius: 2, px: 4, py: 1.5, fontSize: 18 }}>
              VENTA
            </Button>
            <Button variant="contained" sx={{ bgcolor: '#ffb13b', color: '#222', fontWeight: 700, borderRadius: 2, px: 4, py: 1.5, fontSize: 18 }}>
              RENTA
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Nuestra razón de ser */}
      <Box sx={{ bgcolor: '#fff', py: 8 }}>
        <Typography variant="h3" fontWeight={900} color="#7c3aed" textAlign="center" gutterBottom>
          Nuestra razón de ser
        </Typography>
        <Typography color="#222" textAlign="center" maxWidth={700} mx="auto" mb={6}>
          En <b>Grupo Milkasa</b> te ofrecemos asesoría profesional y acompañamiento personalizado para que tomes la mejor decisión en tu inversión inmobiliaria.
        </Typography>
      </Box>
      {/* Animación del cursor */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Box>
  );
};

export default Home;
