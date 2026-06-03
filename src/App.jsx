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
    <div>
      <h1>Minhas Tarefas</h1>

      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Digite uma tarefa..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && adicionarTarefa()}
        />

        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
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
  );
}

export default App;
