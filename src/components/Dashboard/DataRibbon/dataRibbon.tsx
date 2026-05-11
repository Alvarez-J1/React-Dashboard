import { Grid } from "@mui/material";
import DataCard from "@/components/Dashboard/DataCard/DataCard";
import scss from "./DataRibbon.module.scss";

const DataRibbon = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 4, width: "100%", maxWidth: "100%" }} className={scss.DataRibbon}>
      <Grid size={{ xs: 12, sm: 6, md: 3, }}>
        <DataCard 
          title="Total Sales"
          value="462"
          description="The totals of all Datara products in the current financial year"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DataCard
          title="Total Value"
          value="$25,732.53"
          description="The total sales of the current financial year"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DataCard
          title="Avg. Order Value"
          value="$159.30"
          description="The average order value for all sales this current financial year"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DataCard
          title="Conversion rate"
          value="0.61%"
          description="How many pitches become sales"
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;