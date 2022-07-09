const popUpLinks = document.querySelectorAll('.pop-up-link')
const popUp = document.querySelector('.pop-up')
const lock = document.querySelector('body')

function popUpFunction() {
   if (popUpLinks.length > 0) {

      popUpLinks.forEach((popUpLink) => {
         popUpLink.addEventListener('click', (event) => {
            event.preventDefault()

            popUp.classList.toggle('_active')
            lock.classList.toggle('_lock')


         })
      })

      popUp.addEventListener('click', (event) => {

         if (!event.target.closest('.pop-up__body')) {

            popUp.classList.remove('_active')
            lock.classList.remove('_lock')

         }
      })
   }

}

popUpFunction()












