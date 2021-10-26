import useAuth from "../../Auth/useAuth"

const DoctorDashboard = () => {

  const { user } = useAuth();

  return (
    <div className="content">
      <div className="container">
        <h2>
          Bienvenido Dr/a {user.name} {user.lastName}
        </h2>
      </div>
    </div>
  )
}

export default DoctorDashboard
