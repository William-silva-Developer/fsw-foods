import Image, { ImageProps } from "next/image";

const PromoBanner = ({ ...rest }: ImageProps) => {
  return (
    <>
      <Image
        height={0}
        width={0}
        className="h-auto w-full object-cover"
        sizes="100vw"
        quality={100}
        {...rest}
      />
    </>
  );
};

export { PromoBanner };
