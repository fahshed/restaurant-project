import Navbar from "../Navbar";

export default function Layout({ children, imageName }) {
  return (
    <div
      style={{
        backgroundImage: `url('./images/${imageName}')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <div style={{ paddingTop: 120 }}>{children}</div>
    </div>
  );
}
