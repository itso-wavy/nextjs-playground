import Link from 'next/link';

// app/not-found.tsx
export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <Link href='/'>Return Home</Link>
    </div>
  );
}
