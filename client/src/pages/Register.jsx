import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Register() {
  const[FirstName, setFirstName]=useState('')
  const [LastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:7006/api/register', {
        FirstName,
        LastName,
        username,
        email,
     
      });
      alert('Registration successful!');
      navigate('/Register');
    } catch (err) {
      alert('Registration failed');
      console.log(err);
    }
  };

  return (
    <>
    <Navbar/>
    <div
  className="min-h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: "url('')"
  }}
>
  <form
    onSubmit={handleRegister}
    className="bg-white bg-opacity-80 backdrop-blur-md shadow-lg p-8 rounded-2xl w-full max-w-md"
  >
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Register</h2>

 <input
      value={FirstName}
      onChange={(e) => setFirstName(e.target.value)}
      placeholder="FirstName"
      className="w-full mb-4 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      value={LastName}
      onChange={(e) => setLastName(e.target.value)}
      placeholder="LastName"
     
      className="w-full mb-6 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Username"
      className="w-full mb-4 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      type="email"
      className="w-full mb-4 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition duration-300"
    >
      Register
    </button>
  </form>
</div>

    </>
  );
}


export default Register;

