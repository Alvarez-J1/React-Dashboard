import scss from "./TransactionsPerDay.module.scss";
import { Card, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DataChart from "@/components/DataChart/DataChart";
import { lineChartData } from "@/components/mockData";

const TransactionsPerDay = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={2} className={scss.wrapper}>
      <Grid size={12} sx={{ width: "100%", minWidth: 0 }}>
        <Paper className={scss.transactions} sx={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }}>
        <div className={scss.chart}>
          <Typography>Transactions per day</Typography>
          <DataChart type="line" data={lineChartData} />
        </div>

        <div className={scss.cardWrapper}>
          <Card className={scss.card} variant="outlined">
            <div className={scss.cardTitle}>
              <Typography>Total Products</Typography>
            </div>

            <div className={scss.cardValue}>
              <Typography>1.275</Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color={theme.palette.success.main}
              >
                428.7%
              </Typography>
            </div>
          </Card>

          <Card className={scss.card} variant="outlined">
            <div className={scss.cardTitle}>
              <Typography>Buy-to-detail</Typography>
            </div>

            <div className={scss.cardValue}>
              <Typography>4.40%</Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color={theme.palette.success.main}
              >
                899.4%
              </Typography>
            </div>
          </Card>

          <Card className={scss.card} variant="outlined">
            <div className={scss.cardTitle}>
              <Typography>Refunds</Typography>
            </div>

            <div className={scss.cardValue}>
              <Typography>0</Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color={theme.palette.success.main}
              >
                0
              </Typography>
            </div>
          </Card>
        </div>
      </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionsPerDay;