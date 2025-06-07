//  Form Validation
// Prompt:
// Build a login form with:
// TypeScript props
// Email and password inputs
// Show validation errors
// Disable submit if invalid

// 'use client'
// import { useEffect, useState } from "react";

// const LoginForm: React.FC = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const isValid = email.includes('@') && password.length >= 6;

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (isValid) {
//             alert(`Logging in with ${email}`)
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//             <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//             <button type="submit" disabled={!isValid}>Login</button>
//         </form>
//     )
// }

// export default LoginForm;

//  Fetch Data with Loading and Error States
// Prompt:
// Fetch users from https://jsonplaceholder.typicode.com/users
// Show loading spinner and error message if needed
// Use TypeScript to define user data types




import React, { useState, useEffect } from 'react';

type User = { id: number; name: string };

const FetchUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers)
      .catch(() => setError('Failed to fetch users'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};
