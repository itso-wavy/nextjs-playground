'use client';

import { useEffect } from 'react';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog error:', error);
  }, [error]);

  return (
    <div>
      <h2>Blog loading failed!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
