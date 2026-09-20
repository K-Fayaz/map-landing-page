const studio = [
  {
    category: "Create",
    items: [
      {
        name: "Location search",
        tag: "NEW",
        description: "Jump straight to any place, powered by live map data.",
      },
      {
        name: "Import boundaries",
        description: "Bring in custom regions and datasets.",
      },
      {
        name: "Multi-project workspace",
        description: "Keep every story organized.",
      },
    ],
  },
  {
    category: "Animate",
    items: [
      {
        name: "Camera keyframes",
        description: "Pan, zoom and rotate on your terms.",
      },
      {
        name: "Audio-synced timeline",
        tag: "NEW",
        description: "Time reveals to the beat.",
      },
      { name: "Easing curves", description: "Smooth, cinematic motion." },
    ],
  },
  {
    category: "Customize",
    items: [
      {
        name: "Country highlights",
        description: "Color and label any region.",
      },
      { name: "Flags & icons", description: "Drop in markers that pop." },
      {
        name: "Themes",
        tag: "NEW",
        description: "Switch the whole look in one click.",
      },
    ],
  },
  {
    category: "Export",
    items: [
      {
        name: "MP4 export",
        description: "Up to 4K, with or without audio.",
      },
      {
        name: "Transparent export",
        tag: "BETA",
        description: "PNG sequences for compositing.",
      },
      {
        name: "Custom resolutions",
        description: "1080p, vertical, or your own size.",
      },
    ],
  },
];

/**
 * Not currently rendered on the landing page — kept for when the feature
 * set is large enough to justify a "rest of the studio" section.
 */
export function StudioFeatures() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex items-baseline justify-between border-b border-black/10 pb-4">
        <p className="text-xs font-semibold tracking-[0.15em] text-[#16140f]/40">
          ...AND THE REST OF THE STUDIO
        </p>
        <span className="text-xs font-medium text-brand">
          See what&apos;s new →
        </span>
      </div>

      <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {studio.map((group) => (
          <div key={group.category}>
            <p className="text-xs font-semibold tracking-[0.15em] text-[#16140f]/40">
              {group.category.toUpperCase()}
            </p>
            <ul className="mt-4 space-y-4">
              {group.items.map((item) => (
                <li key={item.name}>
                  <p className="flex items-center text-sm font-semibold text-[#16140f]">
                    {item.name}
                    {item.tag && (
                      <span className="ml-1.5 rounded-full bg-brand/10 px-1.5 py-0.5 text-[10px] font-semibold text-brand">
                        {item.tag}
                      </span>
                    )}
                  </p>
                  <p className="mt-0.5 text-sm text-[#16140f]/50">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
