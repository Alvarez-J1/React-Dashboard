import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import scss from "./DataCard.module.scss";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
};

const DataCard = ({ title, value, description }: DataCardProps) => {
  return (
    <Paper  className={scss.dataCard}>
      <div className={scss.header}>
        <Typography sx={{ fontSize: "1.25rem" }} color="lightslategrey">
          {title}
        </Typography>

        <Tooltip
          title={
            <Typography sx={{ fontSize: 16 }}>
              {description} which is {value}
            </Typography>
          }
        >
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>

      <Typography sx={{ fontSize: "2.125rem", textAlign: "center" }}>{value}</Typography>
    </Paper>
  );
};

export default DataCard;