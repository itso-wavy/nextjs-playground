import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import style from './searchable-layout.module.css';

/**
 * book detail 페이지 제외하고 발생해야 하는 레이아웃.
 */
export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || '');
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  // const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') onSubmit();
  // };

  return (
    <div>
      <div className={style.searchbar_container}>
        <form onClick={onSubmit}>
          <input
            value={search}
            // onKeyDown={onKeyDown}
            onChange={onChangeSearch}
            placeholder='검색어를 입력하세요...'
          />
          <button>검색</button>
        </form>
        {children}
      </div>
    </div>
  );
}
