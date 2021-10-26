import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import formatStr from "../Function/formatStr";
import Option from "./Option"
import specialities from "../../Helpers/especiality.json";

const Autocomplete = ({ type, setVar, initial }) => {

  if (initial === undefined) initial = "";

  const searchSpe = (initial) => {
    if (initial !== undefined || initial !== null) {
      let correct = false;
      let temp = specialities.find((el) => {
        if (el.id.toString() === initial.toString()) {
          correct = true;
          return true;
        }
      })
      if(correct) return temp.name;else return ""
    } else return "";
  }

  const [input, setinput] = useState(searchSpe(initial));
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
  }, [input])

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
        if (input !== "") history.push(`/search/${con.id}`);
      }
    }
  }

  return (
    <div className="search">
      <div className="autocomplete">
        <input autoComplete="off" onKeyDownCapture={EnterSearch} onChange={(e) => setinput(e.target.value)} className="search-main" type="text" placeholder="Escriba una especialidad" value={input} />
        {options &&
          <div className="options">
            {input !== "" && listSpe.map((es, i) => <Option key={es.id} set={[setinput, setoptions]} enter={EnterSearch} s={i} index={indexFocus === i ? true : false} input={input} name={es.name} />)}
          </div>}
      </div>
      <button onClick={handleSearch} className="search-btn">
        <box-icon name='search' size="md" color="white"></box-icon>
      </button>
    </div>
  )
}

export default Autocomplete
