import {
  Box,
  Icon,
  IconButton,
  styled,
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

const subscribarList = [
  {
    title: "Id",
    value: "1",
  },
  {
    title: "Description",
    value: "Une courte description ici",
  },
  {
    title: "Statut",
    value: "1",
  },
];

const DetailTable = () => {
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              <TableCell align="left" className="text-bold secondary">{subscriber.title}</TableCell>
              <TableCell align="right">{subscriber.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default DetailTable;
