import React, { useState } from 'react';
import "./Feedback.css"
function Show() {
  var T = document.getElementById("TestsDiv");
  T.style.display = "block";
}



const Feedback = (props) => {
  
  var [good, setGood] = useState(0)
  var [neutral, setNeutral] = useState(0)
  var [poor, setPoor] = useState(0)
  var percent = (good/(good+neutral+poor)*100||0)
  var average =((good-poor)/(good+neutral+poor)||0)
  const Statistics = () =>
{
  return (
    <table>
      <thead>
        <tr>
          <th>Statistics</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>poor</td>
          <td>{poor}</td>
        </tr>
        <tr>
          <td>percent</td>
          <td>{Math.floor(percent * 100) / 100}%</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{Math.floor(average * 100) / 100}</td>
        </tr>
      </tbody>
    </table>
)
}

    return(
      <div>
        <h2>Feedback</h2>
          <div>
            <button 
              onClick={() => {
                Show()
                setGood(good = good + 1)
              }}>
                Good
            </button>
            <button 
              onClick={() => {
                Show()
                setNeutral(neutral+1)
              }}>
                Neutral
            </button>
            <button 
              onClick={() => {
                Show()
                setPoor(poor+1)
              }}>
                Poor
            </button>
          </div>
         <div id="TestsDiv" style={{display:'none'}}>{Statistics(good,neutral,poor,percent)}</div>
      </div>

)

}
export default Feedback