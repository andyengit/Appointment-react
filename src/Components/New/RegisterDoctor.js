import specialities from "../../Helpers/especiality.json"

const RegisterDoctor = () => {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="input">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
      </div>
      <div className="input">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />
      </div>
      <div className="input">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
      </div>
      <div className="input">
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" />
      </div>
      <div className="input">
        <label htmlFor="specialities">Specialities</label>
        <select name="specialities" id="">
          <option value="">Select</option>
          {specialities.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
      </div>
      <button type="submit">Sign In</button>
    </form>
  )
}

export default RegisterDoctor
