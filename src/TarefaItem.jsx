function TarefaItem({ tarefa, concluida, onConcluir, onDeletar }) {
  return (
    <li className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg">
      <span
        onClick={onConcluir}
        className={`flex-1 text-sm cursor-pointer ${concluida ? "line-through text-gray-400" : "text-gray-700"}`}
      >
        {tarefa}
      </span>
      <button
        onClick={onDeletar}
        className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg cursor-pointer ml-4"
      >
        Deletar
      </button>
    </li>
  );
}

export default TarefaItem;
