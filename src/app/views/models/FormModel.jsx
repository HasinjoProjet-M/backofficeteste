import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Autocomplete,
  styled
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px'
}));

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
const FormModel = () => {
  const [state, setState] = useState({ date: new Date() });
  const { model } = state;
  const [tabMaques, setTabMarques] = useState(tableData);
  const [tabCategories, setTabCategories] = useState(tableDataCategorie);
  const [marque_id, setMarque_id] = useState('');
  const [categorie_id, setCategorie_id] = useState('');

  const handleChange2 = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleMarqueChange = (event) => {
    setMarque_id(event.target.value);
  };
  const handleCategorieChange = (event) => {
    setCategorie_id(event.target.value);
  };
  const handleSubmit = (event) => {
    console.log(marque_id + ' c ' + categorie_id + '  m ' + model);
    // console.log("submitted");
    // console.log(event);
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
                  {tabMaques.map((item) => (
                    <MenuItem value={item.id_marque}>{item.marque}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box py="12px" />
            <TextField
              type="text"
              name="model"
              label="Model"
              onChange={handleChange2}
              value={model || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />
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
        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Valider</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default FormModel;
