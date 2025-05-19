import { useParams } from "react-router-dom";
import { useProperties } from "../hooks/useProperties";
import { Box, Typography, Container, Chip, Stack, Divider, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import LoaderLottie from "../components/LoaderLottie";
import ContactSuccess from "../components/ContactSuccess";

const PropertyDetails = () => {
  const { id } = useParams();
  const { properties, loading } = useProperties();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const property = properties.find((p) => p._id === id);
  const getValue = (key: string) => property?.customFields.find((f) => f.key === key)?.value || "";

  const [mainImage, setMainImage] = useState<string>("/placeholder.jpg");

  useEffect(() => {
    if (property) {
      const archivos = getValue("archivos");
      const imgs: string[] = Array.isArray(archivos) ? archivos : [];
      if (imgs.length > 0) setMainImage(imgs[0]);
    }
  }, [property]);

  const archivos = getValue("archivos");
  const images: string[] = Array.isArray(archivos) ? archivos : [];

  if (loading) return <LoaderLottie />;
  if (!property) return <Typography>Propiedad no encontrada.</Typography>;

  return (
    <Container sx={{ py: 6 }}>
      {/* Título */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {getValue("nombre")}
      </Typography>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2} mb={4} position="relative">
        {/* Imagen principal (con flechas en móvil) */}
        <Box
          sx={{
            flex: 7,
            aspectRatio: "16/9",
            borderRadius: 2,
            overflow: "hidden",
            border: "1px solid #ddd",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={mainImage}
            alt="Imagen principal"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => setLightboxOpen(true)}
          />

          {/* Botón anterior (solo en móvil) */}
          <Box
            onClick={() => {
              const i = images.findIndex((img) => img === mainImage);
              if (i > 0) setMainImage(images[i - 1]);
            }}
            sx={{
              display: { xs: "flex", md: "none" },
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(0,0,0,0.5)",
              color: "#fff",
              borderRadius: "50%",
              width: 32,
              height: 32,
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            ‹
          </Box>

          {/* Botón siguiente (solo en móvil) */}
          <Box
            onClick={() => {
              const i = images.findIndex((img) => img === mainImage);
              if (i < images.length - 1) setMainImage(images[i + 1]);
            }}
            sx={{
              display: { xs: "flex", md: "none" },
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(0,0,0,0.5)",
              color: "#fff",
              borderRadius: "50%",
              width: 32,
              height: 32,
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            ›
          </Box>
        </Box>

        {/* Miniaturas tipo grid (solo desktop) */}
        <Box
          flex={5}
          display={{ xs: "none", md: "grid" }}
          gridTemplateColumns="1fr 1fr"
          gap={1}
          maxHeight={400}
          overflow="auto"
          sx={{
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": { width: 6 },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ccc",
              borderRadius: 6,
            },
          }}
        >
          {images.map((imgUrl, index) => (
            <Box
              key={index}
              component="img"
              src={imgUrl}
              alt={`Imagen ${index + 1}`}
              onClick={() => setMainImage(imgUrl)}
              sx={{
                width: "100%",
                height: 100,
                objectFit: "cover",
                borderRadius: 1,
                border: mainImage === imgUrl ? "2px solid #ba923f" : "1px solid #ddd",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  opacity: 1,
                  border: "2px solid #ba923f",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Etiquetas */}
      <Stack direction="row" spacing={2} mt={3}>
        <Chip label={getValue("tipo")} />
        <Chip label={getValue("operacion")} />
        <Chip label={getValue("estatus")} />
      </Stack>

      {/* Precio y características clave */}
      <Typography variant="h5" fontWeight="bold" mt={4}>
        {Number(getValue("precio")).toLocaleString("es-MX", {
          style: "currency",
          currency: "MXN",
        })}
      </Typography>

      <Typography variant="body1" color="text.secondary" mt={1}>
        {getValue("tamano")} · 🛏 {getValue("recamaras") || 0} · 🛁 {getValue("banos") || 0}
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Layout con sección de contacto a la derecha */}
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        {/* Izquierda: descripción + detalles */}
        <Box flex={2}>
          <Typography variant="h6" gutterBottom>
            Descripción
          </Typography>
          <Typography>{getValue("descripcion")}</Typography>

          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Detalles
            </Typography>
            <Typography>
              📍 {getValue("direccion")} <br />
              🏙 {getValue("ciudad")}, {getValue("estado")} <br />
              📐 Superficie Total: {getValue("superficie_total")} m²
              <br />
              🏗 Construcción: {getValue("superficie_construida")} m²
            </Typography>
          </Box>
        </Box>

        {/* Derecha: Card de contacto estilo Inmuebles24 */}
        <Box
          flex={1}
          sx={{
            border: "1px solid #ddd",
            borderRadius: 2,
            p: 3,
            bgcolor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          {showSuccess ? (
            <ContactSuccess />
          ) : (
            <>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Contáctate por esta propiedad
              </Typography>
              <Typography variant="body2" mb={2} color="text.secondary">
                ¿Quieres más información? Déjanos tus datos y te contactamos en minutos.
              </Typography>

              <Box mb={2}>
                <input
                  placeholder="Tu nombre"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                  }}
                />
              </Box>

              <Box mb={2} display="flex" gap={1}>
                <Box
                  sx={{
                    minWidth: 70,
                    px: 2,
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    borderRadius: 6,
                    bgcolor: "#f1f1f1",
                  }}
                >
                  🇲🇽 +52
                </Box>
                <input
                  placeholder="Tu teléfono"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                  }}
                />
              </Box>

              <Box mb={2}>
                <textarea
                  placeholder={`Hola, me interesa la propiedad "${getValue("nombre")}"`}
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    resize: "vertical",
                  }}
                />
              </Box>

              <PrimaryButton fullWidth onClick={() => setShowSuccess(true)}>
                Contactar
              </PrimaryButton>
            </>
          )}
        </Box>
      </Box>

      {/* Modal ampliado */}
      <Modal open={lightboxOpen} onClose={() => setLightboxOpen(false)}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0,0,0,0.95)",
            overflow: "hidden",
          }}
        >
          {/* Imagen con transición */}
          <Box
            key={mainImage}
            component="img"
            src={mainImage}
            alt="Vista ampliada"
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "90vw", md: "80vw" },
              maxHeight: { xs: "80vh", sm: "90vh" },
              objectFit: "contain",
              borderRadius: 2,
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              opacity: 0,
              animation: "fadeIn 0.4s ease forwards",
              mx: "auto",
            }}
          />

          {/* Botón cerrar */}
          <Box
            onClick={() => setLightboxOpen(false)}
            sx={{
              position: "absolute",
              top: "5%",
              right: "10%",
              zIndex: 20,
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "1.5rem",
              fontWeight: "bold",
              cursor: "pointer",
              backdropFilter: "blur(4px)",
              "&:hover": {
                background: "rgba(255,255,255,0.2)",
              },
            }}
          >
            ✕
          </Box>

          {/* Flechas */}
          {images.length > 1 && (
            <>
              {/* Flecha izquierda */}
              <Box
                onClick={() => {
                  const i = images.findIndex((img) => img === mainImage);
                  if (i > 0) setMainImage(images[i - 1]);
                }}
                sx={{
                  position: "absolute",
                  left: "10%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                  fontSize: "2.5rem",
                  cursor: "pointer",
                  zIndex: 10,
                  userSelect: "none",
                  "&:hover": { color: "#ba923f" },
                }}
              >
                ‹
              </Box>

              {/* Flecha derecha */}
              <Box
                onClick={() => {
                  const i = images.findIndex((img) => img === mainImage);
                  if (i < images.length - 1) setMainImage(images[i + 1]);
                }}
                sx={{
                  position: "absolute",
                  right: "10%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                  fontSize: "2.5rem",
                  cursor: "pointer",
                  zIndex: 10,
                  userSelect: "none",
                  "&:hover": { color: "#ba923f" },
                }}
              >
                ›
              </Box>
            </>
          )}

          {/* Contador centrado abajo */}
          <Box
            position="absolute"
            bottom={"5%"}
            left="50%"
            bgcolor="rgba(0,0,0,0.6)"
            color="#fff"
            px={2}
            py={0.5}
            borderRadius={4}
            fontSize="0.875rem"
            sx={{
              transform: "translateX(-50%)",
            }}
          >
            {images.findIndex((img) => img === mainImage) + 1} de {images.length}
          </Box>

          {/* Animación fade */}
          <style>
            {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}
          </style>
        </Box>
      </Modal>
    </Container>
  );
};

export default PropertyDetails;
