import { useState, useEffect } from "react";

const STORAGE_KEY = "itc_preview_auth";
const ACCESS_PASSWORD = "inception2026";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === ACCESS_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    } else {
      setError(true);
      setShake(true);
      setInput("");
      setTimeout(() => setShake(false), 600);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0f1e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "48px 40px",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        {/* Logo mark */}
        <div style={{ marginBottom: "28px" }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23" stroke="#4ade80" strokeWidth="1.5" opacity="0.6" />
            <circle cx="24" cy="24" r="14" stroke="#4ade80" strokeWidth="1" opacity="0.4" />
            <circle cx="24" cy="24" r="5" fill="#4ade80" opacity="0.9" />
          </svg>
        </div>

        <h1 style={{ color: "#e2e8f0", fontSize: "22px", fontWeight: 600, marginBottom: "8px", letterSpacing: "-0.02em" }}>
          Inception Technology
        </h1>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", marginBottom: "32px" }}>
          Preview access — team only
        </p>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              animation: shake ? "shake 0.5s ease" : "none",
            }}
          >
            <input
              type="password"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(false); }}
              placeholder="Enter access code"
              autoFocus
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(255,255,255,0.06)",
                border: error ? "1px solid #f87171" : "1px solid rgba(255,255,255,0.15)",
                borderRadius: "8px",
                color: "#e2e8f0",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: "12px",
                transition: "border-color 0.2s",
              }}
            />
          </div>
          {error && (
            <p style={{ color: "#f87171", fontSize: "13px", marginBottom: "12px", marginTop: "-4px" }}>
              Incorrect access code
            </p>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#4ade80",
              color: "#0a0f1e",
              border: "none",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.01em",
            }}
          >
            Enter
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
        input::placeholder { color: rgba(255,255,255,0.25); }
        input:focus { border-color: rgba(74,222,128,0.5) !important; }
        button:hover { background: #86efac !important; }
      `}</style>
    </div>
  );
}
