import { Box, Icon, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppListeannees from '../../models/listesannees/AppListeannees';
const options = ['Ajoute année', 'Liste annee'];
const ITEM_HEIGHT = 20;

const MenuListModel = ({ id_model, model }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [affmodel, setAffmodel] = useState(model);
  const [affmodelId, setAffModelId] = useState(id_model);
  const [appListeanneesOpen, setAppListeanneesOpen] = useState(false);

  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  console.log(`id_model reçu  : ${id_model}`);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const handleMenuItemClick = (option) => {
    if (option === 'Liste annee') {
      console.log('Liste annee');
      setAppListeanneesOpen(true);
    } else if (option === 'Ajoute année') {
    }
    handleClose();
  };
  const handleAppListeanneesClose = () => {
    setAppListeanneesOpen(false);
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
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={() => handleMenuItemClick(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      {appListeanneesOpen && (
        <AppListeannees
          model={affmodel}
          modelId={affmodelId}
          statusOpen={true}
          onClose={handleAppListeanneesClose}
        />
      )}
    </Box>
  );
};

export default MenuListModel;
