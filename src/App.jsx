import { useState } from 'react';
import './index.css';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() === '') return;
    setLista([...lista, { id: Date.now(), texto: tarefa }]);
    setTarefa('');
  };
  const removerTarefa = (id) => {
  setLista(lista.filter((item) => item.id !== id));
};

  return (
    <div className="app-container" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Minha To-Do List</h1>
      
      <div className="input-group">
        <input 
          value={tarefa} 
          onChange={(e) => setTarefa(e.target.value)} 
          placeholder="O que precisa ser feito?"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {lista.map((item) => (
          <li key={item.id} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
            {item.texto}
            <button onClick={() => removerTarefa(item.id)}>Apagar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;