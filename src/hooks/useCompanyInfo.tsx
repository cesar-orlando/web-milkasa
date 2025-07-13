import { useEffect, useState } from 'react';
import axios from 'axios';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  image: string;
}

interface CompanyInfo {
  razonSer: string;
  mision: string;
  vision: string;
  valores: string[];
  equipo: TeamMember[];
}

export const useCompanyInfo = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        // Intentar obtener de la API
        const res = await axios.get('https://api.milkasa.virtualvoices.com.mx/api/records/empresa');
        setCompanyInfo(res.data);
      } catch (err) {
        console.error('Error loading company info, using mock data:', err);
        // Datos mock mientras se implementa el endpoint
        setCompanyInfo({
          razonSer: "En Grupo Milkasa, nos dedicamos a brindar servicios inmobiliarios integrales con el más alto estándar de calidad y profesionalismo. Nuestra razón de ser es acompañar a nuestros clientes en cada etapa de su proceso inmobiliario, ya sea compra, venta o renta, ofreciendo soluciones personalizadas que se adapten a sus necesidades específicas.",
          mision: "Ser la empresa líder en servicios inmobiliarios en Michoacán, brindando soluciones integrales y personalizadas que superen las expectativas de nuestros clientes, construyendo relaciones de confianza a largo plazo.",
          vision: "Convertirnos en la referencia principal del mercado inmobiliario en la región, reconocidos por nuestra excelencia en el servicio, innovación tecnológica y compromiso con el desarrollo sostenible de las comunidades.",
          valores: [
            "Transparencia en todas nuestras operaciones",
            "Profesionalismo y ética en cada transacción",
            "Compromiso con la satisfacción del cliente",
            "Innovación constante en nuestros servicios",
            "Responsabilidad social y ambiental",
            "Trabajo en equipo y colaboración"
          ],
          equipo: [
            {
              id: "1",
              name: "Ing. Carlos Milkasa",
              position: "Director General",
              email: "carlos@milkasa.com",
              phone: "(443) 123-4567",
              image: "/team/carlos.jpg"
            },
            {
              id: "2",
              name: "Lic. María Elena Rodríguez",
              position: "Gerente de Ventas",
              email: "maria@milkasa.com",
              phone: "(443) 234-5678",
              image: "/team/maria.jpg"
            },
            {
              id: "3",
              name: "Arq. Juan Pablo Mendoza",
              position: "Asesor Inmobiliario Senior",
              email: "juan@milkasa.com",
              phone: "(443) 345-6789",
              image: "/team/juan.jpg"
            },
            {
              id: "4",
              name: "Lic. Ana Patricia Morales",
              position: "Coordinadora de Marketing",
              email: "ana@milkasa.com",
              phone: "(443) 456-7890",
              image: "/team/ana.jpg"
            },
            {
              id: "5",
              name: "Ing. Roberto Sánchez",
              position: "Especialista en Propiedades Comerciales",
              email: "roberto@milkasa.com",
              phone: "(443) 567-8901",
              image: "/team/roberto.jpg"
            },
            {
              id: "6",
              name: "Lic. Lucía Fernández",
              position: "Asesora Legal",
              email: "lucia@milkasa.com",
              phone: "(443) 678-9012",
              image: "/team/lucia.jpg"
            }
          ]
        });
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchCompanyInfo();
  }, []);

  return { companyInfo, loading };
};