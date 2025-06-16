import Image from 'next/image';

type IntroductionProps = {
  className?: string;
};

export default function Introduction({ className }: IntroductionProps) {
  return (
    <section className={`pt-4 pb-20 md:pt-11 ${className ?? ""}`}>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 text-center md:text-left">
        {/* Text on the left */}
        <div className="md:w-2/3 w-full">
          <h1 className="text-6xl font-extrabold mb-4">Zach Taylor</h1>
          <p className="text-lg text-gray-300 mb-6">
            Software engineer passionate about building scalable applications and learning new technologies.
          </p>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded shadow transition"
          >
            View Resume
          </a>
        </div>

        {/* Image on the right */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-start">
            <Image
                src="/profile.jpg"
                alt="Zach Taylor"
                width={288} // adjust width as needed (72 * 4 for example)
                height={288} // adjust height as needed
                className="object-cover rounded-full shadow-lg"/>
        </div>
      </div>
    </section>
  );
}