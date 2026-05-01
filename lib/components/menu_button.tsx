import { ReactNode } from "react";

const MenuButton = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen?: boolean;
  onClose?: (val: boolean) => void;
  children: ReactNode;
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-9999">
      <button
        onClick={() => onClose && onClose(!isOpen)}
        className="group flex cursor-pointer items-center gap-3 px-4 py-2 bg-black/20 hover:bg-black/30 border border-white/10 backdrop-blur-md rounded-full transition-all duration-300 shadow-xl"
      >
        <div className="flex items-center gap-0.75 h-4 w-6 justify-center">
          {children}
        </div>
      </button>
    </div>
  );
};

export default MenuButton;
