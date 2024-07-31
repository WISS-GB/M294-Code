import {useState,useEffect} from 'react';

const CategoryForm = () => {

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const {name, value} = event.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const handleSubmit = (event) => {

    if (inputs.category.trim().length<3) {
      alert("Bitte sinnvollen Kategorienamen mit mindestens drei Zeichen eingeben")
      return
    }
    fetch("http://localhost:8080/category", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "name="+inputs.category
    }).then((response) => {
      if (response.status === 201 || response.status === 200) {
        alert("Kategorie wurde angelegt")
        window.location.reload()
      } else {
        alert("Kategorie konnte nicht angelegt werden, Fehlercode: " + response.status)

      }
    })
  }

  return (
    <>
      <h1>Neue Kategorie hinzufügen</h1>
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