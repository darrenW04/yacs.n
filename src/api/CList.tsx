import { useState, useEffect } from "react";

/**
 * A component to fetch and display a list of courses from the API.
 */
const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetches data from the backend's /api/courses
    // Assumes frontend is running on port 3000, backend on 8000,
    // and you have a proxy set up in your package.json,
    // or you are handling CORS.
    fetch("/api/courses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="list-container">
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index} className="list-item">
            <strong>{course.name}</strong>
            {course.department && <span> ({course.department})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
