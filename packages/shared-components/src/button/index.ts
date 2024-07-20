export const Button = (props: { label: string; color: string }) => {
    return `<button style="color: ${props.color};">${props.label}</button>`;
  };