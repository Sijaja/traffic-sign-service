import React from "react";

function SignTable({ signs }) {
  const totalSum = signs.reduce((sum, sign) => sum + (sign.clusterSum || 0), 0);
  return (
    <div class ="table-cintainer">
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Heading</th>
            <th>Type</th>
            <th>Value</th>
            <th>Summe</th>
          </tr>
        </thead>
        <tbody>
          {signs.map(sign => (
            <tr key={sign.id}>
              <td>{sign.id}</td>
              <td>{sign.latitude.toFixed(6)}</td>
              <td>{sign.longitude.toFixed(6)}</td>
              <td>{sign.heading}</td>
              <td>{sign.type}</td>
              <td>{sign.signValue}</td>
              <td>{sign.clusterSum}</td>
            </tr>
          ))}
          <tr style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
            <td colSpan="6" style={{ textAlign: "right" }}>Total Observations:</td>
            <td>{totalSum}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SignTable;