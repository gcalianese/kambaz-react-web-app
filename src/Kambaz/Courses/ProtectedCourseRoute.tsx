import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router";
import { getEnrollments } from "../enrollmentsClient";
import { setEnrollmentsR } from "../enrollmentsReducer";
import { useEffect, useState } from "react";


export default function ProtectedCourseRoute({ children }: { children: JSX.Element }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const fetchEnrollments = async () => {
            try {
                const enrollments = await getEnrollments();
                dispatch(setEnrollmentsR(enrollments));
            } catch (error) {
                console.error(error);
            } finally {
                setChecked(true);
            }
        };
        fetchEnrollments();
    }, [dispatch]);

    const isEnrolled = enrollments.some(
        (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === cid
    );

    if (!checked) {
        return null;
    }

    if (!isEnrolled) {
        return <Navigate to="/Kambaz/Dashboard" />;
    }

    return children;
}



