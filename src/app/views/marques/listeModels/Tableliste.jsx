import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';

import MenuListModel from './MenuListModel';
import { useState } from 'react';

const tableData = [
  {
    id_categorie: '1',
    categorie: 'Berline',
    marque: 'Ford',
    model: 'FRGI'
  },
  {
    id_categorie: '2',
    categorie: '4 x 4',
    marque: 'Ford',
    model: 'T9'
  },
  {
    id_categorie: '3',
    categorie: '4 x 4',
    marque: 'Ford',
    model: 'T6'
  }
];

const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } }
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } }
  }
}));

const Tableliste = (props) => {
  const [resultat, setResultat] = useState(tableData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Marque</TableCell>
            <TableCell align="center">Categorie</TableCell>
            <TableCell align="center">Model</TableCell>
            <TableCell align="center">Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultat
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((cat, index) => (
              <TableRow key={index}>
                <TableCell align="center">{cat.marque}</TableCell>
                <TableCell align="center">{cat.categorie}</TableCell>
                <TableCell align="center">{cat.model}</TableCell>
                <TableCell align="center">
                  <MenuListModel id_model={cat.id_categorie} model={cat.model} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={resultat.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
};

export default Tableliste;
