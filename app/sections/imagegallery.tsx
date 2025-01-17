// components/ImageGallery.js

import Image from 'next/image';

export default function ImageGallery() {
    return (
      <div className="flex flex-col sm:flex-row justify-around py-16 sm:py-32 items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-gray-100">
        <Image
          src="/p2.png"
          alt="Bioscan"
          layout="fixed"
          width={328.34}
          height={676.99}
          className="rounded-lg"
        />
        <Image
          src="/p1.png"
          alt="Vital Signs"
          layout="fixed"
          width={328.34}
          height={676.99}
          className="rounded-lg"
        />
        <Image
          src="/p3.png"
          alt="Congratulations"
          layout="fixed"
          width={328.34}
          height={676.99}
          className="rounded-lg"
        />
      </div>
    );
  }