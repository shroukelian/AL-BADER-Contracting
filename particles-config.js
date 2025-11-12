particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 150, /* زيادة الكثافة (كانت 80) */
            "density": {"enable": true, "value_area": 800}
        },
        "color": {"value": "#FFFFFF"}, /* لون النقاط: أبيض (خرسانة/صلب) */
        "shape": {"type": "circle"},
        "opacity": {"value": 0.8, "random": false, "anim": {"enable": false}}, /* زيادة الشفافية */
        "size": {"value": 3, "random": true, "anim": {"enable": false}},
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#FF9900", /* لون الخطوط: برتقالي/نحاسي (كابلات/أنابيب) */
            "opacity": 0.6, /* زيادة وضوح الخطوط */
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 8, /* زيادة السرعة لجعله أكثر حيوية ووضوحاً (كانت 6) */
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": true, "mode": "repulse"},
            "onclick": {"enable": true, "mode": "push"},
            "resize": true
        },
        "modes": {
            "repulse": {"distance": 150, "duration": 0.4}
        }
    },
    "retina_detect": true
});