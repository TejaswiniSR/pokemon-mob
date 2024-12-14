const pics = document.querySelector('.pic')
const image = document.querySelector('img')
const p = document.querySelector('p')
console.log(userinput.value)

function pokemon(){
    const userinput = document.querySelector('input')
    const p = document.querySelector('p')
    // console.log(userinput.value)
    image.src=`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${userinput.value}.png`

image.append(pics)

}