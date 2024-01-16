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

import MenuMarque from './MenuMarque';
import { useState } from 'react';

const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } }
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } }
  }
}));

const TableMarque = ({ onEditMarque, selectedMarque, selectedMarqueId }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const tableData = [
    {
      id_marque: '1',
      marque: 'Mazda'
    },
    {
      id_marque: '2',
      marque: 'Ford'
    },
    {
      id_marque: '3',
      marque: 'Toyota'
    },
    {
      id_marque: '4',
      marque: 'Nissan'
    },
    {
      id_marque: '5',
      marque: 'Honda'
    }
  ];
  const [data, setData] = useState(tableData);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleEditClick = (marqueName, marqueId) => {
    onEditMarque(marqueName, marqueId);
  };
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((cat, index) => (
            <TableRow key={index}>
              <TableCell align="left">{cat.marque}</TableCell>
              <TableCell align="center">
                <MenuMarque
                  id_marque={cat.id_marque}
                  onEditClick={() => handleEditClick(cat.marque, cat.id_marque)}
                />
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
        count={data.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
};

export default TableMarque;
