import { BookData } from '@/types';

export const fetchBook = async (bookId: number): Promise<BookData | null> => {
  const url = `https://localhost:12345/book/${bookId}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error();

    return await res.json();
  } catch (err) {
    console.log(err);

    return null;
  }
};
