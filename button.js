const button = document.querySelector('button'),
	list = document.querySelector('ul');

button.addEventListener('click', toggleList);

function toggleList() {
	if (!list.classList.contains('active')) {
  	list.classList.add('active');
  } else {
  	list.classList.remove('active');
  }
	
}
