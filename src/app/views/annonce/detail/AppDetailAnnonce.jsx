import { Box, Stack, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import DetailSupp from "./DetailSupp";
import BasicDetailCards from './BasicDetailCards';
import DetailTable from './DetailTable';

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppDetailAnnonce = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Detail Annonce" }]}
        />
      </Box>

      <Stack spacing={3}>
        <BasicDetailCards />
      </Stack>

      <Stack spacing={3}>
        <SimpleCard title="basic">
          <DetailTable />
        </SimpleCard>
      </Stack><br/>

      <Stack spacing={3} className="">
          <DetailSupp />
      </Stack>
    </Container>
  );
};

export default AppDetailAnnonce;
