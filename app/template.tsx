/**
 * Transition entre pages : ce composant est remonté à chaque navigation,
 * ce qui rejoue le fondu d'entrée CSS (.page-enter dans globals.css).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
