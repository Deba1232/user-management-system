import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const BASE_URL = "http://localhost:8080";

  const fetchData = async () => {
    await axios.get(`${BASE_URL}/users`).then((res) => setUsers(res.data));
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error("error: ",error);
    }
  }, []);

  console.log(users);

  return (
    <>
      <main>
        <h1 className="text-center text-[#fff] text-3xl">
          User Management System
        </h1>
        <div>
          <h1>Name:</h1>
        </div>
      </main>
    </>
  );
}
