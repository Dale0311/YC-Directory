import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-white text-black px-4'>
      {/* Large 404 text */}
      <h1 className='text-[8rem] font-extrabold tracking-tight text-[#FF2D6B]'>
        404
      </h1>

      {/* Message */}
      <h2 className='text-2xl md:text-3xl font-bold mt-2'>Page Not Found</h2>
      <p className='text-lg text-center mt-3 max-w-md text-gray-600'>
        Sorry, we couldn’t find the page you’re looking for. Try heading back to
        the homepage or explore startups instead.
      </p>

      {/* Actions */}
      <div className='mt-8 flex gap-4'>
        <Link
          href='/'
          className='px-6 py-3 rounded-full bg-[#FF2D6B] text-white font-semibold hover:opacity-90 transition'
        >
          Go Home
        </Link>
        <Link
          href='/startups'
          className='px-6 py-3 rounded-full border-2 border-[#FF2D6B] text-[#FF2D6B] font-semibold hover:bg-[#FF2D6B] hover:text-white transition'
        >
          Browse Startups
        </Link>
      </div>
    </main>
  );
}
