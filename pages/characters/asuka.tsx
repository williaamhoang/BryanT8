import { useRouter } from 'next/router';

const CharacterPage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Character: {name}</h1>
      <p>Details about {name} will go here.</p>
    </div>
  );
};

export default CharacterPage;
