return (
    <div className="container">
      <h1>Minha To-Do List</h1>
      <div className="input-group">
        <input 
          value={tarefa} 
          onChange={(e) => setTarefa(e.target.value)} 
          onKeyDown={(e) => { if (e.key === 'Enter') adicionarTarefa(); }}
          placeholder="Nova tarefa..."
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {lista.map(item => (
          <Tarefa 
            key={item.id} 
            item={item} 
            alternarConclusao={alternarConclusao} 
            removerTarefa={removerTarefa} 
          />
        ))}
      </ul>
      {/* O segundo bloco UL foi removido daqui */}
    </div>
  );