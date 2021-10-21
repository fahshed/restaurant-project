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
      <Navbar page={imageName} />
      <div style={{ paddingTop: "10vh" }}>{children}</div>
    </div>
  );
}
