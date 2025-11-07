import React from "react";
import Container from "../components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 text-center text-sm opacity-70">
      <Container>
        © {new Date().getFullYear()} 원설아 Vibe coded with React & Tailwind.
      </Container>
    </footer>
  );
}
