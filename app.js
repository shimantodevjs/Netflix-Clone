// query selectors
const tabItems=document.querySelectorAll('.tab-item');
const tabContentItems= document.querySelectorAll('.tab-content-item');
const tab1Con= document.getElementById('tab-1-content')
const tab2Con= document.getElementById('tab-2-content')
const tab3Con= document.getElementById('tab-3-content')
const tab1= document.getElementById('tab-1')
const tab2= document.getElementById('tab-2')
const tab3= document.getElementById('tab-3')

//remove item function

function removeItem(){
    tabItems.forEach(item=>item.classList.remove('tab-border'))
}

//select items function

function SelectItem(e){
    // Remove all show and border classes
	removeItem();
	// Add border to current tab item
	this.classList.add('tab-border');
}
//funtion to change tabs

function changeTab1(e){
    removeShow();
    tab1Con.classList.add('show')
}
function changeTab2(e){
    removeShow();
    tab2Con.classList.add('show')
}
function changeTab3(e){
    removeShow();
    tab3Con.classList.add('show')
}



// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}
//event listener
tabItems.forEach(item=>item.addEventListener('click',SelectItem))



tab1.addEventListener('click',changeTab1)
tab2.addEventListener('click',changeTab2)
tab3.addEventListener('click',changeTab3)

