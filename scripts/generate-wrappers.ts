import fs from 'fs';
import path from 'path';

// Define the component paths and output paths
const componentDir = path.join(__dirname, '../src/components');
const reactWrapperDir = path.join(__dirname, '../src/react');
const angularWrapperDir = path.join(__dirname, '../src/angular');
const vueWrapperDir = path.join(__dirname, '../src/vue');

const components = fs.readdirSync(componentDir).filter(file => fs.statSync(path.join(componentDir, file)).isDirectory());

components.forEach(Component => {
  const componentPath = path.join(componentDir, Component);
  
  // Generate React Wrapper
  const reactWrapperContent = `import React from 'react';
import ${Component} from '../components/${Component}';

const ${Component}Wrapper: React.FC<any> = (props) => <${Component} {...props} />;
export default ${Component}Wrapper;
  `;
  fs.writeFileSync(path.join(reactWrapperDir, `${Component}.tsx`), reactWrapperContent);

  // Generate Angular Wrapper
  const angularWrapperContent = `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-${Component.toLowerCase()}',
  template: '<ng-content></ng-content>'
})
export class ${Component}WrapperComponent {
  @Input() props: any;
}
  `;
  fs.writeFileSync(path.join(angularWrapperDir, `${Component}.ts`), angularWrapperContent);

  // Generate Vue Wrapper
  const vueWrapperContent = `<template>
  <component :is="component" v-bind="props"></component>
</template>

<script>
import ${Component} from '../../components/${Component}.vue';
export default {
  components: { ${Component} },
  props: ['props'],
  computed: {
    component() {
      return ${Component};
    }
  }
}
</script>
  `;
  fs.writeFileSync(path.join(vueWrapperDir, `${Component}.vue`), vueWrapperContent);
});
