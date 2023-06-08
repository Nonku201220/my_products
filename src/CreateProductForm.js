import React, { useState } from 'react';

const CreateProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      price,
      description,
      category
    };

    try {
      const response = await fetch('https://dummyjson.com/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log('Product created successfully');
      } else {
        const error = await response.json();
        console.log('Failed to create product:', response.status, error);
      }
    } catch (error) {
      console.error('Failed to create product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProductForm;
