import React from 'react';

function ChargesPage() {
  return (
    <div className="container my-5">
      <h4 className="mb-4">Charges for account opening</h4>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td><span className="badge bg-success">FREE</span></td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td><span className="badge bg-success">FREE</span></td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="mt-5 mb-4">Charges for optional value added services</h4>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Service</th>
              <th>Billing Frequency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: ₹249 / ₹2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: ₹100 | SIP: ₹10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: ₹500 | Historical: ₹500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChargesPage;
