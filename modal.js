function startModal(){

    const inputNumber = document.getElementById('input-number').value;
    console.log(inputNumber)
    if(setNumber >= 2 && !isNaN(inputNumber)){
        const mainSection = document.getElementById('main-section');
        mainSection.classList.add('hidden');
        // footer section
        const footer = document.getElementById('footer');
       footer.classList.add('hidden');


    
        // show modal
        const showModal = document.getElementById('show-modal');
        showModal.classList.remove('hidden');
    }
    else{
        alert('please select your seat!!!');
    }
}
function continu(){
    const mainSection = document.getElementById('main-section');
    mainSection.classList.remove('hidden')

    const footerOne = document.getElementById('footer');
       footerOne.classList.remove('hidden');

    const showModal = document.getElementById('show-modal');
    showModal.classList.add('hidden')
}