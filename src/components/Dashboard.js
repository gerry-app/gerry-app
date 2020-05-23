import React from 'react';
import injectSheet from 'react-jss';
import { GET_DISTRICT_COLOR } from '../constants';

const styles = {
  status: {
    marginTop: '35px',
  },
  tableRow: {
    fontFamily: 'Atlas Grotesk',
    fontSize: '12px',
    userSelect: 'none',
    textAlign: 'center',
  },
  badge: {
    boxSizing: 'border-box',
    color: '#fff',
  },
  highlighted: {
    textDecoration: 'underline',
  },
  a: {},
};

const Dashboard = ({ classes, districts, focusedDistrict, mission }) => {
  if (mission === 'population') {
    return (
      <div>
        <table className={classes.status}>
          <thead>
            <tr>
              <th>District</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(districts).map(districtCode => {
              const district = districts[districtCode];
              const population =
                district.democrats +
                district.republicans +
                district.independents;
              return (
                <tr key={districtCode} className={classes.tableRow}>
                  <td
                    className={classes.badge}
                    style={{
                      background: GET_DISTRICT_COLOR(districtCode),
                      border:
                        districtCode === focusedDistrict
                          ? '3px solid #000'
                          : 'none',
                    }}
                  >
                    {districtCode}
                  </td>
                  <td>{population}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <table className={classes.status}>
        <thead>
          <tr>
            <th>District</th>
            <th>DEM</th>
            <th>REP</th>
            <th>IND</th>
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
                  className={classes.badge}
                  style={{
                    background: GET_DISTRICT_COLOR(districtCode),
                    border:
                      districtCode === focusedDistrict
                        ? '3px solid #000'
                        : 'none',
                  }}
                >
                  {districtCode}
                </td>
                <td
                  className={
                    district.democrats / population > 0.52
                      ? classes.highlighted
                      : classes.a
                  }
                >
                  {Math.round((district.democrats / population) * 100)}%
                </td>
                <td
                  className={
                    district.republicans / population > 0.52
                      ? classes.highlighted
                      : classes.a
                  }
                >
                  {Math.round((district.republicans / population) * 100)}%
                </td>
                <td>
                  {Math.round((district.independents / population) * 100)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default injectSheet(styles)(Dashboard);
