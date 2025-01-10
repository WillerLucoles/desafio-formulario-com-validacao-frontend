import React, { useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";
import { validationSchema } from "../utils/validationSchema";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    linkedIn: "",
    github: "",
  });

  const { errors, validate } = useFormValidation(validationSchema);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData };
    if (updatedFormData.linkedIn && !updatedFormData.linkedIn.startsWith("http")) {
      updatedFormData.linkedIn = "https://" + updatedFormData.linkedIn;
    }
    if (updatedFormData.github && !updatedFormData.github.startsWith("http")) {
      updatedFormData.github = "https://" + updatedFormData.github;
    }

    console.log("Form data before validation:", updatedFormData);
    const isValid = validate(updatedFormData);
    if (isValid) {
      console.log("Form data", updatedFormData);
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
      alert("Cadastro realizado com sucesso!");
    } else {
      console.log("Validation errors:", errors);
      alert("Falha ao cadastrar. Verifique os dados informados.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
          Nome completo:
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Ex: Harry Potter"
          onChange={handleChange}
          value={formData.fullName}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.fullName && <div className="text-red-500 text-xs italic">{errors.fullName}</div>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          E-mail;
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
          onChange={handleChange}
          value={formData.email}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.email && <div className="text-red-500 text-xs italic">{errors.email}</div>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Telefone:
        </label>
        <input
          id="phone"
          name="phone"
          type="text"
          placeholder="(11) 91234-5678"
          onChange={handleChange}
          value={formData.phone}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.phone && <div className="text-red-500 text-xs italic">{errors.phone}</div>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
          Cargo pretendido:
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
          <option value="DevOps Engineer" label="DevOps Engineer" />
          <option value="Engenheiro de Dados" label="Engenheiro de Dados" />
          <option value="QA Engineer" label="QA Engineer" />
          <option value="Scrum Master" label="Scrum Master" />
          <option value="Product Owner" label="Product Owner" />
        </select>
        {errors.role && <div className="text-red-500 text-xs italic">{errors.role}</div>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedIn">
          Seu LinkedIn:
        </label>
        <input
          id="linkedIn"
          name="linkedIn"
          type="text"
          placeholder="https://linkedin.com/in/seu-perfil"
          onChange={handleChange}
          value={formData.linkedIn}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.linkedIn && <div className="text-red-500 text-xs italic">{errors.linkedIn}</div>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github">
          Seu GitHub:
        </label>
        <input
          id="github"
          name="github"
          type="text"
          placeholder="https://github.com/seu-usuario"
          onChange={handleChange}
          value={formData.github}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.github && <div className="text-red-500 text-xs italic">{errors.github}</div>}
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;