import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-[radial-gradient(circle,#ededed_1px,transparent_1px)] bg-[size:20px_20px]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
