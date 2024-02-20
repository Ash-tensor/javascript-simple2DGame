const $zelda = document.querySelector('#zeldarink');

function deleteZeldaWay() {
    $zelda.classList.remove('right-stand');
    $zelda.classList.remove('left-stand');
    $zelda.classList.remove('back-stand');
    $zelda.classList.remove('forward-stand');
}

$zelda.setAttribute('style', 'background-image: url("../Asset/front_walk0.png");');

const allowedKeys = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown']

document.addEventListener(
    'keydown', (event) => {
        var map = document.querySelector(".town-map");
        var currentPositionX = map.style.backgroundPositionX || "0px";
        var currentPositionY = map.style.backgroundPositionY || "0px";
        currentPositionX = parseInt(currentPositionX);
        currentPositionY = parseInt(currentPositionY);
        var moveAmount = 50; // 이동 거리 조절

        switch (event.key) {
            case 'ArrowRight':
                break;
            case 'ArrowLeft':
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
            default:
                break;
        }

        if (!allowedKeys.includes(event.key)) {
            return;
        }
        switch (event.key) {
            case 'ArrowRight':
                map.style.backgroundPositionX = (currentPositionX - moveAmount) + "px";
                $zelda.classList.remove('pause-animation');
                $zelda.classList.add('right-animation');
                break;
            case 'ArrowLeft':
                map.style.backgroundPositionX = (currentPositionX + moveAmount) + "px";
                $zelda.classList.remove('pause-animation');
                $zelda.classList.add('left-animation');
                break;
            case 'ArrowUp':
                map.style.backgroundPositionY = (currentPositionY + moveAmount) + "px";
                $zelda.classList.remove('pause-animation');
                $zelda.classList.add('back-animation');
                break;
            case 'ArrowDown':
                map.style.backgroundPositionY = (currentPositionY - moveAmount) + "px";
                $zelda.classList.remove('pause-animation');
                $zelda.classList.add('forward-animation');
                break;
        }
    }
)
document.addEventListener(
    'keyup', (event) => {
        if (!allowedKeys.includes(event.key)) {
            return;
        }
        switch (event.key) {
            case 'ArrowRight':
                $zelda.classList.add('pause-animation');
                $zelda.classList.remove('right-animation');
                deleteZeldaWay();
                $zelda.classList.add('right-stand')
                break;
            case 'ArrowLeft':
                $zelda.classList.add('pause-animation');
                $zelda.classList.remove('left-animation');
                deleteZeldaWay();
                $zelda.classList.add('left-stand')
                break;
            case 'ArrowUp':
                $zelda.classList.add('pause-animation');
                $zelda.classList.remove('back-animation');
                deleteZeldaWay();
                $zelda.classList.add('back-stand')
                break;
            case 'ArrowDown':
                $zelda.classList.add('pause-animation');
                $zelda.classList.remove('forward-animation');
                deleteZeldaWay();
                $zelda.classList.add('forward-stand')
                break;
        }
    }
)
