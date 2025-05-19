import { Box } from "@mui/material";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/lottie/loadingAnimation.json";

const LoaderLottie = () => {
    console.log("loadingAnimation", loadingAnimation);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="300px"
    >
      <Lottie animationData={loadingAnimation} style={{ width: 150 }} loop />
    </Box>
  );
};

export default LoaderLottie;
