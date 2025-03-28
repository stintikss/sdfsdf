import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function AddProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { name, email, bio };

    const res = await fetch('/api/add-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (res.ok) {
      setMessage('Profile added successfully!');
    } else {
      setMessage('Failed to add profile.');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Add Profile</title>
        <meta name="description" content="Add your profile" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Add Your Profile</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <label htmlFor="bio" className={styles.label}>Bio:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className={styles.textarea}
            required
          ></textarea>

          <button type="submit" className={styles.button}>Add Profile</button>
        </form>

        {message && <p>{message}</p>}
      </main>
    </div>
  );
}
