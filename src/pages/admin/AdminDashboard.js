import Panel from "../../Components/Panel"
import {AiFillPlusCircle} from "react-icons/ai"
import {HiOutlinePencilAlt} from "react-icons/hi"
import {GoReport} from "react-icons/go"

const AdminDashboard = () => {



  return (
    <div className="content">
      <div className="container">
      <div className="panels">
          <Panel to="/new" content={<>
            <AiFillPlusCircle size="2rem"/>
            <h3>Crear</h3>
          </>}/>
          <Panel to="/edit" content={<>
            <HiOutlinePencilAlt size="2rem"/>
            <h3>Administrar Entidades</h3>
          </>} />
          <Panel to="/reports" content={<>
            <GoReport size="2rem"/>
            <h3>Reportes</h3>
          </>} />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
