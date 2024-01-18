import { forwardRef } from "react";
import { Input as _ } from "@nextui-org/react";

interface Props {
  children?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, Props>(({ children }, ref) => {
  return (
    <>
      <_ ref={ref} endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">@gmail.com</span>
            </div>
          } isClearable />
      {children}
    </>
  );
});

Input.displayName = "Input";

export default Input;
