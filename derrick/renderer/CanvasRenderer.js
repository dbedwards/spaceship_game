export default class CanvasRenderer {
    constructor(w, h) {
        const canvas = document.createElement("canvas");
        this.w = canvas.width = w;
        this.h = canvas.height = h;
        this.view = canvas;
        this.ctx = canvas.getContext("2d");
        this.ctx.textBaseline = "top";
    }

    render(container, clear = true) {
        const { ctx } = this;
        function renderRec(container) {
            //render container children
            container.children.forEach(child => {
                if (child.visible == false) {
                    return;
                }
                ctx.save();
                //Handle child types
                if (child.children) {
                    renderRec(child);
                }
                if (child.text) {
                    const { font, fill, align } = child.style;
                    if (font) ctx.font = font;
                    if (fill) ctx.fillStyle = fill;
                    if (align) ctx.textAlign = align;
                    ctx.fillText(child.text, child.pos.x, child.pos.y);
                }
                else if (child.texture) {
                    ctx.drawImage(child.texture.img, child.pos.x, child.pos.y);
                }
                ctx.restore();
            });
        }
        if (clear) {
            ctx.clearRect(0, 0, this.w, this.h);
        }
        renderRec(container)
    }
}