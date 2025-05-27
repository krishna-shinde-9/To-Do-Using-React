import { useState } from 'react';
import './App.css';

function App() {
  const [input, setinput] = useState('');
  const [arr, setarr] = useState([]);

  function toggle(index) {
     
     const updated = arr.map((val,i)=>{
                
        return  index ==i ? {...val,done:!val.done}:val

        })
 
    setarr(updated);
  }

  function del(index) {
    const updated = arr.filter((_, i) => i !== index);
    setarr(updated);
  }

  function up(index) {
    const data = prompt('Update task:', arr[index].text);
    if (!data) return alert('You entered nothing!');
    const updated = arr.map((task, i) =>
      i === index ? { ...task, text: data } : task
    );
    setarr(updated);
  }

  function addTask() {
    if (input.trim() === '') {
      alert('Please enter a task!');
      return;
    }
    setarr([...arr, { text: input, done: false }]);
    setinput('');
  }

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4 py-6">
      <div className="bg-gray-800 w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl p-6 shadow-2xl">
        <h1 className="text-center text-2xl font-bold mb-6 text-cyan-400">📝 My To-Do List</h1>

        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="Add a task..."
            className="flex-grow p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 outline-none"
          />
          <button
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-md text-white transition-all"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        <ul className="space-y-3 max-h-[50vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-gray-700">
          {arr.map((v, index) => (
            <li key={index} className="flex items-center text-white">
              <input
                type="checkbox"
                className="w-4 h-4 mr-3"
                checked={v.done}
                onChange={() => toggle(index)}
              />
              <span className={`flex-grow ${v.done ? 'line-through text-gray-400' : ''}`}>
                {v.text}
              </span>
              <button
                className="text-sm border border-red-500 hover:bg-red-600 px-2 py-1 rounded text-white ml-2"
                onClick={() => del(index)}
              >
                Delete
              </button>
              <button
                className="text-sm border border-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded text-white ml-2"
                onClick={() => up(index)}
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
