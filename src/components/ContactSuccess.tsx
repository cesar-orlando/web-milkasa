// src/components/ContactSuccess.tsx
import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import successAnimation from "../assets/lottie/contactSuccess.json";
import { useState, useRef, useEffect } from "react";
import type { LottieRefCurrentProps } from "lottie-react";

const ContactSuccess = () => {
  const [showMessage, setShowMessage] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2); // Velocidad al doble
    }
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={4}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={successAnimation}
        style={{ width: 180 }}
        loop={false}
        onComplete={() => setShowMessage(true)}
      />
      {showMessage && (
        <Typography variant="h6" color="success.main" mt={2}>
          ¡Información enviada correctamente!
        </Typography>
      )}
    </Box>
  );
};

export default ContactSuccess;
