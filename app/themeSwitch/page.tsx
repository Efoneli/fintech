import { useTheme } from "../debounce/page"

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return <button onClick={toggleTheme}>switch to {theme === 'light' ? 'dark' : 'light'} mode </button>
}