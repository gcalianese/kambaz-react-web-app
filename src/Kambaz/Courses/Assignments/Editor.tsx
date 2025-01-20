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
        <table border="0">
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
                    <option value="Percentage">Percentage</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right">
            <label htmlFor="wd-subsmission-type">Submission Type </label>
            </td>
            <td>
                <select id="wd-submimssion-type">
                    <option value="Online">Online</option>
                </select>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <td>
                    <label htmlFor="wd-submission-type">Online Entry Options</label> <br/>
                    <input type="checkbox" name="text-entry" id="wd-submission-type"/>
                    <label htmlFor="submission-type">Text Entry</label> <br/>
    
                    <input type="checkbox" name="website-url" id="wd-submission-type"/>
                    <label htmlFor="submission-type">Website URL</label> <br/>

                    <input type="checkbox" name="media-recordings" id="wd-submission-type"/>
                    <label htmlFor="submission-type">Media Recordings</label> <br/>

                    <input type="checkbox" name="Student Annotation" id="wd-submission-type"/>
                    <label htmlFor="submission-type">Student Annotation</label> <br/>

                   <input type="checkbox" name="file-uploads" id="wd-submission-type"/>
                    <label htmlFor="submission-type">File Uploads</label> <br/> <br/>
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