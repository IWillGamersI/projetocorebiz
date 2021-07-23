

var geral = document.getElementById('c')
geral.addEventListener('mouseout',fora_tudo)

//circulos 1
var circulo_one = document.getElementById('c1')
var circulo_two = document.getElementById('c2')
var circulo_three = document.getElementById('c3')
var circulo_for = document.getElementById('c4')
var circulo_five = document.getElementById('c5')
var circulo_six = document.getElementById('c6')

//cores
var cor = document.getElementById('cor')


//entrar
circulo_one.addEventListener('mouseenter',entra1)
circulo_two.addEventListener('mouseenter',entra1)
circulo_three.addEventListener('mouseenter',entra3)
circulo_for.addEventListener('mouseenter',entra4)
circulo_five.addEventListener('mouseenter', entra5)
circulo_six.addEventListener('mouseenter',entra5)
//sair
circulo_one.addEventListener('mouseout',sai)
circulo_two.addEventListener('mouseout',sai)
circulo_three.addEventListener('mouseout',sai)
circulo_for.addEventListener('mouseout',sai)
circulo_five.addEventListener('mouseout', sai)
circulo_six.addEventListener('mouseout',sai)


/*
Cores
black = #000
circulo 1 - #de702f
circulo 2 - #000
circulo 3 - #953764
circulo 4 - #2680eb
circulo 5 - #f1c233
circulo 6 - #f1c233

*/

function fora_tudo(){
    circulo_one.style.background = ' #b7b7b7'
    circulo_two.style.background = '#999'
    circulo_three.style.background = '#666'
    circulo_for.style.background = '#434343'
    circulo_five.style.background = '#000'
    circulo_six.style.background = '#f1c233'
    cor.innerText = ''
    cor.style.color = '' 
    circulo_six.style.color = '#000'

}

function entra1(){
    circulo_one.style.background = '#de702f'
    circulo_two.style.background = '#000'
    circulo_three.style.background = '#000'
    circulo_for.style.background = '#000'
    circulo_five.style.background = '#000'
    circulo_six.style.background = '#000'
    circulo_six.style.color = '#ccc'
    
    
}


function entra3(){  
    circulo_one.style.background = '#000'
    circulo_two.style.background = '#000' 
    circulo_three.style.background = '#953764'
    circulo_for.style.background = '#000'
    circulo_five.style.background = '#000'
    circulo_six.style.background = '#000'
    cor.innerText = 'PINK'
    cor.style.color = '#953764'
    circulo_six.style.color = '#ccc'

}

function entra4(){    
    circulo_one.style.background = '#000'
    circulo_two.style.background = '#000' 
    circulo_three.style.background = '#000'
    circulo_for.style.background = '#2680eb'
    circulo_five.style.background = '#000'
    circulo_six.style.background = '#000'
    cor.innerText = 'BLUE'
    cor.style.color = '#2680eb'
    circulo_six.style.color = '#ccc'

}


function entra5(){ 
    circulo_one.style.background = '#000'
    circulo_two.style.background = '#000' 
    circulo_three.style.background = '#000'
    circulo_for.style.background = '#000'
    circulo_five.style.background = '#f1c233'
    circulo_six.style.background = '#000'   
    cor.innerText = 'YELLOW'
    cor.style.color = '#f1c233'
    circulo_six.style.color = '#ccc'
}


function sai(){
    circulo_one.style.background = '#000'
    circulo_two.style.background = '#000'
    circulo_three.style.background = '#000'
    circulo_for.style.background = '#000'
    circulo_five.style.background = '#000'
    circulo_six.style.background = '#000'
}


//---------------------------------------------------------

var geral1 = document.getElementById('c-1')
//geral1.addEventListener('mouseover',fora_tudo1)

geral1.addEventListener('mouseout',fora_tudo1)

//circulos 2
var circulo_one_one = document.getElementById('c1.1')
var circulo_two_two = document.getElementById('c2.1')
var circulo_three_three = document.getElementById('c3.1')
var circulo_for_for = document.getElementById('c4.1')
var circulo_five_five = document.getElementById('c5.1')
var circulo_six_six = document.getElementById('c6.1')

//cor
var cor1 = document.getElementById('cor1')


//entrar
circulo_one_one.addEventListener('mouseenter',entra7)
circulo_two_two.addEventListener('mouseenter',entra7)
circulo_three_three.addEventListener('mouseenter',entra9)
circulo_for_for.addEventListener('mouseenter',entra10)
circulo_five_five.addEventListener('mouseenter',entra11)
circulo_six_six.addEventListener('mouseenter',entra11)

//sair
circulo_one_one.addEventListener('mouseout',sai2)


function entra7(){
    circulo_one_one.style.background = '#de702f'
    circulo_two_two.style.background = '#000'
    circulo_three_three.style.background = '#000'
    circulo_for_for.style.background = '#000'
    circulo_five_five.style.background = '#000'
    circulo_six_six.style.background = '#000'
    cor1.innerText = "ORANGE"
    cor1.style.color = '#de702f'
    circulo_six_six.style.color = '#ccc'
}

function entra9(){
    circulo_one_one.style.background = '#000'
    circulo_two_two.style.background = '#000'
    circulo_three_three.style.background = '#953764'
    circulo_for_for.style.background = '#000'
    circulo_five_five.style.background = '#000'
    circulo_six_six.style.background = '#000'
    cor1.innerText = "PINK"
    cor1.style.color = '#953764'
    circulo_six_six.style.color = '#ccc'
}

function entra10(){
    circulo_one_one.style.background = '#000'
    circulo_two_two.style.background = '#000'
    circulo_three_three.style.background = '#000'
    circulo_for_for.style.background = '#2680eb'
    circulo_five_five.style.background = '#000'
    circulo_six_six.style.background = '#000'
    cor1.innerText = "BLUE"
    cor1.style.color = '#2680eb'
    circulo_six_six.style.color = '#ccc'
}

function entra11(){
    circulo_one_one.style.background = '#000'
    circulo_two_two.style.background = '#000'
    circulo_three_three.style.background = '#000'
    circulo_for_for.style.background = '#000'
    circulo_five_five.style.background = '#f1c233'
    circulo_six_six.style.background = '#000'
    cor1.innerText = "YELLOW"
    cor1.style.color = '#f1c233'
    circulo_six_six.style.color = '#ccc'
}




function fora_tudo1(){
    circulo_one_one.style.background = ' #b7b7b7'
    circulo_two_two.style.background = '#999'
    circulo_three_three.style.background = '#666'
    circulo_for_for.style.background = '#434343'
    circulo_five_five.style.background = '#000'
    circulo_six_six.style.background = '#f1c233'
    cor1.innerText = ""
    cor1.style.color = '' 
    circulo_six_six.style.color = '#000'
}

function sai2(){
    circulo_one_one.style.background = '#000'
    circulo_two_two.style.background = '#000'
    circulo_three_three.style.background = '#000'
    circulo_for_for.style.background = '#000'
    circulo_five_five.style.background = '#000'
    circulo_six_six.style.background = '#000'
    
}

