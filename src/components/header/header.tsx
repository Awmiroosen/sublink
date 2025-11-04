import Theme from "./theme";

const Header = () => {
  return (
    <header className="w-full h-12 flex items-center mb-4">
      <div className="w-2/3">
        <h1 className="font-black text-3xl">SubLink</h1>
      </div>
      <div className="w-1/3 flex justify-end">
        <Theme />
      </div>
    </header>
  );
};

export default Header;
