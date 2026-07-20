import { Container } from "@mui/material";

export default function CustomContainer({ children, padding }) {
  return (
    <Container
      sx={{
        maxWidth: { lg: "1110px" },
        paddingInline: { xs: padding, lg: 0 },
      }}
    >
      {children}
    </Container>
  );
}
