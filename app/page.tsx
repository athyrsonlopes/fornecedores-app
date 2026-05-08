import Link from "next/link";

async function getFornecedores() {
  const res = await fetch ("http://localhost:3000/fornecedores", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const fornecedores = await getFornecedores();

  return (
    <main className="p-8">
      <h1 className="text-2x1 font-bold mb-6">Fornecedores</h1>
      <Link href="/novo" className="bg-blue-600 text-white rounded px-4 py-2 text-sm font-semibold mb-4 inline-block">Novo Fornecedor</Link> 
      <div className="gid gap-4">
        {fornecedores.map((fornecedor)=> (
          <div key={fornecedor.id} className="border rounded p-4">
            <h2 className="text-lg font-semibold">{fornecedor.nome}</h2>
            <p className="text-gray-600">CNPJ: {fornecedor.cnpj}</p>
            <p className="text-gray-600">Categoria: {fornecedor.categoria}</p>
            <span className={`text-sm font-medium ${fornecedor.status === "ativo" ? "text-green-600" : "text-red-600"}`}>{fornecedor.status}
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}
