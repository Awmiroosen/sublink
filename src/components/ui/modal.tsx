type ModalType = {
  message: string;
  visible: boolean;
};

const Modal = ({ message, visible }: ModalType) => {
  return (
    <div
      className={`w-xs h-12 bg-indigo-300 dark:bg-indigo-800 border-2 flex justify-center select-none items-center fixed bottom-14 left-[30%] transition-opacity duration-300 
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <p>{message}</p>
    </div>
  );
};
export default Modal;
