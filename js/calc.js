let discount = document.querySelector('#discont')
let pervoVznos = document.querySelector('#firstZatrata')

let dDohod = document.querySelector('#dohod')
let dRashod = document.querySelector('#rashod')
let dPotok = document.querySelector('#potok')

let dDohod1 = document.querySelector('#dohod1')
let dRashod1 = document.querySelector('#rashod1')
let dPotok1 = document.querySelector('#potok1')

let dDohod2 = document.querySelector('#dohod2')
let dRashod2 = document.querySelector('#rashod2')
let dPotok2 = document.querySelector('#potok2')

let npvText = document.querySelector('#npv__text')

let piText = document.querySelector('#pi__text')

let NPV = [0, 0, 0]


function dResult(){
  if(dDohod.value != '' && dRashod.value != ''){
    dPotok.value = dDohod.value - dRashod.value
    NPV[0] = +dPotok.value
  }
}

function dResult1(){
  if(dDohod1.value != '' && dRashod1.value != ''){
    dPotok1.value = dDohod1.value - dRashod1.value
    NPV[1] = +dPotok1.value
  }
}

function dResult2(){
  if(dDohod2.value != '' && dRashod2.value != ''){
    dPotok2.value = dDohod2.value - dRashod2.value
    NPV[2] = +dPotok2.value
  }
}





function calculateNPV(cashFlows, discountRate, pervoVznos) {
  let npv = 0 - pervoVznos;
  for (let i = 0; i < cashFlows.length; i++) {
    npv += cashFlows[i] / Math.pow(1 + discountRate, i + 1);
  }
  console.log(cashFlows, discountRate , npv);
  npvText.textContent = npv.toFixed(3);
  piText.textContent = ((npv / pervoVznos) * 100).toFixed(3)
}

// const npv = calculateNPV(NPV, discount.value);