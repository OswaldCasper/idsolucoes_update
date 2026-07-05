import Link from "next/link";

export default function BrevementePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">

      <div className="max-w-xl text-center">

        {/* título */}
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">
          Página em
          <span className="text-primary"> breve</span>
        </h1>

        {/* descrição */}
        <p className="mt-6 text-muted-foreground">
          Esta página encontra-se em desenvolvimento. Em breve estará disponível
          com conteúdo completo e actualizado.
        </p>

        {/* badge */}
        <div className="mt-6 inline-flex items-center rounded-full border px-4 py-2 text-sm">
          Em desenvolvimento
        </div>

        {/* botão */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-black px-5 py-3 text-white transition hover:bg-gray-800"
          >
            Voltar à página inicial
          </Link>
        </div>

      </div>

    </main>
  );
}