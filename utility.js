let setNumber = 1;
let setTotalAmount = 0;
const seatAll = document.getElementsByClassName('seat-all');
for(let index = 0; index < seatAll.length; index++){
    const seat = seatAll[index];
    seat.addEventListener('click', function(event){
        // seat class add
        event.currentTarget.style.backgroundColor='#1DD100';
        const seatInfo = seat.innerText;
        // seat name taka append
        const infoSeatContainer = document.getElementById('info-seat-container');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText=seatInfo;
        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';
        const p3 = document.createElement('p');
        p3.innerText = '550';

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        infoSeatContainer.appendChild(li);


        // seat number count 
        const setSeatNumber = document.getElementById('set-seat-number');
        setSeatNumber.innerText=setNumber;
        setNumber++;

        const nextBtn = document.getElementById('next-btn');
        if(setNumber > 5){
            alert('please 4 ticket purses')
            return;
        }
        else if(setNumber >= 1){
            applyBtn.removeAttribute('disabled');
            nextBtn.removeAttribute('disabled');
        }
        
        
       
        // seat left 
        const seatLeft = document.getElementById('seat-left').innerText;
        const leftSeat = parseInt(seatLeft);
        const subNumber = leftSeat - 1;
        document.getElementById('seat-left').innerText=subNumber;
       
        // total taka
        const total = document.getElementById('total-amount');
        setTotalAmount += 550;
        total.innerText=setTotalAmount;
        // console.log(setTotalAmount);

        event.currentTarget.disabled=true;
    })
}

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function(){
    const inputField = document.getElementById('input-field').value;
    if(inputField === 'NEW15'){
        // discount amount
        const discountElement = document.getElementById('discount-price');
        const discountAmountNew = setTotalAmount * (15/100);
        discountElement.innerText=discountAmountNew;
        // grand total amount
        const grandElement = document.getElementById('grand-total');
        const grandTotalAmount = setTotalAmount - discountAmountNew;
        grandElement.innerText= grandTotalAmount;

    }
    else if(inputField === 'Couple 20'){
        const discountElement = document.getElementById('discount-price');
        const discountAmountNew = setTotalAmount * (20/100);
        discountElement.innerText= discountAmountNew;

         // grand total amount
         const grandElement = document.getElementById('grand-total');
         const grandTotalAmount = setTotalAmount - discountAmountNew;
         grandElement.innerText= grandTotalAmount;
    }
 
    else{
        alert('Invalid coupon');
    }
})


