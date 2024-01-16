import { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import FormMarque from './FormMarque';
import TableMarque from './TableMarque';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const AppMarques = () => {
  const [selectedMarque, setSelectedMarque] = useState('');
  const [selectedMarqueId, setSelectedMarqueId] = useState('');
  const handleEditMarque = (marque, marqueId) => {
    setSelectedMarque(marque);
    setSelectedMarqueId(marqueId);
  };

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Voiture', path: '/marques' }, { name: 'Marque' }]} />
      </Box>

      <SimpleCard
        title={
          selectedMarque
            ? `Modifie la marque : ${selectedMarque}`
            : 'Ajout de nouvelle marque de voiture'
        }
      >
        <FormMarque selectedMarque={selectedMarque} selectedMarqueId={selectedMarqueId} />
      </SimpleCard>
      <Box py="12px" />
      <SimpleCard title="Liste marques">
        <TableMarque
          onEditMarque={handleEditMarque}
          selectedMarque={selectedMarque}
          selectedMarqueId={selectedMarqueId}
        />
      </SimpleCard>
    </Container>
  );
};

export default AppMarques;
