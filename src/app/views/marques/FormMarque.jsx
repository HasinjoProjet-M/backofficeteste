import { Button, Grid, Icon, styled } from '@mui/material';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px'
}));

const FormMarque = ({ selectedMarque, selectedMarqueId }) => {
  const [marque, setMarque] = useState(selectedMarque || '');
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMarque(value);
  };
  const handleSubmit = (event) => {
    if (selectedMarque) {
      console.log(marque + '  modifier ' + selectedMarqueId);
    } else {
      console.log(marque + '  Nouvelle ');
    }
    console.log(marque);
    // console.log("submitted");
    // console.log(event);
  };
  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="Marque"
              label="Nouvelle marque"
              onChange={handleChange}
              value={marque || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Grid>
        </Grid>
        <Button color="primary" variant="contained" type="submit">
          <Icon>{selectedMarque ? 'edit' : 'send'}</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
            {selectedMarque ? 'Modifier' : 'Valider'}
          </Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default FormMarque;
