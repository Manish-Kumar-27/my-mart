import React from "react"
import "./professional-details.css"

function Professional() {
  return (
    <div class="professional-details">
      <h2>Professional Details</h2>
      <p class="looking-status">📢 Actively looking for better opportunities!</p>

      <table>
        <thead>
          <tr>
            <th>Duration</th>
            <th>Role</th>
            <th>Company</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Jan 2024 – May 2024</td>
            <td>Intern - Web Developer</td>
            <td>XYZ Innovations</td>
            <td>Developed internal tools and landing pages using HTML, CSS, and JavaScript.</td>
          </tr> */}
          <tr>
            <td>April 2025 – Present</td>
            <td>Associate Software Developer </td>
            <td>Besquare Technologies</td>
            <td>Building responsive UI using React.js, collaborating with backend team, and maintaining web accessibility.</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
};

export default Professional;
