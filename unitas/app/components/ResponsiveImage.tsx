import React from 'react';
import Image from 'next/image';

interface ResponsiveImageProps {
  src: string | any;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function ResponsiveImage({
  src,
  alt,
  priority = false,
  className = '',
}: ResponsiveImageProps) {
  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden transition-all duration-500 ease-smooth bg-transparent">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-contain object-center w-full h-full transition-transform duration-500 ease-smooth ${className}`}
        sizes="100vw"
      />
    </div>
  );
}
