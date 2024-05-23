export default class KeyControls {
    constructor () {
        this.keys = {};
        let arrowcodes = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
        document.addEventListener('keydown', (event) => {
            if (arrowcodes.indexOf(event.key) >= 0) {
                event.preventDefault();
            }
            this.keys[event.key] = true;
            console.log(event.key);
        });

        document.addEventListener('keyup', (event) => {
            this.keys[event.key] = false;
        });
    };

    get action() {
        if (this.keys[" "]) {
            return true;
        }
    }

    get x() {
        //left arrow or A key 
        if (this.keys["ArrowLeft"] || this.keys["a"]) {
            return -1;
        }
        //right arrow or D key 
        if (this.keys["ArrowRight"] || this.keys["d"]) {
            return 1;
        }
        return 0;
    }

    get y() {
        //up arrow or W key 
        if (this.keys["ArrowUp"] || this.keys["w"]) {
            return -1;
        }
        //down arrow or S key 
        if (this.keys["ArrowDown"] || this.keys["s"]) {
            return 1;
        }
        return 0;
    }

    key(key, value) {
        if (value !== undefined) {
            this.keys[key] = false;
        }
        return this.keys[key];
    }

    reset() {
        for (let key in this.keys) {
            this.keys[key] = false;
        }
    }
};