const Recover = () => {
  return (
    <div className="content-session">
    <Back />
    <div className="container-session">
      <h3>Iniciar sesion</h3>\
      {error.message !== undefined && (
        <Message type={"m-error"} content={error.message.toString()} />
      )}
      <div className="form">
        <Input
          onChange={(e) => setdata({ ...data, email: e.target.value.trim() })}
          type="email"
          autocomplete="on"
          placeholder="Correo"
        />
        <Input
          onEnter={handleLogin}
          onChange={(e) => setdata({ ...data, password: e.target.value.trim() })}
          type="password"
          placeholder="Contraseña"
        />
        <Button onClick={handleLogin} title="Enviar" />
        <div className="links">
          <Link to={"/login/doctor"} className="link">¿Eres doctor?</Link>
          <Link className="link">¿Olvidaste tu contraseña?</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Recover
