This is the second most important folder in our application. Here we store all entry points for applications’ routes. For example, in your application you can have /home /about /orders routes. Respectively, in the views folder you should have Home.vue About.vue Orders.vue.

You could argue, why we should separate views and modules, if we can store them in the one place? I see a few pros to separate them:
- more clear files structures
- let you quick understand which routes you have in the application
- easy to understand which file is root on the page and where it starts to work