import { Navbar } from "../../components";

import "./style.css";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('./images/home.jpg')",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Navbar />
      Home is here where
    </div>
  );
}
