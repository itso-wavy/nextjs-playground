import SearchableLayout from '@/components/searchable-layout';
import styles from '@/styles/Home.module.css';
import { ReactNode } from 'react';

export default function Home() {
  return <></>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
