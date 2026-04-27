import { Grid, Paper, Typography } from "@mui/material";
import DataChart from "@/components/DataChart/DataChart";
import { doughnutChartData } from "@/components/mockData";
import scss from "./TransactionsBottomRow.module.scss";

const TransactionsBottomRow = () => {
  return (
    <Grid container spacing={2} className={scss.bottomRow}>
      {[1, 2, 3, 4].map((item) => (
        <Grid key={item} size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper className={scss.dataCard}>
            <Typography>Transactions per user type</Typography>
            <DataChart type="doughnut" data={doughnutChartData} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default TransactionsBottomRow;