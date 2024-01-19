import { Input as _ } from "@nextui-org/react";
import { forwardRef } from "react";

interface Props {
  type?: string | undefined;
  children?: React.ReactNode;
  endContent?: React.ReactNode;
  isClearable?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, children, endContent, isClearable }, ref) => {
    return (
      <>
        <_
          type={type}
          ref={ref}
          endContent={endContent}
          isClearable={isClearable}
        />
        {children}
      </>
    );
  },
);

Input.displayName = "Input";

export default Input;
