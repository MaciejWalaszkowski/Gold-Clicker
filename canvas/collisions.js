export function rectangleOverlap (rect1, rect2) {
    return (
        rect1.x + rect1.width >= rect2.x && rect1.x <= rect2.x + rect2.width && rect1.y + rect1.height >= rect2.y && rect1.y <= rect2.y + rect2.height
    );
}

const rect1 = coinRain.getBoundingClientRect();
const rect2 = bottomMid.getBoundingClientRect();


const result = rectangleOverlap(rect1, rect2);