import Experience from "../Experience/Experience";
import EventEmitter from "../Experience/Utils/EventEmitter";
import data from '../data.json';

export default class Router extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.camera = this.experience.camera;
        this.canvas = this.experience.canvas;

        this.path = null;
        this.prevRoute = window.location.pathname;
        this.isRouting = false;
        this.data = data

        this.routes = {
            404: "/pages/404.html",
            "/": "/pages/home.html",
            "/about": "/pages/about.html",
            "/projects": "/pages/projects.html",
        };

        this.articleUIDs = [];

        window.addEventListener('popstate', this.handleLocation);

        this.init();
    }

    async init() {
        try {
            const articles = this.data.results.filter(el => el.type === 'article');
            this.articleUIDs = articles.map(a => a.uid);
        } catch (err) {
            console.error("Erreur récupération des UID d'articles :", err);
        }

        this.handleLocation();
    }

    isArticleRoute(path) {
        const match = path.match(/^\/projects\/(.+)$/);
        if (match && this.articleUIDs.includes(match[1])) return match[1];
        return null;
    }

    route = (event) => {
        event = event || window.event;
        this.prevRoute = window.location.pathname;
        event.preventDefault();
        window.history.pushState({}, "", event.currentTarget.href);
        this.handleLocation();
    };

    handleLocation = async () => {
        if (this.isRouting) return;
        this.isRouting = true;

        this.path = window.location.pathname;
        let routePath = this.routes[this.path] || this.routes[404];
        let main_data = null;

        const articleUID = this.isArticleRoute(this.path);

        // 🔹 Route article dynamique
        if (articleUID) {
            try {
                main_data = this.data.results.find(el => el.uid === articleUID);
                routePath = "/pages/article.html";
            } catch (err) {
                console.warn(`Article "${articleUID}" introuvable.`);
                routePath = this.routes[404];
            }
        }

        // 🔹 Pages statiques (home / about / projects)
        else if (this.routes[this.path]) {
            const typeMap = {
                '/': 'home',
                '/about': 'about',
                '/projects': 'projects'
            };

            const type = typeMap[this.path];

            try {
                main_data = this.data.results.find(el => el.type === type) || null;
            } catch (err) {
                console.error('Erreur data :', err);
                routePath = this.routes[404];
            }
        }

        // 🔹 Toujours fetch le HTML (sans cache)
        try {
            this.html = await fetch(routePath).then(res => {
                if (!res.ok) throw new Error('Page non trouvée');
                return res.text();
            });
        } catch (err) {
            console.error('Erreur fetch HTML :', err);
            try {
                this.html = await fetch(this.routes[404]).then(r => r.text());
            } catch (err2) {
                console.error('Impossible de fetch la 404', err2);
                this.html = "<h1>404</h1>";
            }
        }

        this.main_data = main_data;
        this.experience.loader.onDataLoaded();
        this.trigger('routing');
        this.isRouting = false;
    };
}