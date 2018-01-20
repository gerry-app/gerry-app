import React from "react";
import injectSheet from "react-jss";
import { GET_DISTRICT_COLOR } from "../../../constants";

const styles = {  
  status: {
    display: "inline",
    position: "fixed",
    left: "8px",
    bottom: 0,
  },
};

const Dashboard = ({ classes, districts }) => {
  return (
    <table className={classes.status}>
      <thead>
        <tr>
          <th>District</th>
          <th>Population</th>
          <th>DEM %</th>
          <th>REP %</th>
          <th>IND %</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(districts).map(districtCode => {
          const district = districts[districtCode];
          const population = district.democrats + district.republicans + district.independents;
          return (
            <tr key={districtCode}>
              <td style={{ border: `3px solid ${GET_DISTRICT_COLOR(districtCode)}` }}>{districtCode}</td>
              <td>{population}</td>
              <td>{Math.round(district.democrats / population * 100)}%</td>
              <td>{Math.round(district.republicans / population * 100)}%</td>
              <td>{Math.round(district.independents / population * 100)}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default injectSheet(styles)(Dashboard);