import Theme from "./theme";
import { FiGithub } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full h-12 flex items-center mb-4">
      <div className="w-2/3">
        <h1 className="font-black text-3xl">SubLink</h1>
      </div>
      <div className="w-1/3 grid grid-cols-2 gap-4">
        <a
          href="https://github.com/awmiroosen"
          target="_blank"
          className="flex items-center justify-center bg-indigo-300 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-800 border-2 transition-colors duration-200"
        >
          <FiGithub size={25} />
        </a>
        <Theme />
      </div>
    </header>
  );
};

export default Header;
