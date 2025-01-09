import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data", formData);
    // Save data locally
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
          Nome completo
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={handleChange}
          value={formData.fullName}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Telefone
        </label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={handleChange}
          value={formData.phone}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
          Cargo pretendido
        </label>
        <select
          id="role"
          name="role"
          onChange={handleChange}
          value={formData.role}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="" label="Selecione um cargo" />
          <option value="Desenvolvedor Frontend" label="Desenvolvedor Frontend" />
          <option value="Desenvolvedor Backend" label="Desenvolvedor Backend" />
          <option value="Desenvolvedor Full Stack" label="Desenvolvedor Full Stack" />
          <option value="Desenvolvedor Mobile" label="Desenvolvedor Mobile" />
          <option value="Desenvolvedor de Software" label="Desenvolvedor de Software" />
          <option value="Engenheiro de Software" label="Engenheiro de Software" />
          <option value="Arquiteto de Software" label="Arquiteto de Software" />
          <option value="UI/UX Designer" label="UI/UX Designer" />
          <option value="Analista de Sistemas" label="Analista de Sistemas" />
          <option value="Analista Programador" label="Analista Programador" />
        </select>
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;