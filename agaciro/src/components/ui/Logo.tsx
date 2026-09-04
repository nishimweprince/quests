import { RemoteImage } from "@/components/ui/RemoteImage";
import { brandMedia } from "@/content/media";

export function Logo({
  white = false,
  priority = false,
}: {
  white?: boolean;
  priority?: boolean;
}) {
  return (
    <span className={`brand-lockup${white ? " brand-lockup--white" : ""}`}>
      <RemoteImage
        alt="Agaciro Development Fund"
        className={`brand-logo${white ? "" : " brand-logo--color"}`}
        fallbackText="AGACIRO Development Fund"
        height={82}
        priority={priority}
        src={white ? brandMedia.white : brandMedia.color}
        width={270}
      />
    </span>
  );
}
