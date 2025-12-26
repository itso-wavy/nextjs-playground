import SearchableLayout from '@/components/searchable-layout';
import fetchBooks from '@/lib/fetch-books';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
// import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import styles from './index.module.css';
import BookItem from '@/components/book-item';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // console.log(context);

  const keyword = context.query.q;

  const books = await fetchBooks(keyword as string);

  return {
    props: {
      keyword,
      books,
    },
  };
};

export default function Page({
  keyword,
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const router = useRouter();

  // const { q } = router.query;

  // return <div>Search {q}</div>;
  return (
    <div>
      <div className={styles['search-keyword']}>Search {keyword}</div>
      <div>
        {books.map(book => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
