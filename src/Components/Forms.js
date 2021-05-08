import React, { useState } from "react";

export function Form(props) {
    const {onSave} = props;
    const [text, setText] = useState('');
      
    return (
      <form onSubmit={e => e.preventDefault()}>
      <input
      value={text || ''} 
      placeholder="Digite aqui a sua tarefa"
      className="field"
      onChange={e => setText(e.currentTarget.value)}/>
      <button 
      className="button"
      onClick={() =>  {
      onSave(text)
      setText("");
    }}>Salvar</button>
      </form>

     )}
  