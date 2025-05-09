import { Outlet } from "react-router-dom";
import { Sheader } from "./Sheader";
import { Sfooter } from "./Sfooter";

export const Sapplayout = () => {
  return (
    <div style={{
      background:"#fffff0",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{
        color: "white",
        padding: "15px",
        textAlign: "center",
        fontSize: "1.5rem"
      }}>
        <Sheader />
      </div>

      <div style={{
        flex: 1,
        padding: "20px",
        background: "#fff",
      }}>
        <Outlet />
      </div>

      <div style={{
        backgroundColor: "#11998e",
        color: "white",
        padding: "15px",
        textAlign: "center"
      }}>
        <Sfooter />
      </div>
    </div>
  );
};
