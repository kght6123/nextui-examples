import { Button, Input } from "@nextui-org/react";
import MyButton from "./atoms/myButton";
import Issue2270 from "./issues/i2270";
import { AvatarList } from "./molecules/avatarList";
import Breadcrumb from "./molecules/breadcrumb";
import MyInput from "./atoms/myInput";

export default function Sample() {
  return (
    <>
      <section className="flex flex-col">
        <AvatarList />
        <Breadcrumb />
      </section>
      <section className="flex flex-col p-4 gap-4">
        // #2211
        <div className="sm:w-32 md:w-auto w-14">
          <Button type="button" fullWidth={true}>
            Responsive
          </Button>
        </div>
        <Button type="button" className="sm:w-32 md:w-auto w-14">
          Responsive
        </Button>
        <MyButton>My Button</MyButton>
      </section>
      <section className="flex flex-col p-4 gap-4">
        // #2234
        <div className="bg-primary w-32 h-32" />
      </section>
      <section className="flex flex-col p-4 gap-4">
        // #2254
        <Input
          isClearable
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">@gmail.com</span>
            </div>
          }
        />
      </section>
      <section className="flex flex-col p-4 gap-4">
        // #2254
        <Input
          isClearable
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
      </section>
      <section className="flex flex-col p-4 gap-4">
        // #2254
        <Input
          placeholder="Search Tick"
          variant="bordered"
          endContent={""}
          isClearable
        />
      </section>
      <section className="flex flex-col p-4 gap-4">
        // #2254 fix
        <MyInput
          placeholder="Search Tick"
          variant="bordered"
          endContent={<>あ</>}
          isClearable
        />
      </section>
      <section className="flex flex-col p-4 gap-4">
        // #2268
        <Input
          type="number"
          label="Number"
          labelPlacement="inside"
          // description="inside"
          value={"0"}
        />
      </section>
      <section className="flex flex-col p-4 gap-4">
        // #2270
        <Issue2270 />
      </section>
    </>
  );
}
