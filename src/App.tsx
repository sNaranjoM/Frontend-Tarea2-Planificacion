import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";
import "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.css";
import $ from "jquery";
import {
  PlusCircle,
  ExclamationDiamondFill,
  PencilSquare,
  Trash3Fill,
  Search,
  XLg,
} from "react-bootstrap-icons";

function App() {

  $(document).ready(function () {
    $("#myTable").DataTable();
  });

  return (
    <div>
      <div>
        {/* NAVBAR */}
        <nav
          className="navbar bg-body-tertiary bg-dark"
          data-bs-theme="dark"
          style={{ margin: "2px" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" style={{ color: "white" }}>
              Action plan
            </a>

          </div>
        </nav>
      </div>

      {/* TITLE */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div
          className=""
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >

          <Link
            className="btn btn-primary "
            style={{ marginRight: "200px" }}
            to={"/actionPlanDetails"}
          >
            <PlusCircle style={{ marginRight: "5px" }} />
            Agregar
          </Link>
        </div>
      </div>

      {/* TABLE */}
      <center>
        <div
          style={{
            width: "80%",
          }}
        >
          <table id="myTable" className="display">
            <thead>
              <tr>
                <th>Id Project</th>
                <th>Project</th>
                <th>Id Task</th>
                <th>Risk Count</th>
                <th>Last Update</th>
                <th>Total Points</th>
                <th>Matrix</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Supercop</td>
                <td>2</td>
                <td>9</td>
                <td>19/03/2018</td>
                <td>65</td>
                <td>
                  <button className="btn btn-outline-success">
                    <ExclamationDiamondFill /> Matrix
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline-warning">
                    <PencilSquare /> Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline-danger">
                    <Trash3Fill /> Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}

export default App;
