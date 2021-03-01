import React from 'react';
import axios from 'axios'

import { useHistory } from 'react-router'

function AddMovie(props) {
  const history = useHistory()

  function submit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = {}

    for (const [key, value] of formData.entries()) {
      data[key] = value
    }

    console.log("Form data", data)
    axios.post("/movie/create", data).then(resp => {
      console.log("woo movie created go to page", resp.data.movie._id)
      history.push("/movie/" + resp.data.movie._id)
    })
  }

  return (
    <div>
      <form onSubmit={submit}>
        <label> title <input name="title"></input></label><br />
        <label> director <input name="director"></input></label><br />
        <label> image <input name="image"></input></label><br />
        <label> description <input name="description"></input></label><br />
        <label> showtimes <input name="showtimes"></input></label><br />
        <label> stars <input name="stars"></input></label><br />
        <button type="submit">Submit</button>
      </form>  
    </div>
  );
}

export default AddMovie;