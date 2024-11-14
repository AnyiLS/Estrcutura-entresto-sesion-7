$(document).ready(function () {
	// Opcion incorrecta (A)
	$('.openModal').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal').on('click', () => {
		handleChangeView(412);
	})

	// Opcion incorrecta (B)
	$('.openModal1').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})

	// Opcion incorrecta (D)
	$('.openModal2').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})

	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		// handleShowCurrentBox(0);
		handleOptionCorrectShow('.correcta');
		boxSound();
		handleSaveCorrectQuestion(9)

		setTimeout(() => {
			handleChangeView(412);
		}, 2500)
	})
})
