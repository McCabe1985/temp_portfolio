//globals
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = 'white';

//create ball class to handle properties, movement and drawing of each metaball
class Ball {
    //our constructor references the MetaBallsEffects class
    constructor(effect) {
        this.effect = effect;
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height * 0.5;
        this.radius = Math.random() * 80 + 20;
        this.speedX = Math.random() - 0.5;
        this.speedY = Math.random() - 0.5;
    }
    update() {
        //create window edge collision physics
        if (this.x < this.radius || this.x > this.effect.width - this.radius) this.speedX *= -1;
        if (this.y < this.radius || this.y > this.effect.height - this.radius) this.speedY *= -1;
        //increment speed
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
    //make the animation responsive by placing the particles in the middle of the window
    reset() {
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height * 0.5;
    }

}

//the MetaBallsEffect class handles creating and storing our particles
class MetaballsEffect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        //stores currently active metaballs
        this.metaballsArray = [];
    }

    //generates a number of new Balls and adds them to our metaballs array
    init(numberOfBalls) {
        for (let i = 0; i < numberOfBalls; i++) {
            this.metaballsArray.push(new Ball(this));
        }
    }
    //iterate over the metaballsArray and apply the update method to each element
    update() {
        this.metaballsArray.forEach(metaball => metaball.update());
    }
    draw(context) {
        this.metaballsArray.forEach(metaball => metaball.draw(context));
    }
    reset(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
        //iterate over the metaballs array and call the rest in the Balls class on each particle
        this.metaballsArray.forEach(metaball => metaball.reset)
    }
}


//store the metaballseffect class in a variable to be referred to by the Balls class
const effect = new MetaballsEffect(canvas.width, canvas.height);
effect.init(20);

//This is a recursive function that handles the updating, positioning and redrawing of our particles
function animate() {
    //clear and redraw particles
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.update();
    effect.draw(ctx);
    requestAnimationFrame(animate);
}

animate()

//create an event listener that listens for changes in screen size and sets the canvas height and width
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
    effect.reset(canvas.width, canvas.height);
})