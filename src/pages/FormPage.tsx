import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/FormPage.css'

const FormPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    id: '',
    name: '',
  });

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      // Simular busca de dados para edição
      setFormData({ id, name: 'Item Exemplo' });
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.id) {
      console.log('Editando item:', formData);
    } else {
      console.log('Criando novo item:', formData);
    }
  };

  return (
    <div>
      <h1>{formData.id ? 'Editar Item' : 'Criar Novo Item'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <button type="submit">{formData.id ? 'Salvar Alterações' : 'Criar'}</button>
      </form>
    </div>
  );
};

export default FormPage;