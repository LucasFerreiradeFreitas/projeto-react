function TarefaItem({ tarefa, concluida, onConcluir, onDeletar }) {
  return (
    <li
      style={{
        textDecoration: concluida ? "line-through" : "none",
        opacity: concluida ? 0.5 : 1,
      }}
    >
      <span onClick={onConcluir} style={{ cursor: "pointer", flex: 1 }}>
        {tarefa}
      </span>
      <button className="btn-deletar" onClick={onDeletar}>
        Deletar
      </button>
    </li>
  );
}

export default TarefaItem;
