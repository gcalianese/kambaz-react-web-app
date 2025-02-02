import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} /><br />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                  <Card.Text>Full Stack software developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1111/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/astronomy.jpg" width="100%" height={160} /><br />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">ASTR1111 Intro to Astronomy</Card.Title>
                  <Card.Text>Discover the universe</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1000/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/chemistry.jpg" width="100%" height={160} /><br />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">SCI1000 Chemistry</Card.Title>
                  <Card.Text>Create solutions</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/6000/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/cloud-computing.jpg" width="100%" height={160} /><br />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS6000 Cloud Computing</Card.Title>
                  <Card.Text>Compute the clouds</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2000/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/painting.jpg" width="100%" height={160} /><br />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">ART2000 Color Theory</Card.Title>
                  <Card.Text>Unlock color</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/3500/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/software.jpg" width="100%" height={160} /><br />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS3500 Object-Oriented Design</Card.Title>
                  <Card.Text>Design objects</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2500/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/statistics.jpg" width="100%" height={160} /><br />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">MATH2500 Probability and Statistics</Card.Title>
                  <Card.Text>Probably statistics</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/3302/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/writing.jpg" width="100%" height={160} /><br />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">ENGW3302 Advanced Writing</Card.Title>
                  <Card.Text>Write</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
