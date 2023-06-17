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

export function ActionPlanDetails() {
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
              Action plan Details
            </a>
          </div>
        </nav>
      </div>

      {/* TITLE */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>

      <div className="" style={{ marginTop: "40px", marginBottom: "40px" }}>
          <button 
            className="btn btn-primary"
            style={{ marginRight: "20px" }}
          >
            {/* <PlusCircle style={{ marginRight: "5px" }} /> */}
            Agregar
          </button >
        </div>

        <div className="" style={{ marginTop: "40px", marginBottom: "40px" }}>
          <Link
            className="btn btn-dark"
            style={{ marginRight: "100px" }}
            to={"/"}
          >
            {/* <PlusCircle style={{ marginRight: "5px" }} /> */}
            Volver
          </Link>
        </div>
      </div>

      {/* INPUTS */}
      <div>
        <center>
          <div
            className="input-group"
            style={{ width: "90%", marginInline: "20px", marginBottom: "20px" }}
          >
            <span className="input-group-text">Company</span>
            <input className="form-control"></input>
          </div>

          <div
            className="input-group"
            style={{ width: "90%", marginInline: "20px", marginBottom: "20px" }}
          >
            <span className="input-group-text">Project</span>
            <input className="form-control"></input>
          </div>

          <div
            className="input-group"
            style={{ width: "90%", marginInline: "20px", marginBottom: "20px" }}
          >
            <span className="input-group-text">Project Manager</span>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select one option</option>
              <option value="1">SUPERCOP</option>
              <option value="2">PSAssistant</option>
              <option value="3">Ecofirma</option>
            </select>
          </div>

          <div
            className="input-group"
            style={{ width: "90%", marginInline: "20px", marginBottom: "20px" }}
          >
            <span className="input-group-text"> Goal descriptor</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>

          <div
            className="input-group"
            style={{ width: "90%", marginInline: "20px", marginBottom: "20px" }}
          >
            <span className="input-group-text"> Isue descriptor</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>

          <div
            className="input-group"
            style={{ width: "90%", marginInline: "20px", marginBottom: "20px" }}
          >
            <span className="input-group-text"> Desired descriptor</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>

        </center>
      </div>

      <div>
        <center>
          <div
            style={{
              width: "90%", marginInline: "40px"
            }}
          >
            <table id="myTable" className="display">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Task</th>
                  <th>Responsable</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Required resourses</th>
                  <th>Potencial blockers</th>
                  <th>Stakholders</th>
                  <th>Milestone</th>
                  <th>Notas</th>
                  <th>Detele</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> id</td>
                  <td>Testing</td>
                  <td>Steven Naranjo</td>
                  <td>3</td>
                  <td>To do</td>
                  <td>02/05/2023</td>
                  <td>02/05/2023</td>
                  <td>User history</td>
                  <td>Bugs</td>
                  <td>Steven Naranjo</td>
                  <td>NA</td>
                  <td>Sin notas</td>
                  <td>
                    <center>
                      <button className="btn btn-outline-danger">
                        <Trash3Fill />
                      </button>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>     
                    <input
                      className="form-control me-2"
                      type="text"
                      placeholder="Id"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control me-2"
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control me-2"
                      type="text"
                    />
                  </td>
                  <td>
                  <select className="form-select" aria-label="Default select example">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                  </td>
                  <td>
                  <select className="form-select" aria-label="Default select example">
                    <option value="1" selected>To do</option>
                    <option value="2">Process</option>
                    <option value="3">Finised</option>
                    </select>
                  </td>
                  <td>
                    <input
                      className="form-control me-2"
                      type="date"
                      placeholder="Owner"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control me-2"
                      type="date"
                      placeholder="Response Plan"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control me-2"
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control me-2"
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control me-2"
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control me-2"
                      type="text"
                    />
                  </td>
                  <td>
                    <textarea
                      className="form-control me-2"
                    />
                  </td>
                  <td>
                    <center>
                      <button className="btn btn-outline-danger">
                        <Trash3Fill />
                      </button>
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </center>
      </div>


    </div>
  );
}
