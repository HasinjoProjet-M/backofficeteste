import { Button, Grid, Icon, styled } from '@mui/material';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px'
}));

const FormCategorie = ({ selectedCategory, selectedCategoryId }) => {
  const [categorie, setCategorie] = useState(selectedCategory || '');

  const handleChange = (event) => {
    const { value } = event.target;
    setCategorie(value);
  };

  const handleSubmit = (event) => {
    if (selectedCategory) {
      console.log(categorie + '  modifier ' + selectedCategoryId);
    } else {
      console.log(categorie + '  nouvelle ');
    }
    setCategorie('');
  };
  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="Categorie"
              label={selectedCategory ? 'Modifier la catégorie' : 'Nouvelle catégorie'}
              onChange={handleChange}
              value={categorie || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Grid>
        </Grid>
        <Button color="primary" variant="contained" type="submit">
          <Icon>{selectedCategory ? 'edit' : 'send'}</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
            {selectedCategory ? 'Modifier' : 'Valider'}
          </Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default FormCategorie;
