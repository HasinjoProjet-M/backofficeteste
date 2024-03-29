import { Box, Icon, IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../deconnection';

const ITEM_HEIGHT = 40;

const MenuCategorie = ({ id_categorie, onEditClick, onFormSubmitSuccess }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = async (option) => {
    if (option === 'Modifier') {
      onEditClick();
    } else if (option === 'Liste Marque') {
      const id_categorieParam = id_categorie ? `?categorie_id=${id_categorie}` : '';
      navigate(`/marques${id_categorieParam}`);
    } else {
      const token = sessionStorage.getItem('token');
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      const response = await fetch(
        `https://wsclouditu-production.up.railway.app/api/v1/categories/${id_categorie}`,
        {
          method: 'DELETE',
          headers: headers
        }
      );
      const jsonData = await response.json();
      if (jsonData.status_code === '401') {
        alert(jsonData.message);
        const logoutResult = await logoutUser();
        if (logoutResult.success) {
          navigate('/session/signin');
        } else {
          console.error('Échec de la déconnexion:', logoutResult.message);
          alert(logoutResult.message);
        }
      } else if (jsonData.status_code === '404') {
        alert(jsonData.message);
      }
    }
    onFormSubmitSuccess();
    handleClose();
  };
  return (
    <Box>
      <IconButton
        aria-label="More"
        aria-owns={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Icon>more_vert</Icon>
      </IconButton>

      <Menu
        open={open}
        id="long-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: 200 } }}
      >
        <MenuItem key={0} onClick={() => handleMenuItemClick('Modifier')}>
          <Icon>border_color</Icon>&nbsp;&nbsp;Modifer
        </MenuItem>
        <MenuItem key={1} onClick={() => handleMenuItemClick('Liste Marque')}>
          <Icon>view_list</Icon>&nbsp;&nbsp;Liste Marque
        </MenuItem>
        <MenuItem key={2} onClick={() => handleMenuItemClick('Supprimer')}>
          <Icon>delete</Icon>&nbsp;&nbsp;Supprimer
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MenuCategorie;
