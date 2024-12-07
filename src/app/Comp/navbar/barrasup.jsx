'use client'

import React, { useState } from 'react';
import'../navbar/barrasup.css';
import { Search, ShoppingCart, User } from 'lucide-react';

export const Barrasup = () => {

  const [searchQuery, setSearchQuery] = useState('');

  // Asegúrate de que la función está definida
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className='wrapper'>
    <div className="navbar">
        <img  
          src="/foto_sesion/logo.png" 
          alt="Logo" 
          className="logo"
        />
    
      <form onSubmit={handleSearchSubmit} className="searchContainer">
        <input 
          type="text" 
          placeholder="Buscar..." 
          value={searchQuery}
          onChange={handleSearchChange}
          className="searchInput"
        />
        <button type="submit" className="searchButton">
          <Search size={20} />
        </button>
      </form>

      <div className="actionContainer">
        <button className="cartButton">
          <ShoppingCart size={24} />
          <span>Carrito</span>
        </button>
        <button className="loginButton">
          <User size={24} />
        </button>
      </div>
    </div>
    </div>
  );
};