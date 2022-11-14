var rootem = document.querySelector('.rootem');
var pixel = document.querySelector('.pixel');
var area = document.querySelector('.area');
var text = document.createElement('span');
var element = document.querySelector(".element");
area.addEventListener('input', () =>{
    if(area.value.trim() === ''){
        rootem.textContent = "0";
        pixel.textContent = "0";
        return false;
    }

    else if(isNaN(area.value)){
        text.textContent = "No, is not a number Kteb Ra9em Machi Character";
        element.appendChild(text);
    }
    else{
        var result = area.value;
        // num == (area.value) * 2;
        rootem.textContent = result;
        pixel.textContent = result * 16;
    }
});