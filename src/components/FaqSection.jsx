import { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  accordionClasses,
  AccordionSummary,
  AccordionDetails,
  accordionDetailsClasses,
  Fade,
  Divider,
  Button,
} from "@mui/material";

import CustomContainer from "./CustomContainer";
import ExpandMoreIcon from "../assets/images/icon-arrow.svg?react";

const questions = [
  {
    q: "What is Bookmark?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    q: "How can I request a new browser?",
    a: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    q: "Is there a mobile app?",
    a: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    q: "What about other Chromium browsers?",
    a: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleChange = (index) => (event, isExpanded) => {
    setExpandedIndex(isExpanded ? index : null);
  };
  return (
    <Box
      component="section"
      paddingBlock={{ xs: "140px 122.7px", sm: "158px 150px" }}
    >
      <CustomContainer padding="2rem">
        <Box
          sx={{
            maxWidth: "520px",
            marginInline: "auto",
            textAlign: "center",
            paddingBlockEnd: { xs: "44px", sm: "58px" },
          }}
        >
          <Typography
            variant="h2"
            fontSize={{ xs: "1.5rem", sm: "2rem" }}
            fontWeight={500}
            marginBlockEnd={{ xs: "18px", sm: "24px" }}
          >
            {"Frequently Asked Questions"}
          </Typography>
          <Typography
            variant="body1"
            fontSize={{ xs: "15.5px", sm: "18px" }}
            color="text.secondary"
          >
            {
              "Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
            }
          </Typography>
        </Box>
        <Divider
          sx={{
            borderColor: "background.paper",
            maxWidth: "540px",
            marginInline: "auto",
            display: { xs: "none", sm: "block" },
          }}
        />
        <Box
          sx={{
            maxWidth: "540px",
            marginInline: "auto",
          }}
        >
          {questions.map((question, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <Accordion
                key={question.q}
                expanded={isExpanded}
                onChange={handleChange(index)}
                slots={{ transition: Fade }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={[
                  isExpanded
                    ? {
                        [`& .${accordionClasses.region}`]: {
                          height: "auto",
                        },
                        [`& .${accordionDetailsClasses.root}`]: {
                          display: "block",
                        },
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        "&.Mui-expanded": {
                          marginBlock: "0",
                          "&::before": {
                            opacity: 1,
                          },
                        },
                        "&::before": {
                          backgroundColor: "background.paper",
                        },
                      }
                    : {
                        [`& .${accordionClasses.region}`]: {
                          height: 0,
                        },
                        [`& .${accordionDetailsClasses.root}`]: {
                          display: "none",
                        },
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        "&::before": {
                          backgroundColor: "background.paper",
                        },
                      },
                ]}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${index + 1}-content`}
                  id={`$panel-${index + 1}-header`}
                  sx={{
                    paddingInline: { xs: "0", sm: "0 22px" },
                    minHeight: "66px",
                    "&:hover": { color: "primary.light" },
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      "&.Mui-expanded": {
                        "& path": {
                          stroke: "hsl(0, 94%, 66%)",
                        },
                      },
                    },
                  }}
                >
                  <Typography
                    component="span"
                    fontSize={{ xs: "15px", sm: "18px" }}
                    lineHeight={1}
                  >
                    {question.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ padding: { xs: "8px 0 27px", sm: "26px 0 34px" } }}
                >
                  <Typography
                    fontSize={{ xs: "15.5px", sm: "16.25px" }}
                    lineHeight={2}
                    color="text.secondary"
                  >
                    {question.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
        <Divider
          sx={{
            borderColor: "background.paper",
            maxWidth: "540px",
            marginInline: "auto",
          }}
        />
        <Box textAlign="center">
          <Button
            disableRipple
            sx={{
              width: "114px",
              height: "48px",
              marginBlockStart: { xs: "3rem", sm: "3.25rem" },
              backgroundColor: "primary.main",
              color: "background.default",
              border: "2px solid",
              borderColor: "primary.main",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.main",
              },
            }}
          >
            {"More Info"}
          </Button>
        </Box>
      </CustomContainer>
    </Box>
  );
}
