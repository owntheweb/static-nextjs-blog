import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <>
      <div className="mt-6">
        <h1 className="text-2xl text-slate-600 mb-2">Hmm...</h1>
      </div>
      <div className="mb-4">
        You may have taken a wrong turn, yet there's still hope. <Link href={`/`} className="underline inline">Explore posts</Link>.
      </div>
      <ExportedImage
        src="/images/not-found-yet.jpg"
        width={1024}
        height={846}
        alt="robot is lost"
        sizes="100vw"
        className="mb-6"
      />
    </>
  )
}
