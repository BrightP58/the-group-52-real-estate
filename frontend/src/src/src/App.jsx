import { AuthProvider, useAuth } from "./features/auth/AuthContext";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import { useState } from "react";

function AppContent() {
  const { user, isAuthenticated, logout, loading } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <h1>Welcome to the Real Estate App</h1>

        <p>
          Welcome, {user?.firstName} {user?.lastName}
        </p>

        <p>Email: {user?.email}</p>

        <p>Role: {user?.role}</p>

        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      {showRegister ? (
        <>
          <Register />

          <button onClick={() => setShowRegister(false)}>
            Already have an account? Login
          </button>
        </>
      ) : (
        <>
          <Login />

          <button onClick={() => setShowRegister(true)}>
            Don't have an account? Register
          </button>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;