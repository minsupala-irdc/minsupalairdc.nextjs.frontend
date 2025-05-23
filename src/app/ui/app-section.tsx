interface AppSectionProps {
  children: React.ReactNode;
  className?: string; // optional padding-y prop
}

export default function AppSection({ children, className= "py-50" }: AppSectionProps) {
  return (
    <section
      id="highlights"
      className={`w-full bg-white min-h-[66.66667vh] flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
}
