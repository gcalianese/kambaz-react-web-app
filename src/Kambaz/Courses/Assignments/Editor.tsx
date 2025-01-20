import { Link } from "react-router";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label>
        <p/>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <p />
        <table>
          <tr>
            <td align="right">
              <label htmlFor="wd-points">Points </label>
            </td>
            <td>
                <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right">
                <label htmlFor="wd-group">Assignment Group </label>
            </td>
            <td>
                <select id="wd-group">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right">
            <label htmlFor="wd-display-grade-as">Display Grade As </label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option value="PERCENTAGE">Percentage</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right">
            <label htmlFor="wd-submission-type">Submission Type </label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option value="ONLINE">Online</option>
                </select>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <td>
                    <label>Online Entry Options</label> <br/>
                    <input type="checkbox" name="wd-submission-type" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label> <br/>
    
                    <input type="checkbox" name="wd-submission-type" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website URL</label> <br/>

                    <input type="checkbox" name="wd-submission-type" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label> <br/>

                    <input type="checkbox" name="wd-submission-type" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label> <br/>

                    <input type="checkbox" name="wd-submission-type" id="wd-file-upload"/>
                    <label htmlFor="wd-file-upload">File Uploads</label> <br/> <br/>
                </td>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign </label>
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to </label> <br/>
                <input id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
                <label htmlFor="wd-due-date">Due</label> <br/>
                <input type="date" value="2024-05-13" id="wd-due-date"/><br/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>

            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            <label htmlFor="wd-available-from">Available From </label>
            </td>
            <td>
            <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>
          <td></td>
          <td>
            <input type="date" value="2024-05-06" id="wd-available-from"/>
          </td>
          <td>
            <input type="date" value="2024-05-20" id="wd-available-until"/><br/>
          </td>
          <tr>
            <td></td>
            <td></td>
            <td align="right">
                <p/>
                <button type="button" id="wd-editor-cancel">Cancel</button>
                <button type="button" id="wd-editor-save">Save</button>
            </td>
          </tr>
        </table>
        

      </div>

      
  );}