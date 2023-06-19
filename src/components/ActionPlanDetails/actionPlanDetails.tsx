import React, {   useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.css";
import $ from "jquery";
import {
  PlusCircle,
  Trash3Fill,
} from "react-bootstrap-icons";
import ApiService from "../../service";
//import { alert } from 'bootstrap';

export function ActionPlanDetails() {
  const apiService = new ApiService();

  const [company, setCompany] = useState("");
  const [projectName, setProject] = useState("");
  const [projectManager, setProjectManager] = useState("1");
  const [goalDescription, setGoalDescriptor] = useState("");
  const [issueDescription, setIsueDescriptor] = useState("");
  const [desiredOutcome, setDesiredDescriptor] = useState("");
  const [showAlertSucess, setShowAlertSucess] = useState(false);
  const [showAlertFailure, setShowAlertFailure] = useState(false);
  const [details, setTableData] = useState([
    {
      id: 1,
      task: "",
      responsable: "",
      priority: 1,
      status: 1,
      start: "",
      end: "",
      requiredResources: "",
      potencialBlockers: "",
      stakeholders: "",
      milestone: "",
      notes: "",
    },
  ]);

  async function handleSaveData() {
    const data = {
      idActionPlan: 0,
      company,
      projectName,
      projectManager,
      goalDescription,
      issueDescription,
      desiredOutcome,
      details,
    };

    const response = await apiService.guardarActionPlanDetails(data);

    if (response.message === "exito") {
      setShowAlertSucess(true);
      setTimeout(() => { setShowAlertSucess(false);}, 3000);
    }else{
      setShowAlertFailure(true);
      setTimeout(() => { setShowAlertFailure(false); }, 3000);
    }

  }



  // Handler para agregar una fila a la tabla
  const handleAddRow = () => {
    const newRow = {
      id: details.length + 1,
      task: "",
      responsable: "",
      priority: 1,
      status: 1,
      start: "",
      end: "",
      requiredResources: "",
      potencialBlockers: "",
      stakeholders: "",
      milestone: "",
      notes: "",
    };
    setTableData([...details, newRow]);
  };

  // Handler para eliminar una fila de la tabla y,
  //Actualiza los IDs después de eliminar una fila
  const handleDeleteRow = (index: number) => {
    var updatedTableData = [...details];
    updatedTableData.splice(Number(index), 1);
    updatedTableData = updatedTableData.map((row, index) => {
      return { ...row, id: index + 1 };
    });
    setTableData(updatedTableData);
  };

  const handleInputChange = (event: any, index: any, key: any) => {
    const { value } = event.target;
    const updatedTableData = details.map((row, rowIndex) => {
      if (index === rowIndex) {
        return {
          ...row,
          [key]: value,
        };
      }
      return row;
    });
    setTableData(updatedTableData);
  };

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
            onClick={handleSaveData}
          >
            {/* <PlusCircle style={{ marginRight: "5px" }} /> */}
            Guardar
          </button>
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


          {/* El alert se muestra solo si showAlert es true */}
       {showAlertSucess && (
        <div className="d-flex" style={{ display: "flex", justifyContent: "flex-end", marginRight: "80px" }}>
          <div
            className="alert alert-success"
            role="alert"
            style={{ width: "30%", height: "50px" }}
          >
            <center>
              <div className="text-center">Operación exitosa!</div>
            </center>
          </div>
        </div>
      )},

      {showAlertFailure && (
        <div className="d-flex" style={{ display: "flex", justifyContent: "flex-end", marginRight: "80px" }}>
          <div
            className="alert alert-danger"
            role="alert"
            style={{ width: "30%", height: "50px" }}
          >
            <center>
              <div className="text-center">Algo salio mal en la operacion!</div>
            </center>
          </div>
        </div>
      )}

      {/* INPUTS */}
      <div>
        <center>
          <div
            className="input-group"
            style={{ width: "90%", marginInline: "20px", marginBottom: "20px" }}
          >
            <span className="input-group-text">Company</span>
            <input
              className="form-control"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            ></input>
          </div>

          <div
            className="input-group"
            style={{ width: "90%", marginInline: "20px", marginBottom: "20px" }}
          >
            <span className="input-group-text">Project</span>
            <input
              className="form-control"
              value={projectName}
              onChange={(e) => setProject(e.target.value)}
            ></input>
          </div>

          <div
            className="input-group"
            style={{ width: "90%", marginInline: "20px", marginBottom: "20px" }}
          >
            <span className="input-group-text">Project Manager</span>
            <select
              className="form-select"
              aria-label="Default select example"
              value={projectManager}
              onChange={(e) => setProjectManager(e.target.value)}
            >
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
              value={goalDescription}
              onChange={(e) => setGoalDescriptor(e.target.value)}
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
              value={issueDescription}
              onChange={(e) => setIsueDescriptor(e.target.value)}
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
              value={desiredOutcome}
              onChange={(e) => setDesiredDescriptor(e.target.value)}
            ></textarea>
          </div>
        </center>
      </div>

      {/* ADD ROW BUTTON */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className="" style={{ marginTop: "40px", marginBottom: "40px" }}>
          <button
            className="btn btn-primary"
            style={{ marginRight: "100px" }}
            onClick={handleAddRow}
          >
            <PlusCircle style={{ marginRight: "5px" }} />
            Agregar
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div>
        <center>
          <div
            style={{
              width: "90%",
              marginInline: "40px",
              marginBottom: "100px",
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
                {details.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        className="form-control me-2"
                        type="number"
                        placeholder="Id"
                        value={row.id}
                        readOnly
                        onChange={(e) => handleInputChange(e, index, "id")}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Task"
                        value={row.task}
                        onChange={(e) => handleInputChange(e, index, "task")}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Responsable"
                        value={row.responsable}
                        onChange={(e) =>
                          handleInputChange(e, index, "responsable")
                        }
                      />
                    </td>
                    <td>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={row.priority}
                        onChange={(e) =>
                          handleInputChange(e, index, "priority")
                        }
                      >
                        <option value="1"> 1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </td>
                    <td>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={row.status}
                        onChange={(e) => handleInputChange(e, index, "status")}
                      >
                        <option value="1">To do</option>
                        <option value="2">Process</option>
                        <option value="3">Finised</option>
                      </select>
                    </td>
                    <td>
                      <input
                        className="form-control me-2"
                        type="date"
                        value={row.start}
                        onChange={(e) => handleInputChange(e, index, "start")}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control me-2"
                        type="date"
                        value={row.end}
                        onChange={(e) => handleInputChange(e, index, "end")}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Required resourses"
                        value={row.requiredResources}
                        onChange={(e) =>
                          handleInputChange(e, index, "requiredResources")
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Pontencial blockers"
                        value={row.potencialBlockers}
                        onChange={(e) =>
                          handleInputChange(e, index, "potencialBlockers")
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Stakeholders"
                        value={row.stakeholders}
                        onChange={(e) =>
                          handleInputChange(e, index, "stakeholders")
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Milestone"
                        value={row.milestone}
                        onChange={(e) =>
                          handleInputChange(e, index, "milestone")
                        }
                      />
                    </td>
                    <td>
                      <textarea
                        className="form-control me-2"
                        placeholder="Notas"
                        value={row.notes}
                        onChange={(e) => handleInputChange(e, index, "notes")}
                      />
                    </td>
                    <td>
                      <center>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleDeleteRow(index)}
                        >
                          <Trash3Fill />
                        </button>
                      </center>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    </div>
  );
}
