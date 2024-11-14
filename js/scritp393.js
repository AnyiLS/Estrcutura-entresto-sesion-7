$(document).ready(function () {
	const slides = ['slide393', 'slide394']
	const validar = () => {
		const slides = ['slide393', 'slide394']

		const exist = []

		slides.forEach((item, index) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
				document.querySelector(
					`.cursor${index === 0 ? '' : index}`
				).style.display = 'none'
				if (exist.length === 2) {
					$('.boton-next').show()
					$('.vutom-col').hide()
				}
			}
		})

		if (exist.length === 2) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	}

	// modal
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
		localStorage.setItem('slide393', 'true')
		$('.cursor').hide()
		validar()
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})


	// modal
	$('.openModal1').on('click', () => {
		$('.modal1').css('display', 'block')
		localStorage.setItem('slide394', 'true')
		$('.cursor1').hide()
		validar()
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})
})
