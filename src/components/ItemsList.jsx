import React from 'react';

const ItemsList = () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  
    return (
      <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-sm w-full mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Fruit Basket 🍓</h2>
        
        <ul className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <li
              key={index}
              className="py-3 px-4 hover:bg-gray-100 transition duration-200 rounded-md cursor-pointer text-gray-700 font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ItemsList;
