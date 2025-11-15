import { useState, useEffect } from "react";

/**
 * A component to fetch and display a list of professors from the API.
 */
const ProfessorList = () => {
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetches data from the backend's /api/professors
    fetch("/api/professors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProfessors(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div>Loading professors...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="list-container">
      <h2>Faculty</h2>
      <ul>
        {professors.map((prof, index) => (
          <li key={index} className="list-item">
            <strong>{prof.name}</strong>
            {prof.department && <span> ({prof.department})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessorList;
