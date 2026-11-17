const paths = {
  map: (<><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z" /><path d="M9 3v15M15 6v15" /></>),
  box: (<><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8M12 13v8" /></>),
  building: (<><path d="M4 21V5l8-3 8 3v16" /><path d="M9 21v-5h6v5M9 9h.01M15 9h.01M9 13h.01M15 13h.01" /></>),
  scissors: (<><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" /></>),
  check: <path d="M5 12l5 5L20 7" />,
  arrow: <path d="M7 17L17 7M8 7h9v9" />,
};

export default function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
