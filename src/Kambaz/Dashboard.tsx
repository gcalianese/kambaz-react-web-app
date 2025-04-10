import { Link } from "react-router-dom";
import { Row, Col, Card, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import * as enrollmentsClient from "./enrollmentsClient";
import { enroll, unenroll, setEnrollmentsR } from "./enrollmentsReducer";
import { setCoursesR } from "./Courses/reducer";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [courses, setCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
    try {
      if (showAll) {
        const courses = await courseClient.fetchAllCourses();
        setCourses(courses);
        dispatch(setCoursesR(courses))
      } else {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
        dispatch(setCoursesR(courses))
      }

    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const fetchEnrollments = async () => {
    try {
      const enrollments = await enrollmentsClient.getEnrollments();
      dispatch(setEnrollmentsR(enrollments))
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);


  const newCourse = {
    _id: uuidv4(),
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    image: "images/reactjs.jpg"
  };
  const [course, setCourse] = useState(newCourse);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, [showAll]);

  const dispatch = useDispatch();

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    console.log("adding new course " + JSON.stringify(newCourse))
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    }));
  };

  const enrollInCourse = async (user : any, course : any) => {
    await enrollmentsClient.enroll(user._id, course._id);
    dispatch(enroll({user, course}))
  };

  const unenrollInCourse = async (user : any, course : any) => {
    await enrollmentsClient.unenroll(user._id, course._id);
    dispatch(unenroll({user, course}))
    fetchCourses();
  };



  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        {currentUser.role !== "FACULTY" && <Button className="float-end" onClick={() => setShowAll(!showAll)}>Enrollments</Button>}</h1>
      <hr />
      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => {
                const updatedCourse = { ...course, _id: uuidv4(), image: "images/reactjs.jpg" }
                setCourse(updatedCourse)
                addNewCourse()
                enrollInCourse(currentUser, updatedCourse);
              }}> Add </button>
            <button className="btn btn-warning float-end me-2"
              onClick={() => updateCourse()} id="wd-update-course-click">
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
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .map((course: any) => (
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
                          <Button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger wd-card-delete-button float-end"
                            id="wd-delete-course-click">
                            Delete
                          </Button>
                          <Button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course)
                            }}
                            className="btn btn-warning me-2 wd-card-edit-button float-end" >
                            Edit
                          </Button>
                        </>}
                      {currentUser.role !== "FACULTY" && (
                        enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id) ?
                          <Button className="btn btn-danger wd-card-delete-button" onClick={(e) => {
                            e.preventDefault();
                            unenrollInCourse(currentUser, course);
                          }
                          }>Unenroll</Button>
                          :
                          <Button className="btn btn-success wd-card-delete-button" onClick={(e) => {
                            e.preventDefault();
                            enrollInCourse(currentUser, course);
                          }}>Enroll</Button>
                      )}
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
