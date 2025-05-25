'use client';
import { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Manager' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Player' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Referee' },
];

export default function Home() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null); // 'view', 'edit', 'delete'

  const openModal = (type, user) => {
    setSelectedUser(user);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalType(null);
  };

  const handleDelete = () => {
    if (selectedUser) {
      setUsers(users.filter((u) => u.id !== selectedUser.id));
      closeModal();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl text-center font-bold mb-6">User Management</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            
            <tr
                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
      {/* Modal */}
      {modalType && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {modalType === 'view' && (
              <>
                <h2 className="text-xl font-semibold mb-4">View User</h2>
                <p><strong>Name:</strong> {selectedUser.name}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Role:</strong> {selectedUser.role}</p>
              </>
            )}

            {modalType === 'edit' && (
              <>
                <h2 className="text-xl font-semibold mb-4">Edit User</h2>
                <p className="text-gray-500">Form not implemented yet.</p>
              </>
            )}

            {modalType === 'delete' && (
              <>
                <h2 className="text-xl font-semibold mb-4 text-red-600">Delete User</h2>
                <p>Are you sure you want to delete <strong>{selectedUser.name}</strong>?</p>
                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
                  >
                    Confirm
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
