import AppHeader from "./components/appHeader";


export default function Home() {
  return <div>
    <AppHeader />
    <div className="bg-white text-black dark:bg-black dark:text-white p-4">
      Hello, dark mode!
    </div>

  </div>;
}
