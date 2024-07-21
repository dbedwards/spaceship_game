//bg for barbarian game
//renderer.view.style.backgroundImage = "url(../res/images/background.jpg)"

//variables
import derrick from "../derrick/index.js";
const {Container, Text, KeyControls, Texture, Sprite, CanvasRenderer} = derrick;
const w = 640;
const h = 300;

//load textures
const textures = {
    background: new Texture("res/images/bg.png"),
    spaceship: new Texture("res/images/spaceship.png"),
    bullet: new Texture("res/images/bullet.png"),
    baddie: new Texture("res/images/baddie.png")
}

window.addEventListener("load", begin);

function begin() {
    //game setup
    let dt = 0;
    let last = 0;
    const renderer = new CanvasRenderer(w, h);
    renderer.view.style.backgroundColor = "#000000"
    document.getElementById("canvas").appendChild(renderer.view);
    
    //make game objects
    const scene = new Container();
    
    const controls = new KeyControls();
    
    //make a spaceship
    const ship = new Sprite(textures.spaceship);
    ship.pos.x = 120;
    ship.pos.y = (h/2 - 16);
    ship.update = function (dt) {
        //update player position
        const { pos } = this;
        pos.x += controls.x * dt * 200;
        pos.y += controls.y * dt * 200;
        if (pos.x < 0) pos.x = 0;
        if ((pos.x + 32) > w) pos.x = w-32;
        if (pos.y < 0) pos.y = 0;
        if ((pos.y + 32) > h) pos.y = h-32;
    }
    
    //bullets
    const bullets = new Container();
    function fireBullet(x, y) {
        const bullet = new Sprite(textures.bullet);
        bullet.pos.x = x;
        bullet.pos.y = y;
        bullet.update = function(dt) {
            this.pos.x += 400 * dt;
            if (bullet.pos.x >= w + 20) {
                bullet.dead = true;
            }
        };
        bullets.add(bullet);
    }
    
    //bad guys
    const baddies = new Container();
    function spawnBaddie(x, y, speed) {
        const baddie = new Sprite(textures.baddie);
        baddie.pos.x = x;
        baddie.pos.y = y;
        baddie.update = function (dt) {
            this.pos.x += speed * dt;
        }
        baddies.add(baddie);
    }
    
    //add the score
    let scoreAmount = 0; 
    const score = new Text(`Score: ${scoreAmount}`, {
        font: "20px sans serif",
        fill: "#8B8994",
        align: "center"
    })
    score.pos.x = w / 2;
    score.pos.y = h - 30;
    score.update = function (dt) {
        this.text = `Score: ${scoreAmount}`
    }
    
    function doGameOver() {
        const gameOverMessage = new Text(`Game Over`, {
            font: "30pt sans serif",
            fill: "#8B8994",
            align: "center"
        });
        gameOverMessage.pos.x = w / 2;
        gameOverMessage.pos.y = 120;
    
        scene.add(gameOverMessage);
        scene.remove(ship);
        gameOver = true;
    }
    
    //add to scene container
    scene.add(new Sprite(textures.background));
    scene.add(ship);
    scene.add(bullets);
    scene.add(baddies);
    scene.add(score);
    
    //game state variables
    let lastShot = 0;
    let lastSpawn = 0;
    let spawnSpeed = 1.0;
    let gameOver = false;       
    
    
    //game loop
    function loop(ms) {
        requestAnimationFrame(loop);
        let t = ms/1000;
        dt = t - last;
        last = t;
        //Game logic code
        scene.update(dt, t);
        renderer.render(scene);
        //shot rate
        if (!gameOver && controls.action && t - lastShot > 0.15) {
            lastShot = t;
            fireBullet(ship.pos.x + 24, ship.pos.y + 10);
        }
        //spawn bad guys
        if (t - lastSpawn > spawnSpeed) {
            lastSpawn = t;
            const speed = -50 - (Math.random() * Math.random() * 100);
            const position = Math.random() * (h - 24);
            spawnBaddie(w, position, speed);
    
            //accel rate of spawn
            spawnSpeed = spawnSpeed < 0.05 ? 0.6 : spawnSpeed * 0.97 + 0.001;
        }
        //check collisions or off screen
        baddies.children.forEach(baddie => {
            bullets.children.forEach(bullet => {
                const dx = baddie.pos.x + 16 - (bullet.pos.x + 8);
                const dy = baddie.pos.y + 16 - (bullet.pos.y + 8);
                if (Math.sqrt(dx * dx + dy * dy) < 24) {
                    baddie.dead = true;
                    bullet.dead = true;
                    scoreAmount += Math.floor(t);
                }
                if (baddie.pos.x < 32) {
                    if (!gameOver) {
                        doGameOver();
                    }
                    baddie.dead = true;
                }
            })
            const dx = ship.pos.x + 16 - (baddie.pos.x + 16);
            const dy = ship.pos.y + 16 - (baddie.pos.y + 16);
            if (Math.sqrt(dx * dx + dy * dy) < 32) {
                if (!gameOver) {
                    doGameOver();
                }
            }
        })
    
    }
    
    requestAnimationFrame(loop);
    
}