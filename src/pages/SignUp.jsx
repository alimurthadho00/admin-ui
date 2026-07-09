import { useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";
import { registerService } from "../services/authService";
import AppSnackbar from "../components/Elements/AppSnackbar";

function SignUp() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async (values) => {
    try {
      await registerService(values.name, values.email, values.password);

      setSnackbar({
        open: true,
        message: "Register Berhasil",
        severity: "success",
      });
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.msg || "Email sudah pernah digunakan sebelumnya",
        severity: "error",
      });
    }
  };

  return (
    <>
      <AuthLayout>
        <FormSignUp onSubmit={handleRegister} />

        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </AuthLayout>
    </>
  );
}

export default SignUp;