import PublicRoute from "../routers/PublicRoute";
import PatientRoutes from "../routers/PatientRoutes";
import DoctorRoutes from "../routers/DoctorRoutes";
import AdminRoutes from "../routers/AdminRoutes";
import useAuth from "./useAuth";

const ShowComponent = () => {
  const auth = useAuth();
  
  let showComponent = null;
 
  if(auth.user === null){
    showComponent = <PublicRoute/>
  }else if(auth.user.role === "PATIENT"){
    showComponent = <PatientRoutes/>
  }else if(auth.user.role === "DOCTOR"){
    showComponent = <DoctorRoutes/>
  }else if(auth.user.role === "ADMIN"){
    showComponent = <AdminRoutes/>
  }

  return showComponent; 
}

export default ShowComponent
