import Navbar from "../Navbar";

export default function Layout({ pageContents }) {
  return (
    <div
      style={{
        backgroundImage: "url('./images/home.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      {pageContents}
    </div>
  );
}
