import styled from "./layout.module.css";

function Layout({ children }) {
  return <div className={styled.container}>{children}</div>;
}

export default Layout;
