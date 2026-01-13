interface tooltipProps {
  tooltiptext: string;
  imageSrc: string;
  altText: string;
}

export default function Tooltip({
  tooltiptext,
  imageSrc,
  altText,
}: tooltipProps) {
  return (
    <div className="group relative inline-block">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-zinc-800 text-white hidden group-hover:block w-max rounded px-3 py-2">
        <div className="absolute left-1/2 -translate-x-1/2 size-6 bg-zinc-800 top-6 rotate-45 rounded" />
        <span className="relative">{tooltiptext}</span>
      </div>
      <img src={`${imageSrc}`} width={36} height={36} alt={`${altText}`} />
    </div>
  );
}
