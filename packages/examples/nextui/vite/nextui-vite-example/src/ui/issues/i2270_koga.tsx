import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useOverlayTriggerState } from "react-stately";

export default function App() {
  // const [isOpen, setIsOpen] = React.useState(false)
  const state = useOverlayTriggerState({
    isOpen: true,
    defaultOpen: true,
    onOpenChange: (isOpen) => {
      console.log("onOpenChange argument is", isOpen);
      // state.setOpen(isOpen)
    },
  });
  console.log("state.isOpen is", state.isOpen);

  return (
    <div className="flex flex-col gap-2">
      <Popover
        // isOpen={isOpen} 不要そう
        // onOpenChange={(open) => {
        //   // 呼ばれない
        //   console.log('onOpenChange argument is', open)
        //   state.setOpen(open)
        // }}
        state={state}
        backdrop="opaque"
      >
        <PopoverTrigger>
          <Button>OpenState: {state.isOpen ? "Open" : "Close"}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">Popover Content</div>
            <Button
              color="danger"
              variant="light"
              aria-label="Close"
              onPress={() => {
                console.log("onPress Close");
                state.close();
              }}
            >
              Close
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
