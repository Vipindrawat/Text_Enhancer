import React from 'react'

const summary = (props) => {

  return (
    <div className="container accordion mt-3" style={{ height: "46vh", marginBottom: "11v" }} id="accordionPanel">
      <div className="accordion-item border border-2">
        <h2 className="accordion-header text-light">
          <button className={`accordion-button bg-${props.mode ? "dark" : "light"} text-${props.mode ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <h2>Summary :</h2>
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" style={props.mode ? { backgroundColor: "lab(29 2.44 1.67)" } : { backgroundColor: "white" }} className="accordion-collapse collapse show">
          <div className="accordion-body">

            <table className={`table text-${props.mode ? "light" : "dark"}`}>

              <tbody>
                <tr>
                  <th scope="row">Characters</th>
                  <td>{props.text.length}</td>
                </tr>
                <tr>
                  <th scope="row"> Words</th>
                  <td>{props.text.split(/\s/).filter((value) => {
                    return value !== "";
                  }).length}</td>
                </tr>
                <tr>
                  <th scope="row">Sentences</th>
                  <td>{props.text.split(/[.]/).length - 1}</td>
                </tr>
                <tr>
                  <th scope="row">Reading Time</th>
                  <td>{props.text.split(/\s/).filter((value) => {
                    return value !== "";
                  }).length * 0.008} Minutes</td>
                </tr>
                <tr>
                  <th scope="row">Speaking Time</th>
                  <td>{props.text.split(/\s/).filter((value) => {
                    return value !== "";
                  }).length * 0.20} Minutes</td>
                </tr>


              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default summary
