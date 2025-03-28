import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Profile({ user }) {
  const router = useRouter();
  const { id } = router.query;

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{user.name} - Profile</title>
        <meta name="description" content={`Profile of ${user.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{user.name}</h1>
        <div className={styles.profile}>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch('http://localhost:3000/api/data');
  const users = await res.json();
  const user = users.find((user) => user.id.toString() === id);

  return {
    props: {
      user: user || null,
    },
  };
}
