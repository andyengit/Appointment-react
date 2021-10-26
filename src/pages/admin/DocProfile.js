import { useParams } from "react-router"
import profiles from "../../Helpers/doctor.json"

const DocProfile = () => {

  const { id } = useParams();
  const profile = profiles.find(el => el.id === id ? true : false);

  return (
    <div className="content">
      <div className="id">
        <box-icon name='user-circle' type='solid' size="lg"></box-icon>
        <h2>Profile of: {profile.name}</h2>
      </div>
    </div>
  )
}

export default DocProfile
