import { Link } from "react-router-dom";
import { Row, Col, Card, FormControl, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAll, setShowAll] = useState(false);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        {currentUser.role === "STUDENT" && <Button className="float-end" onClick={() => setShowAll(!showAll)}>Enrollments</Button>}</h1>
      <hr />
      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}> Add </button>
            <button className="btn btn-warning float-end me-2"
              onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={1}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}


      <h2 id="wd-dashboard-published">
        Published Courses ({
          showAll
            ? courses.length
            : courses.filter((course) =>
              enrollments.some(
                (enrollment: any) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              )
            ).length
        })
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.filter((course) =>
            showAll || enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            ))

            .map((course) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <Card.Img variant="top" src={course.image} width="100%" height={160} /><br />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title overflow-hidden text-nowrap">
                        {course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 50 }}>
                        {course.description} </p>
                      <button className="btn btn-primary wd-go-button"> Go </button>
                      {currentUser.role === "FACULTY" &&
                        <>
                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger wd-card-delete-button float-end"
                            id="wd-delete-course-click">
                            Delete
                          </button>
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 wd-card-edit-button float-end" >
                            Edit
                          </button>
                        </>}
                    </div>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}
