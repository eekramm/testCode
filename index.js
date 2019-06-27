//////////////////////////////////////////////////////////

// going to add a modal-box

// let clickModal = document.querySelector(".click-modal");
// let clickIcon = document.querySelector(".click-icon");
// let modal = document.querySelector(".modal")

// function toggleModal() {
//   modal.classList.toggle("show-modal");
// }

// clickIcon.addEventListener("click", toggleModal);
// clickModal.addEventListener("click", toggleModal);

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////

// paractice code 

const domainArray = ["eythankramm.com","eythankramm.org", "eythankramm.info", "eythankramm.net", "eythankramm.biz", "eythankramm.us", "eygthankramm.com", "eythankr.com", "youngllpthankramm.com", "eythankramm.online", "eygthankramm.org", "eygthankramm.info", "eygthankramm.net", "eythankramm.club", "eygthankramm.biz", "youngllpthankramm.org", "youngllpthankramm.net", "youngllpthankramm.info"]
let newDomainArray = [];
let goodArray = [];
let badArray = [];

function splitDomain(x) {
    for(let i = 0; i < x.length; i++){
        newDomainArray.push(domainArray[i].split('.')[0]);
    }
    return newDomainArray;
}

// function filterDomain(x)

console.log(splitDomain(domainArray));