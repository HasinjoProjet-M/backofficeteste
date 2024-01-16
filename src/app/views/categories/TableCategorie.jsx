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

import MenuCategorie from './MenuCategorie';
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

const TableCategorie = ({ onEditCategory, selectedCategory, selectedCategoryId }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const tableData = [
    {
      id_categorie: '1',
      categorie: 'Berline'
    },
    {
      id_categorie: '2',
      categorie: '4 x 4'
    },
    {
      id_categorie: '3',
      categorie: '4 x 2'
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
  const handleEditClick = (categoryName, categoryId) => {
    onEditCategory(categoryName, categoryId);
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
              <TableCell align="left">{cat.categorie}</TableCell>
              <TableCell align="center">
                <MenuCategorie
                  id_categorie={cat.id_categorie}
                  onEditClick={() => handleEditClick(cat.categorie, cat.id_categorie)}
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

export default TableCategorie;
