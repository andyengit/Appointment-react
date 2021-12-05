import useAuth from "../Auth/useAuth"

const SlidebarData = () => {
  const auth = useAuth();

  if (!auth.isLogged()) {
    return ([
      {
        title: "Inicio",
        path: "/",
        icon: <box-icon name='home' type='solid' color="#2980b9"></box-icon>
      },
      {
        title: "Buscar",
        path: "/search",
        icon: <box-icon name='search' color="#2980b9"></box-icon>
      },
      {
        title: "Contactanos",
        path: "/contact",
        icon: <box-icon name='phone' type='solid' color="#2980b9"></box-icon>
      },
      {
        title: "¿Quienes somos?",
        path: "/aboutUs",
        icon: <box-icon name='building-house' type='solid' color="#2980b9"></box-icon>
      },
      {
        title: "¿Eres Doctor?",
        path: "/doc-info",
        icon: <box-icon name='plus-medical' color="#2980b9"></box-icon>
      },
      {
        title: "Entrar",
        path: "/login",
        icon: <box-icon name='key' type='solid' color="#2980b9"></box-icon>
      },
      {
        title: "Registrate",
        path: "/signIn",
        icon: <box-icon name='id-card' color="#2980b9" ></box-icon>
      }
    ]
    )
  } else if (auth.isLogged() && auth.user.role === "patient") {
    return ([
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <box-icon name='home' type='solid' color="#2980b9"></box-icon>
      },
      {
        title: "Citas",
        path: "/appointment",
        icon: <box-icon name='calendar' type='solid' color="#2980b9"></box-icon>
      },
      {
        title: "Historial",
        path: "/history",
        icon: <box-icon name='history' color="#2980b9"></box-icon>
      }
    ])
  } else if (auth.isLogged() && auth.user.role === "doctor") {
    return ([
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <box-icon name='home' type='solid' color="#2980b9"></box-icon>
      },
      {
        title: "Citas",
        path: "/appointment",
        icon: <box-icon type='solid' name='calendar' color="#2980b9"></box-icon>
      },
      {
        title: "Historial",
        path: "/history",
        icon: <box-icon name='history' color="#2980b9"></box-icon>
      }
    ])
  }else if (auth.isLogged() && auth.user.role === "admin") {
    return ([
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <box-icon name='home' type='solid' color="#2980b9"></box-icon>
      },
      {
        title: "Crear",
        path: "/new",
        icon: <box-icon name='user' type='solid' color="#2980b9"></box-icon>
      },
      {
        title: "Administrar",
        path: "/edit",
        icon: <box-icon name='pencil' type='solid' color="#2980b9"></box-icon>
      },
      {
        title: "Reportes",
        path: "/reports",
        icon: <box-icon name='error-circle' type='solid' color="#2980b9"></box-icon>
      },
      {
        title: "Opciones",
        path: "/settings",
        icon: <box-icon name='slider-alt' color="#2980b9"></box-icon>
      }
    ])
  }
}

export default SlidebarData
