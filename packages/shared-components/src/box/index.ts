export const Box = (
    props: { 
        backgroundColor: string, 
        border: string, 
        label: string, 
        display: string, 
        flexDirection: string, 
        gap: string | number, 
        justifyContent: string, 
        alignItems: string 
    }
) => {
    return `<div style="backgroundColor: ${props.backgroundColor}; border: ${props.border}; display: ${props.display}; flexDirection: ${props.flexDirection}; gap: ${props.gap}; justifyContent: ${props.justifyContent}; alignItems: ${props.alignItems}; ">${props.label}</div>`;
  };