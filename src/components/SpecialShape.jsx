import { Box } from "@mui/material";

export default function SpecialShape({ isRight }) {
  return (
    <Box
      sx={{
        width: isRight
          ? { xs: "300px", sm: "500px", md: "420px", lg: "520px", xl: "750px" }
          : { xs: "300px", sm: "500px", md: "420px", lg: "645px", xl: "870px" },
        height: { xs: "200px", sm: "250px", md: "300px", lg: "350px" },
        borderRadius: isRight
          ? {
              xs: "150px 0 0 150px",
              sm: "125px 0 0 125px",
              md: "150px 0 0 150px",
              lg: "175px 0 0 175px",
            }
          : {
              xs: "0 150px 150px 0",
              sm: "0 125px 125px 0",
              md: "0 150px 150px 0",
              lg: "0 175px 175px 0",
            },
        backgroundColor: "primary.main",
        position: "absolute",
        right: isRight ? 0 : "auto",
        left: !isRight ? 0 : "auto",
        bottom: isRight ? { xs: "auto", md: "0" } : { xs: "auto", md: "0" },
        top: isRight
          ? { xs: "132px", sm: "32%", md: "auto" }
          : { xs: "61.25%", sm: "59%", md: "auto" },
        zIndex: -1,
      }}
    ></Box>
  );
}
