This is the core of our application. Here we store all our modules — logically separated parts of our application. I encourage you inside each module create:

- an inner components' folder where you can save your vue components
- tests folder (I prefer to keep all related tests in the module)
- store.ts or store directory, where you keep your store module

For example, this is the example of a orders module, where you store all components related to orders in your app: list of orders, order details, etc. Orders vuex store module. Additional related files. It could look like:

``` 
src
--modules
----orders
------__tests__
------components
--------OrdersList.vue
--------OrderDetails.vue
------store
--------actions.ts
--------getters.ts
--------mutations.ts
--------state.ts
------helpers.ts
------types.ts
``` 