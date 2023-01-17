import React from "react";
import LoginForm from "../../components/forms/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center bg-light py-5 px-3">
        <div style={{ width: "500px" }}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
