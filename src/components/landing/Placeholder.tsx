type PlaceholderProps = {
  label: string;
  className?: string;
  tone?: "light" | "dark";
};

export function Placeholder({
  label,
  className = "",
  tone = "light",
}: PlaceholderProps) {
  const bg = tone === "dark" ? "1c1c1f" : "f0e4c4";
  const fg = tone === "dark" ? "6b6b70" : "b39a5f";

  return (
    <img
      src={`https://placehold.co/1200x800/${bg}/${fg}?text=${encodeURIComponent(
        label,
      )}`}
      alt={label}
      loading="lazy"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
