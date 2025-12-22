import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push('/login');
  };

  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '1em' }}>
          <Link href='/'>index</Link>
          <Link href='/search'>search</Link>
          <Link href='/book/1'>book/1</Link>
        </div>

        <div>
          <button onClick={onClickButton}>Login</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
