import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editTexto, setEditTexto] = useState('');

  // 1. Busca API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((data) => {
        setLista(data.map(item => ({ id: item.id, texto: item.title })));
        setCarregando(false);
      })
      .catch(() => setCarregando(false));
  }, []);

  // 2. Funções de Ação
  const adicionarTarefa = () => {
    if (tarefa.trim() === '') return;
    setLista([...lista, { id: Date.now(), texto: tarefa }]);
    setTarefa('');
  };

  const removerTarefa = (id) => setLista(lista.filter((item) => item.id !== id));

  const iniciarEdicao = (item) => {
    setEditId(item.id);
    setEditTexto(item.texto);
  };

  const salvarEdicao = (id) => {
    setLista(lista.map(item => item.id === id ? { ...item, texto: editTexto } : item));
    setEditId(null);
  };

  // 3. Renderização
  return (
    <div className="app-container">
      <h1>Minha To-Do List</h1>
      
      <div className="input-group">
        <input value={tarefa} onChange={(e) => setTarefa(e.target.value)} placeholder="Nova tarefa..." />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      {carregando ? <p>Carregando...</p> : (
        <ul>
          {lista.map((item) => (
            <li key={item.id} className="task-item">
              {editId === item.id ? (
                <>
                  <input value={editTexto} onChange={(e) => setEditTexto(e.target.value)} />
                  <button onClick={() => salvarEdicao(item.id)}>Salvar</button>
                </>
              ) : (
                <>
                  {item.texto}
                  <div>
                    <button onClick={() => iniciarEdicao(item)}>Editar</button>
                    <button onClick={() => removerTarefa(item.id)}>Apagar</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;