import Link from 'next/link';

export default function Page() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '24px', color: '#333' }}>
        👋 안녕, Next.js App Router!
      </h1>

      <div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link
            href='/dashboard'
            style={{
              background: '#2196f3',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            📊 대시보드 (loading.tsx 확인)
          </Link>

          <Link
            href='/dashboard/error-test'
            style={{
              background: '#ff5722',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            🧪 에러 테스트 (error.tsx 확인)
          </Link>
        </div>
      </div>
    </div>
  );
}
