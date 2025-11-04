import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-8">Event Not Found</h2>
        <p className="text-gray-500 mb-8">
          The event you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/events"
          className="inline-block bg-[#019B83] text-white px-6 py-3 rounded-lg hover:bg-[#017a6a] transition-colors"
        >
          Back to Events
        </Link>
      </div>
    </div>
  );
}
