// 📁 src/pages/Home.tsx
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  TextField,
  MenuItem,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Stack,
  InputAdornment,
} from "@mui/material";
import { Search, LocationOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useProperties } from "../hooks/useProperties";
import OutlinedButton from "../components/OutlinedButton";

const Home = () => {
  const { properties, loading } = useProperties();
  const [location, setLocation] = useState("");
  const [tipo, setTipo] = useState("");
  const [presupuesto, setPresupuesto] = useState("");

  const navigate = useNavigate();

  const formatCurrency = (val: string) =>
    Number(val).toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
      maximumFractionDigits: 0,
    });

  return (
    <Box>
      {/* Hero Section */}
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
        <Box flex={1} p={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Encuentra la propiedad perfecta con Milkasa
          </Typography>
          <Typography variant="body1" gutterBottom>
            Somos tu aliado en el proceso de compra, venta o renta de propiedades en Michoacán. Confía en nosotros para
            encontrar tu próxima inversión o tu nuevo hogar.
          </Typography>
          <Button variant="contained" sx={{ mt: 2, bgcolor: "#ba923f", "&:hover": { bgcolor: "#a77f30" } }}>
            Ver propiedades
          </Button>

          <Stack direction="row" spacing={6} mt={5}>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                +120
              </Typography>
              <Typography variant="body2">Propiedades disponibles</Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                +300
              </Typography>
              <Typography variant="body2">Clientes satisfechos</Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                +10
              </Typography>
              <Typography variant="body2">Años de experiencia</Typography>
            </Box>
          </Stack>
        </Box>

        <Box flex={1}>
          <Box
            component="img"
            src="/hero-building.png"
            alt="Grupo Milkasa"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>

      {/* Search Box */}
      <Container sx={{ mt: -8, position: "relative", zIndex: 2 }}>
        <Paper elevation={4} sx={{ p: 3, borderRadius: 2 }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <TextField
              fullWidth
              placeholder="Ubicación"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                ),
              }}
            />

            <TextField fullWidth select value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <MenuItem value="">Tipo de propiedad</MenuItem>
              <MenuItem value="Casa">Casa</MenuItem>
              <MenuItem value="Terreno">Terreno</MenuItem>
              <MenuItem value="Lote">Lote</MenuItem>
              <MenuItem value="Departamento">Departamento</MenuItem>
              <MenuItem value="Local">Local</MenuItem>
              <MenuItem value="Edificio">Edificio</MenuItem>
            </TextField>

            <TextField
              fullWidth
              placeholder="Presupuesto máximo"
              value={presupuesto}
              onChange={(e) => setPresupuesto(e.target.value)}
              type="number"
            />

            <Button
              variant="contained"
              sx={{ bgcolor: "#ba923f", px: 4, "&:hover": { bgcolor: "#a77f30" } }}
              onClick={() => {
                const params = new URLSearchParams();
                if (location) params.append("ciudad", location);
                if (tipo) params.append("tipo", tipo);
                if (presupuesto) params.append("precio", presupuesto);
                navigate(`/propiedades?${params.toString()}`);
              }}
            >
              <Search />
            </Button>
          </Stack>
        </Paper>
      </Container>

      {/* Popular Homes */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Propiedades destacadas
        </Typography>

        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} flexWrap="wrap" gap={4}>
          {properties.slice(0, 3).map((record) => {
            const getValue = (key: string) => record.customFields.find((f) => f.key === key)?.value || "";
            const imageUrl = Array.isArray(getValue("archivos")) ? getValue("archivos")[0] : "/placeholder.jpg";

            return (
              <Card
                key={record._id}
                sx={{
                  width: { xs: "100%", md: "30%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 420,
                  flexGrow: 1,
                }}
              >
                <CardMedia component="img" height="200" image={imageUrl} alt={getValue("nombre")} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {getValue("nombre")}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {getValue("tipo")} en {getValue("ciudad")}, {getValue("estado")}
                  </Typography>
                  <Typography variant="body2">
                    {getValue("tamano")} · 🛏 {getValue("recamaras") || "0"} · 🛁 {getValue("banos") || "0"}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" mt={1}>
                    {formatCurrency(getValue("precio"))}
                  </Typography>
                </CardContent>
                <CardActions>
                  <OutlinedButton fullWidth onClick={() => navigate(`/propiedades/${record._id}`)}>
                    Ver más
                  </OutlinedButton>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
