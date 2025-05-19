// 📁 src/pages/Properties.tsx
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useProperties } from "../hooks/useProperties";
import PrimaryButton from "../components/PrimaryButton";
import OutlinedButton from "../components/OutlinedButton";
import LoaderLottie from "../components/LoaderLottie";

interface CustomField {
  key: string;
  value: any;
}

interface Property {
  _id: string;
  customFields: CustomField[];
}

const Properties = () => {
  const [searchParams] = useSearchParams();
  const { properties: allProperties, loading } = useProperties();

  const navigate = useNavigate();

  const ciudad = searchParams.get("ciudad")?.toLowerCase();
  const tipo = searchParams.get("tipo")?.toLowerCase();
  const precio = parseInt(searchParams.get("precio") || "0");

  const filteredProperties = allProperties.filter((record) => {
    const getValue = (key: string) => record.customFields.find((f) => f.key === key)?.value || "";

    const ciudadMatch = ciudad ? getValue("ciudad").toLowerCase().includes(ciudad) : true;
    const tipoMatch = tipo ? getValue("tipo").toLowerCase() === tipo : true;
    const precioMatch = precio ? parseInt(getValue("precio") || "0") <= precio : true;

    return ciudadMatch && tipoMatch && precioMatch;
  });

  const getValue = (record: Property, key: string) => record.customFields.find((f) => f.key === key)?.value || "";

  const formatCurrency = (val: string) =>
    Number(val).toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
      maximumFractionDigits: 0,
    });

      if (loading) return <LoaderLottie />;

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Propiedades disponibles
      </Typography>

      {filteredProperties.length === 0 ? (
        <Box textAlign="center" mt={6}>
          <Typography variant="body1" gutterBottom>
            No se encontraron propiedades con esos filtros.
            <br />
            Intenta ajustar la ubicación, tipo o presupuesto.
          </Typography>
          <PrimaryButton onClick={() => navigate("/propiedades")}>Ver todas las propiedades</PrimaryButton>
        </Box>
      ) : (
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} flexWrap="wrap" gap={4}>
          {filteredProperties.map((record) => {
            const imageUrl = Array.isArray(getValue(record, "archivos"))
              ? getValue(record, "archivos")[0]
              : "/placeholder.jpg";

            return (
              <Card
                key={record._id}
                sx={{
                  width: { xs: "100%", md: "30%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 420,
                }}
              >
                <CardMedia component="img" height="200" image={imageUrl} alt={getValue(record, "nombre")} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {getValue(record, "nombre")}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {getValue(record, "tipo")} en {getValue(record, "ciudad")}, {getValue(record, "estado")}
                  </Typography>
                  <Typography variant="body2">
                    {getValue(record, "tamano")} · 🛏 {getValue(record, "recamaras") || "0"} · 🛁{" "}
                    {getValue(record, "banos") || "0"}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" mt={1}>
                    {formatCurrency(getValue(record, "precio"))}
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
      )}
    </Container>
  );
};

export default Properties;
