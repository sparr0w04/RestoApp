let isVisible = true
const div = document.getElementById('bubble')

function trigger() {
	isVisible = !isVisible
	div.style.display = isVisible ? 'block' : 'none'
}

document.getElementById('crest').addEventListener('click', trigger)
