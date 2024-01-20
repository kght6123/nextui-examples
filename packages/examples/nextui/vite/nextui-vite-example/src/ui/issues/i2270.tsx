import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import ClosedButton from "./i2270btn";

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <Popover backdrop="opaque">
        <PopoverTrigger>
          <Button>Open</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">Popover Content</div>
            <ClosedButton />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
