import {Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue} from 'react-aria-components';

export const SelectList = () => (
<Select className={"space-x-2"}>
  <Label>Favorite Animal</Label>
  <Button className={"p-2 bg-pink-500"}>
    <SelectValue className={"p-2 text-pink-50"} />
    <span className={"p-2 bg-pink-500 rounded-full"} aria-hidden="true">▼</span>
  </Button>
  <Popover>
    <ListBox className={"p-2 rounded bg-pink-500"}>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
  </Popover>
</Select>)