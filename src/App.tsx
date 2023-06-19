import React, { useEffect, useState } from "react";
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
} from "react-bootstrap-icons";

import ApiService from "../src/service";

function App() {
  const apiService = new ApiService();

  const [dataTable, setTableData] = useState([
    {
      id: 1,
      project: "",
      projectManager: "",
      company: "",
    },
  ]);

  useEffect(() => {
    //carga los datos e inicializa instancia
    init();
  }, []);

  async function init() {
    try {
      apiService
        .fetchData("listar")
        .then((data) => {
          setTableData(data[0])
          console.log(data);
        })
        .catch((error) => {
          // Manejar el error de la petición
          return error;
        });
      // Maneja la respuesta de la solicitud POST aquí
    } catch (error) {
      // Maneja el error de la solicitud POST aquí
    }
  }

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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className="" style={{ marginTop: "40px", marginBottom: "40px" }}>
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
                <th>Id</th>
                <th>Project</th>
                <th>Project manager</th>
                <th>Company</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map((row, index) => (
                <tr key={index}>
                  <td>
                    {" "}
                    {/* id*/}
                    {row.id}
                  </td>
                  <td>
                    {row.project} {/* Project*/}
                  </td>
                  <td>
                    {row.projectManager}
                    {/*Project manager*/}
                  </td>
                  <td>
                    {row.company} {/*Company*/}
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
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}

export default App;
