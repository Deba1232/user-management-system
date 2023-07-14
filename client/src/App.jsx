import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import UserCard from "./components/UserCard";

export default function App() {
  const [users, setUsers] = useState([]);
  const BASE_URL = "http://localhost:8080";

  const fetchData = async () => {
    await axios.get(`${BASE_URL}/users`).then((res) => setUsers(res.data));
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.error("error: ", err);
    }
  }, []);

  console.log(users);

  return (
    <>
      <main className="flex flex-col items-center gap-4">
        <Header />
        <UserCard />
      </main>
    </>
  );
}
