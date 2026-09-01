import Image from "next/image";

export function Logo({
  white = false,
  priority = false,
}: {
  white?: boolean;
  priority?: boolean;
}) {
  return (
    <Image
      alt="Agaciro Development Fund"
      className="brand-logo"
      height={82}
      priority={priority}
      src={
        white
          ? "/brand/AgDF_Logo_-_White.png"
          : "/brand/Original_logo_cropped.png"
      }
      width={270}
    />
  );
}
