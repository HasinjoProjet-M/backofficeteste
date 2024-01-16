import Box from '@mui/material/Box';
import { Button, Grid, Icon } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Span } from 'app/components/Typography';
import { useState } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Tableliste from './Tableliste';

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

const tableDataCategorie = [
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

const FormListModels = () => {
  const [marque_id, setMarque_id] = useState('');
  const [tabMarques, setTabMarques] = useState(tableData);
  const [tabCategories, setTabCategories] = useState(tableDataCategorie);
  const [categorie_id, setCategorie_id] = useState('');
  const [resultat, setResultat] = useState([]);

  const handleMarqueChange = (event) => {
    setTabMarques(tableData);
    setTabCategories(tableDataCategorie);
    setResultat([]);
    setMarque_id(event.target.value);
  };
  const handleCategorieChange = (event) => {
    setCategorie_id(event.target.value);
  };
  const handleSubmit = (event) => {
    console.log('categorie ' + categorie_id + '   marque ' + marque_id);
  };

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Marque</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={marque_id}
                  label="Marque"
                  onChange={handleMarqueChange}
                >
                  {tabMarques.map((item) => (
                    <MenuItem value={item.id_marque}>{item.marque}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categorie_id}
                  label="Categorie"
                  onChange={handleCategorieChange}
                >
                  {tabCategories.map((item) => (
                    <MenuItem value={item.id_categorie}>{item.categorie}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Box py="7px" />
        <Button color="info" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Voir</Span>
        </Button>
      </ValidatorForm>
      <Box py="7px" />
      <Tableliste tab={resultat} />
    </div>
  );
};

export default FormListModels;
