import React from "react"
import "./educational-details.css"
function Educational() {
  return (
    <div class="education-details">
      <h2>Educational Details</h2>
      <table>
        <thead>
          <tr>
            <th>Duration</th>
            <th>Course</th>
            <th>Institute</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2020–2024</td>
            <td>B.Tech</td>
            <td>Sreenidhi Institute Of Science and Technology</td>
            <td>64%</td>
          </tr>
          <tr>
            <td>2018–2020</td>
            <td>Intermediate</td>
            <td>Narayana Junior College</td>
            <td>70%</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>SSC</td>
            <td>Sujatha High School</td>
            <td>69%</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
};

export default Educational;
