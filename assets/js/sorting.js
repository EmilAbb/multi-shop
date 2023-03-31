const sorting = document.querySelector('.sorting')
const sortingDropdown = document.querySelector('.sorting-dropdown')
sorting.addEventListener('click', function () {
  sortingDropdown.classList.toggle('sorting-block')
  showingDropdown.classList.remove('showing-block')
})

const showing = document.querySelector('.showing')
const showingDropdown = document.querySelector('.showing-dropdown')

showing.addEventListener('click', function () {
  showingDropdown.classList.toggle('showing-block')
  sortingDropdown.classList.remove('sorting-block')
})