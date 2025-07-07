import React from "react";
import { useNavigate } from "react-router-dom";

function MyHome() {
  const navigate = useNavigate();

  const cardStyle = {
    padding: "2rem",
    minWidth: "220px",
    textAlign: "center",
    borderRadius: "12px",
    border: "2px solid #ddd",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
    transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
    background: "#fefefe",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    borderColor: "#888",
  };

  const [hovered, setHovered] = React.useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f5f7fa, #c3cfe2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
        padding: "2rem",
      }}
    >
        
      <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem", color: "#333" }}>
        🎯 Welcome to the Quiz Portal
      </h1>
      <div className="flex justify-center items-center gap-2 font-bold">
            <p>made by </p>
            <Instagram className="w-5 h-5 text-gray-600" />
            <a href='https://www.instagram.com/imnb57/'>imnb57</a>
          </div>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "2rem" }}>
        Select a quiz to begin:
      </p>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { label: "Java Exam", path: "/javaQuiz" },
          { label: "Python Quiz", path: "/pythonQuiz" },
        ].map((quiz, index) => (
          <div
            key={index}
            onClick={() => navigate(quiz.path)}
            style={{
              ...cardStyle,
              ...(hovered === index ? cardHoverStyle : {}),
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <h2 style={{ margin: 0, fontSize: "1.4rem", color: "#222" }}>{quiz.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyHome;
