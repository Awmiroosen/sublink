import type { Children } from "@/types/children";

const Container = ({ children }: Children) => {
  return (
    <div className="max-w-sm mx-auto overflow-x-hidden px-1 py-2">
      {children}
    </div>
  );
};
export default Container;
