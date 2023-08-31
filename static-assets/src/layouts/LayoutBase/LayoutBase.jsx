import { Logo } from "../../components/Logo/Logo"

/**
 * Root layout element
 * 
 * @param { {children: React.ReactNode} } properties
 */
export function LayoutBase(properties) {
  const { children } = properties

  return (
    <div>
      <header>
        <Logo size="2rem"/>
      </header>

      <main>
        {properties.children}
      </main>

      <footer>
        by Lars G
      </footer>
    </div>
  )
}