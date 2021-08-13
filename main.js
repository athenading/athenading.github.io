window.onload = () => {

    let root = document.getElementById('app');

    // router instance

    let Router = function(name, routes) {
        return {
            name, 
            routes
        }
    };

    // create route instances
let routerInstance = new Router('routerInstance', [
        {
            path: '/',
            name: "Home"
        },
        {
            path:'/diff_pages/about.html',
            name: "About"
        },
        {
           path: '/diff_pages/contact.html',
           name: "Projects"
        },
        {
            path: '/diff_pages/photography.html',
            name: "Photography"
        }
    ])
let currentPath = window.location.pathname;
    if (currentPath === '/'){
        root.innerHTML = 'You are on the Home Page'
    } else {
        let route = routerInstance.routes.filter(r => r.path === currentPath)[0];
        if (route){
            root.innerHTML = 'You are on the' + route.name + ' patHH';
        }
        else {
            root.innerHTML = `This route is not defined`;
        }
    }
    //   grab all active attribute Routes
    let definedRoutes = Array.from(document.querySelectorAll('[router-link]'));

    // the navigate function will beusing Javascript History API to navigate
    // Method to navigate

    let navigate = e => {
        let route = e.target.attributes[0].value;
            // redirect to the router instance 

        let routeInfo = routerInstance.routes.filter(r => r.path === route)[0];
        if (!routeInfo){
            window.history.pushState({}, '', 'error');
            root.innerHTML = `This route is not defined`;
        }
        else {
            window.history.pushState({}, '', routeInfo.path);
            root.innerHTML = `you are on the ${routeInfo.name} path`;
        }
    }
    // iterate over all defined routes
    definedRoutes.forEach(route=> {
        route.addEventListener('click', navigate, false);
    })

}