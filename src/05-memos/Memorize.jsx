import React, { useState, useMemo } from "react";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Orange" },
  { id: 3, name: "Banana" },
  { id: 4, name: "Grapes" },
  { id: 5, name: "Mango" },
];

const FilterList = () => {
  const [query, setQuery] = useState("");

  // Memoriza el resultado de filtrar la lista solo si query cambia
  const filteredItems = useMemo(() => {
    console.log("Filtrando lista...");
    return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div>
      <h1>Filter List</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
