import { Button, Card, styled } from '@mui/material';
import { convertHexToRGB } from 'app/utils/utils';

const CardRoot = styled(Card)(({ theme }) => ({
  marginBottom: '24px',
  padding: '24px !important',
  [theme.breakpoints.down('sm')]: { paddingLeft: '16px !important' },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  position: 'relative',
  padding: '24px !important',
  background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const Paragraph = styled('p')(({ theme }) => ({
  margin: 0,
  paddingTop: '24px',
  paddingBottom: '24px',
  color: theme.palette.text.secondary,
}));

const UpgradeCard = () => {
  return (
    <CardRoot>
      <StyledCard>

        <Paragraph>
          Explorez davantage de détails <br />
          sur toutes les <b>Activités</b> dans ce site web.
        </Paragraph>

        <img style={{height: '65px'}} src="/assets/images/illustrations/about.png" alt="upgrade" /><br />

        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{ textTransform: 'uppercase' }}
        >
          voir plus
        </Button>
      </StyledCard>
    </CardRoot>
  );
};

export default UpgradeCard;
