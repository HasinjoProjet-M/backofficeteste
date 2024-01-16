import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, Card, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import { convertHexToRGB } from 'app/utils/utils';

import {
  Box,
  Icon,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const voiture = [
  {
    title: "Matricule",
    value: "1234TBE",
  },
  {
    title: "Kilomatrage",
    value: "56,000.00 km",
  },
  {
    title: "Marque",
    value: "Toyota",
  },
  {
    title: "Categorie",
    value: "Sedan",
  },
  {
    title: "Serie",
    value: "2020",
  },
  {
    title: "Carburant",
    value: "Essence",
  },
];

const proprietes = [
  {
    title: "Pneu",
    value: "Michelin x18",
  },
  {
    title: "Place",
    value: "Cuire Blinx x6",
  },
];

const AccordionRoot = styled("div")(({ theme }) => ({
  width: "100%",
  "& .heading": {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  position: 'relative',
  padding: '24px !important',
  background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

export default function DetailSupp() {
  return (
    <AccordionRoot>
      <Accordion>
        <AccordionSummary
          id="panel1a-header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography className="heading"><sub style={{ paddingRight: '5px' }}><Icon>{"drive_eta"}</Icon></sub> Voiture</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <StyledTable>
            <TableBody>
              {voiture.map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell align="left" className="text-bold secondary">{subscriber.title}</TableCell>
                  <TableCell align="right">{subscriber.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          id="panel1a-header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography className="heading"><sub style={{ paddingRight: '1%' }}><Icon>{"info_outline"}</Icon></sub> Propriete</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <StyledTable>
            <TableBody>
              {proprietes.map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell align="left" className="text-bold secondary">{subscriber.title}</TableCell>
                  <TableCell align="right">{subscriber.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          id="panel1a-header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography className="heading"><sub style={{ paddingRight: '5px' }}><Icon>{"collections"}</Icon></sub> Images</Typography>
        </AccordionSummary>

        <AccordionDetails> 
          <Grid container spacing={3} style={{ paddingLeft: '2%', marginTop: '2px'}}>
          {voiture.map((subscriber, index) => (
              <StyledCard col={3} md={3} style={{ marginLeft: '1%' }}>
                <img src="/assets/images/illustrations/upgrade.svg" alt="upgrade" />
              </StyledCard>
          ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </AccordionRoot>
  );
}
