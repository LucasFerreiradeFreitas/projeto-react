import { useState } from "react";
import TarefaItem from "./TarefaItem";

function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (input.trim() === "") return;
    setTarefas([
      ...tarefas,
      { id: Date.now(), texto: input, concluida: false },
    ]);
    setInput("");
  }

  function concluirTarefa(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
      ),
    );
  }

  function deletarTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md h-fit">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Minhas Tarefas
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            placeholder="Digite uma tarefa..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && adicionarTarefa()}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-indigo-500"
          />
          <button
            onClick={adicionarTarefa}
            className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg cursor-pointer"
          >
            Adicionar
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          {tarefas.map((tarefa) => (
            <TarefaItem
              key={tarefa.id}
              tarefa={tarefa.texto}
              concluida={tarefa.concluida}
              onConcluir={() => concluirTarefa(tarefa.id)}
              onDeletar={() => deletarTarefa(tarefa.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
