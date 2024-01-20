import { Button, usePopoverContext } from "@nextui-org/react";

export default function ClosedButton() {
  const { getBackdropProps } = usePopoverContext();
  return (
    <Button
      color="danger"
      variant="light"
      aria-label="Close"
      onClick={(e) => getBackdropProps()?.onClick?.(e)}
    >
      Close
    </Button>
  );
}
