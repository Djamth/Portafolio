type IconName =
  | "arrow"
  | "book"
  | "briefcase"
  | "code"
  | "download"
  | "external"
  | "github"
  | "graduation"
  | "linkedin"
  | "mail"
  | "menu"
  | "rocket"
  | "send"
  | "star"
  | "time"
  | "x";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="m9 18 6-6-6-6m6 6H3" />,
  book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Zm0 0v16M8 7h8m-8 4h8" />,
  briefcase: <path d="M9 6V4h6v2m-11 0h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm-1 5h18M10 11v2h4v-2" />,
  code: <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12" />,
  download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" />,
  external: <path d="M14 4h6v6m0-6-9 9m7 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.3A5.7 5.7 0 0 0 19.3 3 5.3 5.3 0 0 0 19.1 0S17.9-.4 15 1.6a13.4 13.4 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.3 5.3 0 0 0-.2 3A5.7 5.7 0 0 0 3.2 7.2c0 5.7 3.5 6.9 6.8 7.3A4.8 4.8 0 0 0 9 18v4m0-3c-5 .8-5-2-7-2" />,
  graduation: <path d="m2 10 10-5 10 5-10 5L2 10Zm4 2.5V17c3 2 9 2 12 0v-4.5M22 10v6" />,
  linkedin: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />,
  mail: <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm18 2-10 7L2 7" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  rocket: <path d="M14 6c3-3 5-3 7-3 0 2 0 4-3 7l-4 4-4-4 4-4Zm-4 4-4 1-3 3 6 1m5-1-1 4-3 3-1-6m7-7h.01M5 19l-2 2m4-2-2 2" />,
  send: <path d="m22 2-7 20-4-9-9-4 20-7Zm-11 11 4-4" />,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  time: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-15v5l3 2" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
};

export default function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
