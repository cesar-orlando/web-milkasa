import { useEffect, useState } from 'react';
import axios from 'axios';

interface CustomField {
  key: string;
  label: string;
  value: any;
}

interface PropertyRecord {
  _id: string;
  customFields: CustomField[];
}

export const useProperties = () => {
  const [properties, setProperties] = useState<PropertyRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/records/propiedades');
        setProperties(res.data || []);
      } catch (err) {
        console.error('Error loading properties:', err);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return { properties, loading };
};
