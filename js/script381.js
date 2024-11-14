$(document).ready(function () {
	const slides = ['slide381', 'slide382', 'slide383', 'slide384', 'slide385']
	const validar = () => {
		const slides = ['slide381', 'slide382', 'slide383', 'slide384', 'slide385']

		const exist = []

		slides.forEach((item, index) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
				document.querySelector(
					`.puntero${index === 0 ? '' : index}`
				).style.display = 'none'
				if (exist.length === 5) {
					$('.boton-next').show()
					$('.vutom-col').hide()
				}
			}
		})

		if (exist.length === 5) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	}

	let bandera1 = false
	let bandera2 = false
	let bandera3 = false
	let bandera4 = false
	let bandera5 = false

	function esPantallaTactil() {
		return 'ontouchstart' in window || navigator.maxTouchPoints > 0
	}

	if (esPantallaTactil()) {
		$('.openModal').on('click', () => {
			if (bandera1) {
				$('#image-1').css('display', 'none')
				bandera1 = !bandera1
			} else {
				$('#image-1').css('display', 'block')
				localStorage.setItem('slide381', 'true')
				validar()
				bandera1 = !bandera1
			}
		})
	} else {
		// modal 1
		$('.openModal').on('mouseover', () => {
			$('#image-1').css('display', 'block')
			localStorage.setItem('slide381', 'true')
			validar()
			bandera1 = true
		})
		// cerra modal

		$('.openModal').on('mouseleave', () => {
			$('#image-1').css('display', 'none')
			bandera1 = false
		})
	}

	if (esPantallaTactil()) {
		$('.openModal1').on('click', () => {
			if (bandera2) {
				$('#image-2').css('display', 'none')
				bandera2 = !bandera2
			} else {
				$('#image-2').css('display', 'block')
				localStorage.setItem('slide382', 'true')
				validar()
				bandera2 = !bandera2
			}
		})
	} else {
		// modal 1
		$('.openModal1').on('mouseover', () => {
			$('#image-2').css('display', 'block')
			localStorage.setItem('slide382', 'true')
			validar()
			bandera2 = true
		})
		// cerra modal

		$('.openModal1').on('mouseleave', () => {
			$('#image-2').css('display', 'none')
			bandera2 = false
		})
	}

	if (esPantallaTactil()) {
		$('.openModal2').on('click', () => {
			if (bandera3) {
				$('#image-3').css('display', 'none')
				bandera3 = !bandera3
			} else {
				$('#image-3').css('display', 'block')
				localStorage.setItem('slide383', 'true')
				validar()
				bandera3 = !bandera3
			}

			console.log('hol')
		})
	} else {
		// modal 1
		$('.openModal2').on('mouseover', () => {
			$('#image-3').css('display', 'block')
			localStorage.setItem('slide383', 'true')
			validar()
			bandera3 = true
		})
		// cerra modal

		$('.openModal2').on('mouseleave', () => {
			$('#image-3').css('display', 'none')
			bandera3 = false
		})
	}

	if (esPantallaTactil()) {
		$('.openModal3').on('click', () => {
			if (bandera4) {
				$('#image-4').css('display', 'none')
				bandera4 = !bandera4
			} else {
				$('#image-4').css('display', 'block')
				localStorage.setItem('slide384', 'true')
			validar()
				bandera4 = !bandera4
			}
		})
	} else {
		// modal 1
		$('.openModal3').on('mouseover', () => {
			$('#image-4').css('display', 'block')
			localStorage.setItem('slide384', 'true')
			validar()
			bandera4 = true
		})
		// cerra modal

		$('.openModal3').on('mouseleave', () => {
			$('#image-4').css('display', 'none')
			bandera4 = false
		})
	}

	if (esPantallaTactil()) {
		$('.openModal4').on('click', () => {
			if (bandera5) {
				$('#image-5').css('display', 'none')
				bandera5 = !bandera5
			} else {
				$('#image-5').css('display', 'block')
				localStorage.setItem('slide385', 'true')
			validar()
			bandera5 = !bandera5
			}
		})
	} else {
		// modal 1
		$('.openModal4').on('mouseover', () => {
			$('#image-5').css('display', 'block')
			localStorage.setItem('slide385', 'true')
			validar()
			bandera5 = true
		})
		// cerra modal

		$('.openModal4').on('mouseleave', () => {
			$('#image-5').css('display', 'none')
			bandera5 = false
		})
	}
})
