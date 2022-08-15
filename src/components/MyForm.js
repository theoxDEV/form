import './MyForm.css'

import React from 'react'

const MyForm = () => {
  return (
    <div>
        {/* 1 - Criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder='Digite o seu nome'></input>
            </div>
            <input type="submit" value="Enviar"></input>
        </form>
    </div>
  );
};

export default MyForm;