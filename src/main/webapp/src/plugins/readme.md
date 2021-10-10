In this folder you can create and connect all your plugins. Here is an example of plugin connection in Vue 2

```
import MyPlugin from './myPlugin.ts'
Vue.use(MyPlugin, { someOption: true })
```

In Vue 3 you will connect your plugin in main.ts. But you still can create your plugins inside plugin folder.

More about plugins you can read here and here.