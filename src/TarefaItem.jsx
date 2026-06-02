function TarefaItem({ tarefa, onDeletar }) {
  return (
    <li>
      {tarefa}
      <button className="btn-deletar" onClick={onDeletar}>
        Deletar
      </button>
    </li>
  );
}

export default TarefaItem;
