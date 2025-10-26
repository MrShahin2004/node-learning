"use strict";

const HTTP = require("http");
const Express = require("express");

const App = Express();
App.use((req,res,next)=>{
    res.send(`
        <h1>Hey, talking to you from Express.js!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aperiam asperiores at autem blanditiis corporis culpa cupiditate dignissimos, dolorum ducimus facere fuga harum in inventore itaque labore maxime minima provident quis ratione soluta suscipit tempora, tenetur voluptates voluptatibus voluptatum! Consectetur debitis earum itaque mollitia perferendis, qui quod repudiandae sapiente! Animi deleniti dolores excepturi fuga, maiores mollitia, natus officia quaerat, ratione sed suscipit tempore voluptates. Amet aperiam, autem beatae commodi ex mollitia nemo officia pariatur reiciendis tempore! Doloribus earum iusto labore mollitia nemo odio, optio ut. Expedita fuga incidunt minima nisi quos repudiandae ullam vitae! Ducimus itaque suscipit temporibus voluptatibus.</p>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Giveaway</li>
            <li>Support</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    `);
});

App.listen(3000);
