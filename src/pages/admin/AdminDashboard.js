import Panel from "../../Components/Panel"

const AdminDashboard = () => {



  return (
    <div className="content">
      <div className="container">
      <div className="panels">
          <Panel to="/new" content="Crear"/>
          <Panel to="/edit" content="Administrar Doctores" />
          <Panel to="/reports" content="Reportes" />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
