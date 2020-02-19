$('.leaf').each(function () {

    var tl = new TimelineMax({
        repeat: -1
    });

    tl.to(this, 10 + Math.random() * 500, {
        rotationX: Math.random() * 3360,
        rotationY: Math.random() * 3360,
        rotationZ: Math.random() * 3360,
        z: Math.random() * 700,
        x: -window.innerWidth * 3,
        y: window.innerHeight / 2,
        ease: Power4.easeOut,
        onUpdate: e => {
            //var x = this.vars.css.x;

            if ($(this).position().left < -100) {
                tl.seek(0);
            }
        }
    });

});