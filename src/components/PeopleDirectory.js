
import React, { useState, useEffect } from 'react';
import PeopleTable from './PeopleTable';
import EditForm from './EditForm';
import Sidebar from './Sidebar';
import { faker } from '@faker-js/faker';
import { useSearchParams } from 'react-router-dom'; // Import useSearchParams for query parameters in url

const generateFakeData = (num) => {
  return Array.from({ length: num }, (_, index) => ({
    id: index + 1,
    name: faker.name.fullName(),
    email: faker.internet.email(),
    role: faker.name.jobTitle(),
    team: faker.company.name(),
  }));
};

const PeopleDirectory = () => {
  const [data, setData] = useState(generateFakeData(100));
  const [editingPerson, setEditingPerson] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams(); // Hook to manage search params
  const [globalFilter, setGlobalFilter] = useState(searchParams.get('query') || '');

  // Update searchParams when globalFilter changes
  useEffect(() => {
    if (globalFilter) {
      setSearchParams({ query: globalFilter });
    } else {
      setSearchParams({});
    }
  }, [globalFilter, setSearchParams]);

  const handleEdit = (person) => {
    setEditingPerson(person);
  };

  const handleSave = (updatedPerson) => {
    setData(prevData =>
      prevData.map(person =>
        person.id === updatedPerson.id ? updatedPerson : person
      )
    );
    setEditingPerson(null);
  };

  const handleDelete = (id) => {
    setData(prevData => prevData.filter(person => person.id !== id));
  };

  const handleCancel = () => {
    setEditingPerson(null);
  };

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <h1 className="mt-4">People Directory</h1>
          <input
            type="text"
            placeholder="Search..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="form-control mb-4"
          />
          <PeopleTable
            data={data}
            globalFilter={globalFilter}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
      {editingPerson && (
        <EditForm
          person={editingPerson}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default PeopleDirectory;