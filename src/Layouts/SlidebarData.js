import useAuth from "../Auth/useAuth"
import {AiFillHome, AiFillPlusCircle, AiFillEdit} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import {FaBriefcaseMedical, FaSearch, FaUserMd} from 'react-icons/fa'
import {MdContactMail, MdOutlineContactSupport, MdCreate, MdOutlineReport} from 'react-icons/md'
import {GoKey} from 'react-icons/go'
import {BsCalendarDate, BsClockHistory} from 'react-icons/bs'
import {IoMdSettings} from "react-icons/io"

const SlidebarData = () => {
  const auth = useAuth();

  if (!auth.isLogged()) {
    return ([
      {
        title: "Inicio",
        path: "/",
        icon: <AiFillHome color="#2980b9" size="1.5em"/>
      },
      {
        title: "Buscar",
        path: "/search",
        icon: <FiSearch color="#2980b9" size="1.5em"/>
      },
      {
        title: "Doctores",
        path: "/doctors",
        icon: <FaUserMd color="#2980b9" size="1.5em"/>
      },
      {
        title: "Contactanos",
        path: "/contact",
        icon: <MdContactMail color="#2980b9" size="1.5em"/>
      },
      {
        title: "¿Quienes somos?",
        path: "/aboutUs",
        icon: <MdOutlineContactSupport color="#2980b9" size="1.5em"/>
      },
      {
        title: "¿Eres Doctor?",
        path: "/doc-info",
        icon: <FaBriefcaseMedical color="#2980b9" size="1.5em"/>
      },
      {
        title: "Entrar",
        path: "/login",
        icon: <GoKey color="#2980b9" size="1.5em"/>
      },
      {
        title: "Registrate",
        path: "/signIn",
        icon: <MdCreate color="#2980b9" size="1.5em"/>
      }
    ]
    )
  } else if (auth.isLogged() && auth.user.role === "patient") {
    return ([
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiFillHome color="#2980b9" size="1.5em"/>
      },
      {
        title: "Doctores",
        path: "/doctors",
        icon: <FaUserMd color="#2980b9" size="1.5em"/>
      },
      {
        title: "Citas",
        path: "/search",
        icon: <BsCalendarDate color="#2980b9" size="1.5em"/>
      },
      {
        title: "Historial",
        path: "/history",
        icon: <BsClockHistory color="#2980b9" size="1.5em"/>
      },
      {
        title: "Opciones",
        path: "/settings",
        icon: <IoMdSettings color="#2980b9" size="1.5em"/>
      }
    ])
  } else if (auth.isLogged() && auth.user.role === "doctor") {
    return ([
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiFillHome color="#2980b9" size="1.5em"/>
      },
      {
        title: "Obtener cita",
        path: "/search",
        icon: <FaSearch color="#2980b9" size="1.5em"/>
      },
      {
        title: "Citas",
        path: "/appointment",
        icon: <BsCalendarDate color="#2980b9" size="1.5em"/>
      },
      {
        title: "Historial",
        path: "/history",
        icon: <BsClockHistory color="#2980b9" size="1.5em"/>
      },
      {
        title: "Opciones",
        path: "/settings",
        icon: <IoMdSettings color="#2980b9" size="1.5em"/>
      }
    ])
  }else if (auth.isLogged() && auth.user.role === "admin") {
    return ([
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiFillHome color="#2980b9" size="1.5em"/>
      },
      {
        title: "Crear",
        path: "/new",
        icon: <AiFillPlusCircle color="#2980b9" size="1.5em"/>
      },
      {
        title: "Administrar",
        path: "/edit",
        icon: <AiFillEdit color="#2980b9" size="1.5em"/>
      },
      {
        title: "Reportes",
        path: "/reports",
        icon: <MdOutlineReport color="#2980b9" size="1.5em"/>
      }
    ])
  }
}

export default SlidebarData
