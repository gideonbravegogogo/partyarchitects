sBanner = '<ul>'
for (let i = 0; i < 15; i++) {
    sBanner += `<li></li>`
}
sBanner += '</ul>'
document.getElementById('pattern').innerHTML = sBanner
document.getElementById('pattern2').innerHTML = sBanner

relpath = 'products/';
ext = '.jpg';

images = ['bigballs', 'pinata', 'giantbloon', 'hats', 'plates']

function imgPath(num) {
    return path = relpath + images[num] + ext;
}

index = 0

function loadImages(next = true) {
    temp = ''


    for (let i = index; i < index + 4; i++) {
            temp += `<img class="product" src="${imgPath(i)}">`
    }
    document.getElementById('products').innerHTML = temp
    if (next){
    index++} else {
        index--
    }
}
loadImages()

document.getElementById('nextImg').onclick = () => { loadImages() }
document.getElementById('prevImg').onclick = () => { loadImages(false) } 
