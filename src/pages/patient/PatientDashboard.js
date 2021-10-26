import useAuth from "../../Auth/useAuth"

const PatientDashboard = () => {

  const {user} = useAuth();

  return (
    <div className="content">
      <div className="container">
        <div className="card">
          <h2>Bienvenido: {user.name} {user.lastName} </h2>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
