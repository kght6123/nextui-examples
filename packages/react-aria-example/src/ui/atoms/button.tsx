import { useRef } from 'react';
import { useButton, AriaButtonOptions } from 'react-aria';

export function Button(props: AriaButtonOptions<"button"> & { children: React.ReactNode, onClick: () => void }) {
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  return (
    <button
      ref={ref}
      {...buttonProps}
      style={{
        background: isPressed ? '#444' : '#666',
        color: 'white',
        padding: '6px 12px',
        borderRadius: 4,
        border: 'none'
      }}
			onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
