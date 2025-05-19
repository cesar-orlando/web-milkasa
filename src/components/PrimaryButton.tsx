import { Button } from "@mui/material";

const PrimaryButton = (props: any) => {
  return (
    <Button
      variant="contained"
      sx={{
        mt: 2,
        bgcolor: "#ba923f",
        "&:hover": { bgcolor: "#a77f30" },

        ...props.sx,
      }}
      {...props}
    />
  );
};

export default PrimaryButton;
