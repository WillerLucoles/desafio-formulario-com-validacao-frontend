import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ImageTeam from "./assets/pexels-fauxels-3184423.jpg";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full lg:w-1/2">
        <Header />
      </div>

      <div className="flex flex-1">
        <div
          className="hidden lg:block w-1/2 bg-cover bg-center min-h-screen"
          style={{ backgroundImage: `url(${ImageTeam})` }}
        ></div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between px-4">
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Bem-vindo ao Front-end Fusion!</h1>
              <p className="text-gray-700 max-w-md mt-3">Preencha o formulário para dar o primeiro passo e entrar para nossa equipe.</p>
            </div>
            <Form />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;