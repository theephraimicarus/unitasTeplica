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
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg image-hover-effect hover:shadow-lg-depth transition-all duration-500 ease-smooth">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-contain lg:rounded-bl-[10px] lg:hover:rounded-bl-[50px] lg:rounded-tr-[10px] lg:hover:rounded-tr-[50px] image-hover-effect hover:scale-105 transition-transform duration-500 ease-smooth ${className}`}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 976px) 50vw, (max-width: 1440px) 50vw, 500px"
      />
    </div>
  );
}
