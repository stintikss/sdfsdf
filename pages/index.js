import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Awesome Site</title>
        <meta name="description" content="A cool site with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Awesome Site</h1>

        <div>
          <Link href="/add-profile"className={styles.card}>
            Add Your Profile
          </Link>
        </div>

        <div className={styles.grid}>
          {users.map((user) => (
            <Link key={user.id} href={`/profile?id=${user.id}`} className={styles.card}>
              <h3>{user.name}</h3>
              <p>{user.bio}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/data');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
