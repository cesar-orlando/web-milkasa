// 📁 src/pages/Properties.tsx
import { Box, Typography, Container, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useProperties } from "../hooks/useProperties";
import PrimaryButton from "../components/PrimaryButton";
import OutlinedButton from "../components/OutlinedButton";
import LoaderLottie from "../components/LoaderLottie";
import { useState } from "react";

interface PropertyData {
  titulo: string;
  descripcio_n: string;
  precio: number;
  archivos: string | string[];
  direccio_n: string;
  taman_o: string;
  tipo: string;
  operacio_n: string;
  ciudad: string;
  estado: string;
  recamaras: number;
  ban_os: number;
  estatus: string;
  descripcion?: string; // Added for new structure
}

interface Property {
  _id: string;
  data: PropertyData;
}

const Properties = () => {
  const [searchParams] = useSearchParams();
  const { properties: allProperties, loading } = useProperties();
  const navigate = useNavigate();
  const location = useLocation();

  const ciudad = searchParams.get("ciudad")?.toLowerCase();
  const tipo = searchParams.get("tipo")?.toLowerCase();
  const precio = parseInt(searchParams.get("precio") || "0");

  // Filtrar según la ruta
  let filteredProperties = allProperties.filter((record) => {
    const ciudadMatch = ciudad ? record.data.ciudad.toLowerCase().includes(ciudad) : true;
    const tipoMatch = tipo ? record.data.tipo.toLowerCase() === tipo : true;
    const precioMatch = precio ? record.data.precio <= precio : true;
    return ciudadMatch && tipoMatch && precioMatch;
  });

  // Filtro robusto para operación
  const getOperacion = (data: any) => (data.operacion || data.operacio_n || "").toLowerCase();
  if (location.pathname === "/venta") {
    filteredProperties = filteredProperties.filter((record) => getOperacion(record.data) === "venta");
  } else if (location.pathname === "/renta") {
    filteredProperties = filteredProperties.filter((record) => getOperacion(record.data) === "renta");
  }

  // Título dinámico
  let pageTitle = "Propiedades disponibles";
  if (location.pathname === "/venta") pageTitle = "Propiedades en Venta";
  if (location.pathname === "/renta") pageTitle = "Propiedades en Renta";

  const formatCurrency = (val: string) =>
    Number(val).toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
      maximumFractionDigits: 0,
    });

  // Hero visual
  const heroBg =
    location.pathname === "/venta"
      ? "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      : "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80";

  if (loading) return <LoaderLottie />;

  console.log("filteredProperties -->", filteredProperties);

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* Hero con imagen de fondo y overlay */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 220, md: 340 },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 0,
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, background: `url(${heroBg}) center/cover`, zIndex: 1 }} />
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.55)", zIndex: 2 }} />
        <Typography
          variant="h2"
          sx={{
            position: "relative",
            zIndex: 3,
            color: "#fff",
            fontWeight: 900,
            fontSize: { xs: 32, md: 56 },
            textAlign: "center",
            width: "100%",
          }}
        >
          {pageTitle}
        </Typography>
        {/* Logo superpuesto */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            bottom: -60,
            transform: "translateX(-50%)",
            zIndex: 10,
            bgcolor: "#fff",
            borderRadius: 3,
            boxShadow: 4,
            p: 1.5,
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Box
            component="img"
            src="/logo-grupo-milkasa.png"
            alt="Grupo Milkasa logo"
            sx={{ width: 100, height: 100, objectFit: "contain" }}
          />
        </Box>
      </Box>
      {/* Grid de propiedades */}
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2, pb: 10, mt: 10 }}>
        {loading ? (
          <LoaderLottie />
        ) : filteredProperties.length === 0 ? (
          <Box textAlign="center" mt={6}>
            <Typography variant="body1" gutterBottom>
              No se encontraron propiedades con esos filtros.
              <br />
              Intenta ajustar la ubicación, tipo o presupuesto.
            </Typography>
            <PrimaryButton onClick={() => navigate("/propiedades")}>Ver todas las propiedades</PrimaryButton>
          </Box>
        ) : (
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 4 }}>
            {filteredProperties.map((record, idx) => {
              const rawArchivos = record.data.archivos;
              let imageUrl = Array.isArray(rawArchivos)
                ? rawArchivos[0]
                : typeof rawArchivos === "string"
                ? rawArchivos.split("\n")[0]
                : "";
              // Limpieza de falsos valores
              if (!imageUrl || ["", "null", "undefined", "/placeholder.jpg"].includes(imageUrl.trim().toLowerCase())) {
                imageUrl = "";
              }
              const showPlaceholder = !imageUrl;
              return (
                <Box
                  key={record._id}
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: 3,
                    boxShadow: 3,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 420,
                    height: 420,
                  }}
                >
                  {showPlaceholder ? (
                    <Box sx={{ width: "100%", height: 180, bgcolor: "#23232b", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                      <Box sx={{ width: 68, height: 68, borderRadius: "50%", bgcolor: "#23232b", display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
                        <Box component="img" src="/logo-grupo-milkasa.png" alt="Logo Grupo Milkasa" sx={{ width: 48, height: 48, filter: 'invert(1)', opacity: 0.85 }} />
                      </Box>
                      <Typography color="#e0e0e0" fontSize={15} fontWeight={500} textAlign="center">Sin imagen disponible</Typography>
                    </Box>
                  ) : (
                    <Box
                      component="img"
                      src={imageUrl}
                      alt={record.data.titulo}
                      sx={{ width: "100%", height: 180, objectFit: "cover" }}
                      onError={e => {
                        e.currentTarget.src = "/logo-grupo-milkasa.png";
                        e.currentTarget.alt = "Sin imagen disponible";
                        e.currentTarget.style.background = "#f3f3f3";
                        e.currentTarget.style.objectFit = "contain";
                      }}
                    />
                  )}
                  <Box
                    sx={{
                      bgcolor: "#7c3aed",
                      color: "#fff",
                      p: 2,
                      textAlign: "center",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6" fontWeight={900} sx={{ mb: 1, fontSize: 22, lineHeight: 1.1 }}>
                      {record.data.titulo}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 15,
                        mb: 2,
                        color: "#fff",
                        opacity: 0.92,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        minHeight: 44,
                        flex: 1,
                        lineClamp: 2,
                      }}
                    >
                      {record.data.descripcion || ""}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#fff",
                        color: "#7c3aed",
                        fontWeight: 900,
                        borderRadius: 2,
                        px: 4,
                        py: 1,
                        fontSize: 16,
                        boxShadow: 1,
                        mt: "auto",
                        alignSelf: "center",
                        "&:hover": { bgcolor: "#ede7f6" },
                      }}
                      onClick={() => navigate(`/propiedades/${record._id}`)}
                    >
                      + INFO
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Properties;
