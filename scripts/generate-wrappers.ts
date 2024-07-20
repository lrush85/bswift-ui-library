import fs from 'fs';
import path from 'path';
import { Capitalize } from "../helpers";

// Define the component paths and output paths
const componentDir = path.join(__dirname, '../src/components');
const reactWrapperDir = path.join(__dirname, '../src/react');
const angularWrapperDir = path.join(__dirname, '../src/angular');
const vueWrapperDir = path.join(__dirname, '../src/vue');

const components = fs.readdirSync(componentDir).filter(file => fs.statSync(path.join(componentDir, file)).isDirectory());

components.forEach(component => {
  const componentPath = path.join(componentDir, component);
  
  // Generate React Wrapper
  const reactWrapperContent = `
    import React from 'react';
    import { ${Capitalize(component)} } from '../components';

    const ${Capitalize(component)}Wrapper: React.FC<any> = (props) => {
      return (
        <${Capitalize(component)} {...props} />
      );
    };

    export default ${Capitalize(component)}Wrapper;
  `;
    
  fs.writeFileSync(path.join(reactWrapperDir, `${component}.tsx`), reactWrapperContent);


// Generate Angular Wrapper
const angularWrapperContent = `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-${component.toLowerCase()}',
  template: '<ng-content></ng-content>'
})
export class ${Capitalize(component)}WrapperComponent {
  @Input() props: any;
}
  `;
  fs.writeFileSync(path.join(angularWrapperDir, `${component}.ts`), angularWrapperContent);

  // Generate Vue Wrapper
  const vueWrapperContent = `<template>
  <component :is="component" v-bind="props"></component>
</template>

<script>
import ${component} from '../../components/${component}.vue';
export default {
  components: { ${component} },
  props: ['props'],
  computed: {
    component() {
      return ${component};
    }
  }
}
</script>
  `;
  fs.writeFileSync(path.join(vueWrapperDir, `${component}.vue`), vueWrapperContent);
});
