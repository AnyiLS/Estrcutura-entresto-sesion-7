$(document).ready(function () {
	showBoxes();
	const responses = JSON.parse(localStorage.getItem('responses'))
	if (responses.includes(9)) {
		$('.caja9').show();
	}
	$('.caja8').hide();

	// modal 1
	$('.openModal').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
			$('.caja').css('z-index', '1000')
			$('.caja1').css('z-index', '1000')
			$('.caja2').css('z-index', '1000')
			$('.caja3').css('z-index', '1000')
			$('.caja4').css('z-index', '1000')
			$('.caja5').css('z-index', '1000')
			$('.caja6').css('z-index', '999')
			$('.caja7').css('z-index', '999')
			$('.caja8').css('z-index', '1000')
			$('.caja9').css('z-index', '999')
		}, 1000)
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		setTimeout(() => {
			handleCheckResults()
		}, 2000)
	})

	// modal 1
	$('.openModal1').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
			$('.caja').css('z-index', '1000')
			$('.caja1').css('z-index', '1000')
			$('.caja2').css('z-index', '1000')
			$('.caja3').css('z-index', '1000')
			$('.caja4').css('z-index', '1000')
			$('.caja5').css('z-index', '1000')
			$('.caja6').css('z-index', '999')
			$('.caja7').css('z-index', '999')
			$('.caja8').css('z-index', '1000')
			$('.caja9').css('z-index', '999')
		}, 1000)
	})

	// modal 2
	$('.openModal2').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
			$('.caja').css('z-index', '1000')
			$('.caja1').css('z-index', '1000')
			$('.caja2').css('z-index', '1000')
			$('.caja3').css('z-index', '1000')
			$('.caja4').css('z-index', '1000')
			$('.caja5').css('z-index', '1000')
			$('.caja6').css('z-index', '999')
			$('.caja7').css('z-index', '999')
			$('.caja8').css('z-index', '1000')
			$('.caja9').css('z-index', '999')
		}, 1000)
	})
	
	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		// handleShowCurrentBox(8)
		handleOptionCorrectShow('.correcta');
		boxSound();
		handleSaveCorrectQuestion(10)

		setTimeout(() => {
			handleCheckResults()
		}, 2500)
	})
})
