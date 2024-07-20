import fs from 'fs-extra';
import path from 'path';

const sharedComponentsDir = path.resolve(__dirname, '../shared-components/src');
const reactWrapperDir = path.resolve(__dirname, '../react-wrapper/src');

const generateWrapper = (componentName: string) => {
  const componentPath = path.join(sharedComponentsDir, `${componentName}.tsx`);
  const wrapperPath = path.join(reactWrapperDir, `${componentName}Wrapper.tsx`);

  if (!fs.existsSync(componentPath)) {
    console.error(`Component ${componentName} does not exist in shared-components.`);
    return;
  }

  const componentCode = fs.readFileSync(componentPath, 'utf-8');

  const wrapperCode = `
  import React from 'react';
  import { ${componentName} } from '@lrush85/shared-components';

  export const ${componentName}Wrapper: React.FC<any> = (props) => {
    return <${componentName} {...props} />;
  };
  `;

  fs.writeFileSync(wrapperPath, wrapperCode);
  console.log(`Generated wrapper for ${componentName}`);
};

const generateAllWrappers = () => {
  const componentNames = fs.readdirSync(sharedComponentsDir).map(file => path.basename(file, '.tsx'));
  componentNames.forEach(name => generateWrapper(name));
};

generateAllWrappers();
