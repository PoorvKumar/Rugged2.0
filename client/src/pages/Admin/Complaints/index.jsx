import React, { useEffect, useState } from "react";
import api from "../../../api/api";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        // Make a GET request to fetch complaints data from the backend
        const response = await api.get("/contact/getcomplaints");

        // Assuming the response contains an array of complaints
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    // Call the fetchComplaints function
    fetchComplaints();
  }, []); // The empty dependency array ensures that the effect runs only once, equivalent to componentDidMount

  return (
    <div className="container mx-w/3 mt-8">
      <h1 className="text-3xl font-bold mb-4">Complaints List</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-cyan-900 text-xl font-bold">
            <th className="py-3 px-4 border-b text-left">Name</th>
            <th className="py-3 px-4 border-b text-left">Email</th>
            <th className="py-3 px-4 border-b text-left">Phone</th>
            <th className="py-3 px-4 border-b text-left">Subject</th>
            <th className="py-3 px-4 border-b text-left">Message</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint._id} className="hover:bg-sky-100">
              <td className="py-3 px-4 border-b text-left">{complaint.name}</td>
              <td className="py-3 px-4 border-b text-left">
                {complaint.email}
              </td>
              <td className="py-3 px-4 border-b text-left">
                {complaint.phone}
              </td>
              <td className="py-3 px-4 border-b text-left">
                {complaint.subject}
              </td>
              <td className="py-3 px-4 border-b text-left">
                {complaint.message}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Complaints;
