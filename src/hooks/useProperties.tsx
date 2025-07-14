import { useEffect, useState } from 'react';
import axios from 'axios';

interface PropertyData {
  titulo: string;
  descripcion: string;
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
  ubicacio_n?: string;
  ipo_de_cre_dito_para_el_que_aplica_la_propiedad?: string;
}

interface PropertyRecord {
  _id: string;
  data: PropertyData;
  tableSlug: string;
  c_name: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const useProperties = () => {
  const [properties, setProperties] = useState<PropertyRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get('https://api-virtual-voices.onrender.com/api/records/table/grupo-milkasa/propiedades');
        console.log("res.data", res.data);
        setProperties(res.data.records || []);
      } catch (err) {
        console.error('Error loading properties:', err);
        // Datos mock si la API falla
        setProperties([
          {
            _id: "1",
            data: {
              titulo: "Casa Residencial Las Lomas",
              descripcion: "Hermosa casa en venta ubicada en el exclusivo fraccionamiento Las Lomas. Cuenta con 3 habitaciones, 2.5 baños, cocina integral, sala-comedor amplia y cochera para 2 autos.",
              precio: 2500000,
              archivos: [
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
                "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
                "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
              ],
              direccio_n: "Fraccionamiento Las Lomas",
              taman_o: "8x16",
              tipo: "Casa",
              operacio_n: "Venta",
              ciudad: "Uruapan",
              estado: "Michoacán",
              recamaras: 3,
              ban_os: 2.5,
              estatus: "Activa"
            },
            tableSlug: "propiedades",
            c_name: "grupo-milkasa",
            createdBy: "mock",
            createdAt: "2025-01-01T00:00:00.000Z",
            updatedAt: "2025-01-01T00:00:00.000Z",
            __v: 0
          },
          {
            _id: "2",
            data: {
              titulo: "Departamento Centro Histórico",
              descripcion: "Departamento completamente amueblado en el corazón del centro histórico. Ideal para inversión o residencia. Incluye 2 habitaciones, 1 baño completo y área de estacionamiento.",
              precio: 1200000,
              archivos: [
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
              ],
              direccio_n: "Centro Histórico",
              taman_o: "5x6",
              tipo: "Departamento",
              operacio_n: "Venta",
              ciudad: "Uruapan",
              estado: "Michoacán",
              recamaras: 2,
              ban_os: 1,
              estatus: "Activa"
            },
            tableSlug: "propiedades",
            c_name: "grupo-milkasa",
            createdBy: "mock",
            createdAt: "2025-01-01T00:00:00.000Z",
            updatedAt: "2025-01-01T00:00:00.000Z",
            __v: 0
          },
          {
            _id: "3",
            data: {
              titulo: "Terreno Comercial Zona Industrial",
              descripcion: "Terreno ideal para desarrollo comercial o industrial. Excelente ubicación con acceso a carretera principal y servicios básicos disponibles.",
              precio: 800000,
              archivos: [
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
                "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800"
              ],
              direccio_n: "Zona Industrial",
              taman_o: "10x20",
              tipo: "Terreno",
              operacio_n: "Venta",
              ciudad: "Uruapan",
              estado: "Michoacán",
              recamaras: 0,
              ban_os: 0,
              estatus: "Activa"
            },
            tableSlug: "propiedades",
            c_name: "grupo-milkasa",
            createdBy: "mock",
            createdAt: "2025-01-01T00:00:00.000Z",
            updatedAt: "2025-01-01T00:00:00.000Z",
            __v: 0
          }
        ]);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetch();
  }, []);

  return { properties, loading };
};
