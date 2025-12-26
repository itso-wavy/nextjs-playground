import SearchableLayout from '@/components/searchable-layout';
import fetchBooks from '@/lib/fetch-books';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
// import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import styles from './index.module.css';
import BookItem from '@/components/book-item';
import { useRouter } from 'next/router';
import { BookData } from '@/types';

// context.query는 빌드 타임에 존재하지 않으므로, 클라이언트
/* export const getStaticProps = async (
  context: GetStaticPropsContext
) => {
  // console.log(context);

  const keyword = context.query.q;측에서 데이터를 요청해야 함!

  const books = await fetchBooks(keyword as string);

  return {
    props: {
      keyword,
      books,
    },
  };
};
 */

// export default function Page ({
//   keyword,
//   books,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);

  const router = useRouter();
  const { q: keyword } = router.query;

  const fetchSearchResult = async () => {
    if (!keyword) return;

    const books = await fetchBooks(keyword as string);

    setBooks(books);
  };

  useEffect(() => {
    fetchSearchResult();
  }, []);

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
