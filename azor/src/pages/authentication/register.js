import React from "react";
import RegisterForm from "../../components/forms/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center bg-light py-5 px-3">
        <div style={{ width: "600px" }}>
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
