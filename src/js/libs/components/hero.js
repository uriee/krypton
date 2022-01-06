export function initHero() {
    return {
        initParticles() {
            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 2,
                        "density": {
                            "enable": true,
                            "value_area": 1000
                        }
                    },
                    "color": {
                        "value": ["#5507fc"]
                    },
    
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 35,
                            "color": "#5507fc"
                        },
                        "polygon": {
                            "nb_sides": 2
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.1,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 2,
                            "opacity_min": 0.1,
                            "sync": true
                        }
                    },
                    "size": {
                        "value": 15,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 4,
                            "size_min": 0.1,
                            "sync": true
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 1420,
                        "color": "#5507fc",
                        "opacity": 0.2,
                        "width": 1.6
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "random",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": true,
                        "attract": {
                            "enable": true,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": false
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }
    }
}