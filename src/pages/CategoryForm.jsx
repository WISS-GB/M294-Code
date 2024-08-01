import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryForm = () => {

  const [inputs, setInputs] = useState({})
  const [done, setDone] = useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  // ------------------------------------------------------------------------------
  // code for optional redirection
  const navigate = useNavigate();

  useEffect(() => {
    if (done) {
      navigate('/questions', { replace: true });
    }
  }, [done, navigate]);

  const sendDataAsync = async() => {
    try {
      const response = await fetch("http://localhost:8080/category", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "name="+inputs.category
      })

      if ( response.ok ) {
          console.log("Kategorie wurde angelegt")
          setDone(true)
        }
      else {
          console.log("Kategorie konnte nicht angelegt werden, Fehlercode: " + response.status)

        }

    } catch (error) {
      console.log("Category Add Error: " + error)
    }
  }
  // end redirection code
  // ------------------------------------------------------------------------------


  const sendData = () => {
    fetch("http://localhost:8080/category", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "name="+inputs.category
    }). then(response => {
      if ( response.ok ) {
        console.log("Kategorie wurde angelegt")
        setDone(true)
      }
      else {
        console.log("Kategorie konnte nicht angelegt werden, Fehlercode: " + response.status)

      }
    })

  }

  const handleSubmit = async(event) => {

    if (inputs.category.trim().length<3) {
      alert("Bitte sinnvollen Kategorienamen mit mindestens drei Zeichen eingeben")
      return
    }

    event.preventDefault() //extremely important to prevent the page from reloading while request is processed

    sendDataAsync()
    // sendData()
  }


  return (
    <>
      <h2>Neue Kategorie hinzufügen</h2>
      <form className="myform">
      <div>
          <label htmlFor="category">Kategoriename</label>
          <input type="text" name="category" id="category" onChange={ handleChange } />
        </div>
        <div>
          <button type="submit" onClick={ handleSubmit }>Kategorie hinzufügen</button>
          <button type="reset">Abbrechen</button>
        </div>
      </form>
    </>
  )

}

export default CategoryForm