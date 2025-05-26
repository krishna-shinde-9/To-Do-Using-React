import { useState } from 'react';

function App() {
  const [getinput, setinput] = useState('');
  const [getstore, setstore] = useState([]);

  const addTask = () => {
    if (getinput.trim() === '') {
      alert('Please enter a task');
      return;
    }
    setstore([...getstore, { text: getinput, done: false }]);
    setinput('');
  };

  const deleteTask = (index) => {
    setstore(getstore.filter((_, i) => i !== index));
  };

  const updateTask = (index) => {
    const updatedText = prompt('Update task:', getstore[index].text);
    if (updatedText?.trim()) {
      const updated = getstore.map((task, i) =>
        i === index ? { ...task, text: updatedText } : task
      );
      setstore(updated);
    }
  };

  const toggleDone = (index) => {
    const updated = getstore.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setstore(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 text-gray-800">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-700 tracking-wide drop-shadow-sm">
          🚀 Futuristic To-Do List
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <input
            type="text"
            value={getinput}
            onChange={(e) => setinput(e.target.value)}
            placeholder="Enter your next mission..."
            className="flex-grow p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            onClick={addTask}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            + Add Task
          </button>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 max-h-[60vh] overflow-y-auto shadow-inner">
          <ul className="space-y-4">
            {getstore.length === 0 ? (
              <p className="text-center text-gray-500">🛸 Nothing to do yet!</p>
            ) : (
              getstore.map((task, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg shadow-sm ${
                    task.done ? 'bg-green-100 line-through text-gray-500' : 'bg-white'
                  } transition`}
                >
                  <span
                    onClick={() => toggleDone(index)}
                    className="cursor-pointer flex-grow text-lg"
                  >
                    {task.text}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateTask(index)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      🗑️
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
