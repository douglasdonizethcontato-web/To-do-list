import React from 'react';

function Tarefa({ item, alternarConclusao, removerTarefa }) {
  return (
    <li className="item-lista">
      <span 
        className={item.concluida ? 'riscado' : ''} 
        onClick={() => alternarConclusao(item.id)}
        style={{ cursor: 'pointer' }}
      >
        {item.texto}
      </span>
      <button onClick={() => removerTarefa(item.id)}>X</button>
    </li>
  );
}

export default Tarefa;