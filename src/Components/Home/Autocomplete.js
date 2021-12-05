import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import formatStr from "../Function/formatStr";
import Option from "./Option"
import axios from "axios";
import api from "../../Helpers/api.json"


const Autocomplete = ({initial,setVar}) => {
  const [specialities, setspecialities] = useState([])

  useEffect(() => {
    axios.get(api.url+'/speciality')
    .then(res => {
      setspecialities(res.data)
      if (initial !== undefined || initial !== null) {
        let temp = res.data.find((el) => el.name === initial ? true : false)
        setinput(temp.name);
      }
    })
    .catch(e => console.log(e))
  }, [initial])

  if (initial === undefined || initial === null) initial = "";

  const [input, setinput] = useState(initial);
  const [listSpe, setlist] = useState([]);
  const [indexFocus, setindexFocus] = useState(0);
  const [options, setoptions] = useState(false);
  const history = useHistory();

  


  useEffect(() => {
    const searchByText = (obj) => {
      let res = 0;
      for (let i = 0; i < input.length; i++) {
        if (formatStr(obj.name.toLocaleLowerCase()[i]) === formatStr(input.toLocaleLowerCase()[i])) {
          res++;
        } else return false;
      }
      if (res === input.length) return true;
    }

    if (input !== "") {

      if(!!specialities){
        setlist(specialities.filter(searchByText));
        let arr = specialities.find((el) => {
          if (formatStr(el.name.toLocaleLowerCase()) === formatStr(input.toLocaleLowerCase())) {
            return true
          } else return false;
        });
        if (arr === undefined) {
          setoptions(true);
        } else if (arr) {
          setoptions(false);
        }
      }
    }
  }, [input,specialities])

  const EnterSearch = (e) => {

    if (e.code === "Enter") {
      if (options === true) {
        let arr = e.target.nextElementSibling.childNodes;
        arr.forEach(el => {
          if (el.classList[1] === "activeOp") {
            setinput(el.textContent)
            setoptions(false)
          }
        });
      } else {
        handleSearch();
      }

    }
    if (e.code === "ArrowDown") {
      let listNode = e.target.nextElementSibling.childNodes;
      if (indexFocus < (listNode.length - 1)) setindexFocus(indexFocus + 1);

    }
    if (e.code === "ArrowUp") {
      if (indexFocus > 0) setindexFocus(indexFocus - 1);

    }
  }

  const handleSearch = () => {
    setoptions(true);
    let con = specialities.find((obj) => obj.name.toLocaleLowerCase() === input.toLocaleLowerCase());
    if (con !== undefined) {
      if (con.name.length > 0) {
        if (input !== "") {
          history.push(`/search/${con.name}`);
        };
      }
    }
  }

  return (
    <div className="search">
      <div className="autocomplete">
        <input autoComplete="off" onKeyDownCapture={EnterSearch} onChange={(e) => setinput(e.target.value)} className="search-main" type="text" placeholder="Escriba una especialidad" value={input} />
        {options &&
          <div className="options">
            {input !== "" && listSpe.map((es, i) => <Option key={i} set={[setinput, setoptions]} enter={EnterSearch} s={i} index={indexFocus === i ? true : false} input={input} name={es.name} />)}
          </div>}
      </div>
      <button onClick={handleSearch} className="search-btn">
        <box-icon name='search' size="md" color="white"></box-icon>
      </button>
    </div>
  )
}

export default Autocomplete
