import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import FeaturesSection from "./components/FeaturesSection";
import DownloadSection from "./components/DownloadSection";
import FaqSection from "./components/FaqSection";
import NewsletterSection from "./components/NewsletterSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <Box component="main" overflow="hidden" bgcolor="white">
      <Navbar />
      <IntroSection />
      <FeaturesSection />
      <DownloadSection />
      <FaqSection />
      <NewsletterSection />
      <FooterSection />
    </Box>
  );
}

export default App;
