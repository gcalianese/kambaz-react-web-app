import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function PeopleTable() {
    const { cid } = useParams();
    const { users, enrollments } = db;
    const courseEnrollments = enrollments.filter((enrollee: any) => enrollee.course === cid);
    const enrolledUserIds = courseEnrollments.map((enrollee: any) => enrollee.user);
    const courseMembers = users.filter((user: any) => enrolledUserIds.includes(user._id));

    return (
        <div id="wd-people-table">
            <Table striped>
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    {courseMembers.map((member: any) => (
                        <tr>
                            <td className="wd-full-name text-nowrap">
                                <FaUserCircle className="me-2 fs-1 text-secondary" />
                                <span className="wd-first-name">{member.firstName}</span>{" "}
                                <span className="wd-last-name">{member.lastName}</span></td>
                            <td className="wd-login-id">{member.loginId}</td>
                            <td className="wd-section">{member.section}</td>
                            <td className="wd-role">{member.role}</td>
                            <td className="wd-last-activity">{member.lastActivity}</td>
                            <td className="wd-total-activity">{member.totalActivity}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>);
}