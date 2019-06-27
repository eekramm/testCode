//////////////////////////////////////////////////////////

// modal-box ** not test code **

let clickTitle = document.querySelector(".title_div");
let clickModal = document.querySelector(".modal");
let modal = document.querySelector(".modal")

function toggleModal() {
  modal.classList.toggle("show-modal");
}

clickModal.addEventListener("click", toggleModal);
clickTitle.addEventListener("click", toggleModal);

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////

// test code 

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