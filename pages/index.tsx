import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">Hello</h1>
      <button
        className="px-6 py-2 mt-10 bg-black dark:bg-white text-white dark:text-black "
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle to {theme === "ligth" ? "Dark" : "Ligth"}
      </button>
    </div>
  );
}
