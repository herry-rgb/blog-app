import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";

function Home() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card>
        <h1 className="text-4xl font-bold mb-4">
          Home Page
        </h1>

        <p className="mb-6 text-gray-600">
          Welcome to my Blog App
        </p>

        <div className="flex gap-3 justify-center">
          <Button
            text="Go To Posts"
            onClick={() => navigate("/posts")}
          />

          <Button
            text="Open Modal"
            onClick={() => setIsOpen(true)}
          />
        </div>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <h2 className="text-2xl font-bold mb-2">
            Welcome 🎉
          </h2>

          <p>
            This is a reusable Modal Component.
          </p>
        </Modal>
      </Card>
    </div>
  );
}

export default Home;