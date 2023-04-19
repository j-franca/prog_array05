// no for, se eu não souber qual o length, utilizo num.length  // i++ - adiciona um i // i-- - subtrai um i

let num = [1, 2, 3, 4, 5]

//somar todos números
let res_soma = document.getElementById('res_soma')
let soma = document.getElementById('soma')
soma.addEventListener('click', ()=>{
    let soma_elementos = 0
    for(i=0; i<5; i++){
        soma_elementos = soma_elementos + num[i]
    }
    res_soma.innerHTML = soma_elementos
})

//somar os números ímpares
let soma_impar = document.getElementById('soma_impar')
let so_impar = document.getElementById('so_impar')
so_impar.addEventListener('click', ()=>{
    let impar_elementos = 0
    for(i=0; i<5; i++){
        if((num[i] % 2) == 1){
           impar_elementos = impar_elementos + num[i] 
        }
    }
    soma_impar.innerHTML = impar_elementos
})

//somar os números pares
let soma_par = document.getElementById('soma_par')
let so_par = document.getElementById('so_par')
so_par.addEventListener('click', ()=>{
    let par_elementos = 0
    for(i=0; i<5; i++){
        if((num[i] % 2) == 0){
           par_elementos = par_elementos + num[i] 
        }
    }
    soma_par.innerHTML = par_elementos
})

//subtrair todos numeros
let res_sub = document.getElementById('res_sub')
let sub = document.getElementById('sub')
sub.addEventListener('click', ()=>{
    let sub_elementos = 0
    for(i=0; i<5; i++){
        sub_elementos = sub_elementos - num[i]
    }
    res_sub.innerHTML = sub_elementos
})
a
//subtrair os números pares
let sub_par = document.getElementById('sub_par')
su_par.addEventListener('click', ()=>{
    let sub_par_elementos = 0
    for(i=0; i<5; i++){
        if((num[i] % 2) == 0){
           sub_par_elementos = sub_par_elementos - num[i] 
        }
    }
    sub_par.innerHTML = sub_par_elementos
})

//subtrair os números ímpares
let sub_impar = document.getElementById('sub_impar')
let su_impar = document.getElementById('su_impar')
su_impar.addEventListener('click', ()=>{
    let impar_elementos = 0
    for(i=0; i<5; i++){
        if((num[i] % 2) == 1){
            sub_impar_elementos = sub_impar_elementos + num[i] 
        }
    }
    sub_impar.innerHTML = sub_impar_elementos
})

//aparecer todos os números
let res = document.getElementById('res')
res.innerHTML = num[i]