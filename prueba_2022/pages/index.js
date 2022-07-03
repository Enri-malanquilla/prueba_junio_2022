import dynamic from 'next/dynamic';

//desactive ssr
const NoSSRComponent = dynamic(() => import('./Main-page'), {
  ssr: false,
});

function HomePage() {
  return <NoSSRComponent />;
}

export default HomePage;
