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
  const bg = tone === "dark" ? "1c1c1f" : "e3e1f5";
  const fg = tone === "dark" ? "6b6b70" : "9a97c2";

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
