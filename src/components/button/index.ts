export const Button = (props: { 
    label: string; 
    textColor: string;
    backgroundColor: string;
    variant: 'primary' | 'inverse' | 'plain'
    leftIcon: () => void;
    rightIcon: () => void;
}) => {
    return (`<button 
                style="
                    color: ${props.textColor};
                    border: none;
                    padding: 8px 16px;
                    fontSize: 16px;
                    borderRadius: 6px;
                    backgroundColor: ${props.backgroundColor};
                "
            ><span style="marginRight: 5px;>${props.leftIcon}</span>${props.label}<span style="marginLeft: 5px;">${props.rightIcon}</span></button>`) as any;
  };