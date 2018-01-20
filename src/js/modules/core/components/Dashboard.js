import React from "react";
import injectSheet from "react-jss";
import { GET_DISTRICT_COLOR } from "../../../constants";

const styles = {
  status: {},
  tableRow: {
    fontFamily: "Atlas Grotesk",
    fontSize: "12px",
    userSelect: "none",
    textAlign: "center",
  },
};

const Dashboard = ({ classes, districts }) => {
  return (
    <div>
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
            const population =
              district.democrats + district.republicans + district.independents;
            return (
              <tr key={districtCode} className={classes.tableRow}>
                <td
                  style={{
                    background: GET_DISTRICT_COLOR(districtCode),
                    color: "#fff",
                  }}
                >
                  {districtCode}
                </td>
                <td>{population}</td>
                <td>{Math.round(district.democrats / population * 100)}%</td>
                <td>{Math.round(district.republicans / population * 100)}%</td>
                <td>{Math.round(district.independents / population * 100)}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default injectSheet(styles)(Dashboard);
