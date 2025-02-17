import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ListPage.css'

const ListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/create-edit');
  };

  return (
    <div>
      <h1>Listagem de Itens</h1>
      <button onClick={handleCreate}>Criar Novo Item</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* Exemplo de item */}
          <tr>
            <td>1</td>
            <td>Item Exemplo</td>
            <td>
              <button onClick={() => navigate('/create-edit?id=1')}>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListPage;