"use client";

import { useState } from "react"; 
import { useRouter } from "next/navigation"

export default function NovoFornecedor() {
  const router = useRouter();
  const [form, setForm] = useState({
    nome: "",
    cnpj: "",
    categoria: "",
    status: "ativo",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("http://localhost:3000/fornecedores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fornecedor: form}),
    });
    router.push("/")
  }

  return (
    <main className="p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Novo Fornecedor</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} className="border rounded p-2" />
        <input name="cnpj" placeholder="CNPJ" value={form.cnpj} onChange={handleChange} className="border rounded p-2" />
        <input name="categoria" placeholder="Categoria" value={form.categoria} onChange={handleChange} className="border rounded p-2" />
        <select name="status" value={form.status} onChange={handleChange} className="border rounded p-2">
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white rounded p-2 font-semibold">
          Cadastrar
        </button>
      </form>
    </main>
  );
}

