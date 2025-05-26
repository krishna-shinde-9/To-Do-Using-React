import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [store, setStore] = useState([]);

  const addTask = () => {
    if (input.trim() === '') return;
    setStore([...store, { text: input, done: false }]);
    setInput('');
  };

  const deleteTask = (index) => {
    setStore(store.filter((_, i) => i !== index));
  };

  const updateTask = (index) => {
    const updatedText = prompt('Update task:', store[index].text);
    if (updatedText?.trim()) {
      const updated = store.map((task, i) =>
        i === index ? { ...task, text: updatedText } : task
      );
      setStore(updated);
    }
  };

  const toggleDone = (index) => {
    const updated = store.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setStore(updated);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="bg-gray-800 w-full max-w-md rounded-xl p-6 shadow-lg">
        <h1 className="text-center text-xl font-bold mb-4 text-cyan-400">📝 My To-Do List</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
            className="flex-grow p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 outline-none"
          />
          <button
            onClick={addTask}
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-md text-white"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2 max-h-80 overflow-y-auto">
          {store.map((task, i) => (
            <li
              key={i}
              className="bg-gray-700 p-3 rounded-md flex justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleDone(i)}
                  className="accent-cyan-500"
                />
                <span className={task.done ? 'line-through text-gray-400' : ''}>
                  {task.text}
                </span>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => updateTask(i)}
                  className="text-yellow-400 hover:text-yellow-300 text-sm"
                >
                  ✏️
                </button>
                <button
                  onClick={() => deleteTask(i)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
