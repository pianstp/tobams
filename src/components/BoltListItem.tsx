function BoltIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
    </svg>
  );
}

export default function BoltListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
      <BoltIcon className="w-4 h-4 shrink-0 text-[rgba(29,6,23,1)]" />
      {text}
    </li>
  );
}
