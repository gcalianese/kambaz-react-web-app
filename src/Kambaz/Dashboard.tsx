import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1111/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/astronomy.jpg" width={200} />
            <div>
              <h5> ASTR1111 Intro to Astronomy </h5>
              <p className="wd-dashboard-course-title">
                Discover the universe  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/chemistry.jpg" width={200} />
            <div>
              <h5> SCI1000 Chemistry </h5>
              <p className="wd-dashboard-course-title">
                Create solutions  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/6000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/astronomy.jpg" width={200} />
            <div>
              <h5> CS6000 Cloud Computing</h5>
              <p className="wd-dashboard-course-title">
                Compute the clouds  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/2000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/painting.jpg" width={200} />
            <div>
              <h5> ART2000 Color Theory </h5>
              <p className="wd-dashboard-course-title">
                Unlock color  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/3500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/software.jpg" width={200} />
            <div>
              <h5> CS3500 Object-Oriented Design </h5>
              <p className="wd-dashboard-course-title">
                Design objects  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/2500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/statistics.jpg" width={200} />
            <div>
              <h5> MATH2500 Probability and Statistics </h5>
              <p className="wd-dashboard-course-title">
                Probably statistics  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/3302/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/writing.jpg" width={200} />
            <div>
              <h5> ENGW3302 Advanced Writing </h5>
              <p className="wd-dashboard-course-title">
                Write </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
);}
