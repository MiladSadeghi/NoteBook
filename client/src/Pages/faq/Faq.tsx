import AccordionTab from "@/components/Accordion/Accordion";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";

function Faq() {
  document.title = "NoteBook - Faq";
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const accordionsContent: any = [
    {
      title: "is there have any option for write blog",
      description:
        "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about",
    },
    {
      title: "can i change my plan later?",
      description:
        "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about",
    },
    {
      title: "Did you come here for something in particular?",
      description:
        "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about",
    },
    {
      title: "is there have any option for write blog?",
      description:
        "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about",
    },
    {
      title: "something in particular or just general Riker-bashing?",
      description:
        "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about",
    },
  ];

  return (
    <Box sx={{ mt: "144px" }}>
      <Container maxWidth="xl" sx={{ mb: 12.5 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography component="h1" variant="h1" mb={2}>
            <Typography
              component="span"
              color="#fff"
              fontWeight={600}
              fontSize={21}
              px={0.3}
              mr={1}
              sx={{ backgroundColor: "#00AAA1" }}
            >
              Frequently
            </Typography>
            Asked Question
          </Typography>
          <Typography component="p" fontSize={15} color="#666666" mb={5}>
            Did you come here for something in particular or just general
            Riker-bashing? And blowing
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column">
          {accordionsContent.map((accordion: any, index: number) => (
            <AccordionTab
              key={index}
              {...accordion}
              tab={index + 1}
              expanded={expanded}
              handleChange={handleChange}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Faq;
