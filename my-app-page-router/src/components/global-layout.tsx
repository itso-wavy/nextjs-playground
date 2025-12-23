import { ReactNode } from 'react';
import Link from 'next/link';
import style from './global-layout.module.css';

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  // const router = useRouter();

  // const onClickButton = () => {
  //   router.push('/login');
  // };

  // useEffect(() => {
  //   router.prefetch('/test');
  // }, [router]);

  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={'/'}>📚 ONEBITE BOOKS</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 @winterlood</footer>
    </div>
  );
};

export default GlobalLayout;
