import { TAccordion } from "@/types/elements";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function AccordionTab({
  title,
  description,
  tab,
  expanded,
  handleChange,
}: TAccordion & { tab: number; expanded: any; handleChange: any }) {
  return (
    <Accordion
      expanded={expanded === `panel${tab}`}
      onChange={handleChange(`panel${tab}`)}
      sx={{ width: "50%", boxShadow: "none", mb: 2, ":before": { opacity: 0 } }}
    >
      <AccordionSummary
        expandIcon={
          <MdOutlineKeyboardArrowDown size={25} color="rgba(0, 170, 161, 1)" />
        }
        aria-controls={`panel${tab}bh-content`}
        id={`panel${tab}bh-header`}
        sx={{ background: "rgba(223, 241, 240, 1)", borderRadius: "5px" }}
      >
        <Typography
          component="h5"
          variant="h5"
          sx={{
            width: "75%",
            flexShrink: 0,
            textTransform: "capitalize",
            color: "rgba(34, 34, 34, 1)",
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          background: "rgba(242, 248, 247, 1)",
          p: 2.5,
          borderRadius: "0 0 8px 8px",
          mt: expanded === `panel${tab}` ? -0.3 : 0,
        }}
      >
        <Typography
          component="p"
          fontSize="15px"
          lineHeight="22.5px"
          color="rgba(102, 102, 102, 1)"
          fontWeight={400}
          sx={{ lineHeight: "150%" }}
        >
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionTab;
