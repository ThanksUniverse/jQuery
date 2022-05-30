//Instância jquery e evitar conflitos
/* jQuery(function ($) {
	$(" h4 "); //*tag
	$(".featired-item"); //*class
	$("#featured"); //*id
}); */

/* jQuery(function ($) { */
/*
 * Carousel images
 */

$(document).ready(function () {
	$(".owl-carousel").owlCarousel();

	/*
	 * Print All h4, featured items and featured (new)
	 */

	let titulos = $(" h4 "); //*tag

	let items = $(".featured-item"); //*class

	let destaques = $("#featured"); //*id

	console.log(titulos.first());
	console.log(items);
	console.log(destaques);

	$(".featured-item a").addClass("btn btn-dark stretch-link");

	//Stretch-Link -- Torna toda área do link clicável, muito boa classe do Bootstrap

	$(".featured-item h4").append('<span class="badge bg-danger"> Novo </span>');
	//Append substitui ou adiciona uma tag nova depois
	//Prepend substitui ou adiciona uma tag nova antes
	//After adiciona um texto depois
	//Before adiciona um texto antes
	//Hide adiciona display none em um elemento
	//Show readiciona o display no elemento
	//Fade adiciona uma transição ao elemento .fadeIn(2000) or .fadeOut(2000)

	//* Faz com que as imagens parecam que estão sendo carregadas ao abrir o site
	$(".featured-item img").fadeOut(1);
	$(".featured-item img").fadeIn(1000);

	//* Mostra algumas informações no console quando você coloca e tira o mouse de produtos
	$(".featured-item").hover(
		function () {
			//mouseenter
			console.log($(this).find("h4").text());
		},
		function () {
			//mouseleave
			console.log($(this).find("h4").text() + " - " + "Preço:" + " - " + $(this).find("h6").text());
		}
	);

	//*Manipulação de evento ---- Faz com que apareça um alert dizendo que o produto está esgotado quando clica em comprarr

	$(".featured-item a").on("click", function (event) {
		//on('click', 'mouseenter', 'mouseleave', 'blur') /Blur: Quando tira o foco- Clicar no botão e depois clica fora -- Utilizado em campos de formulários
		event.preventDefault();

		alert("Produto esgotado");
	});

	//* Um hover effect que eu fiz pelo jQuery para praticar

	$(".featured-item").on("mouseenter", function (event) {
		event.preventDefault();
		$(this).css({
			filter: "brightness(120%);",
			cursor: "pointer",
		});
	});

	//* Callbacks
	/*Ações que começam ao término de outra */
	let fasttime = 1;
	$(".featured-item:nth(1)")
		.hide(fasttime, function () {
			//* Este é o callback
			console.log($(this).find("h4").text() + "esgotado");
		})
		.show(fasttime, function () {
			console.log($(this).find(" h4 ").text() + "em estoque");
		});

	/*
	 * Animações
	 */

	//* Faz com que o input suba 50px para cima quando clicar em submit

	let time = 800;

	$("#form-submit").on("click", function (e) {
		e.preventDefault();

		if ($("#email").val() != "") {
			$("#email").animate(
				{
					top: "-50",
				},
				time,
				function () {
					console.log($(this).val());
				}
			);
		}
	});

	/*
	 * Ouvinte de eventos .nav-modal-open
	 */

	/*
	 * Copia o conteúdo do ID que a gente clicar e adiciona ao (.nav-modal-open)
	 * Vulgo campos dinâmicos, coisa muito legal, adicionar ao ToDO
	 */
	$(".nav-modal-open").on("click", function (e) {
		e.preventDefault();

		let elem = $(this).attr("rel");

		$(".modal-body").html($("#" + elem).html());

		$(".modal-header h5.modal-title").html($(this).text());

		let myModal = new bootstrap.Modal($("#modelId"));

		myModal.show();
	});

	/*
	 *	Verificação antes de enviar o formulário
	 */

	$("body").on("submit", ".modal-body .form", function (e) {
		e.preventDefault();

		const inputName = $("#nome"); //* Criar constante porque o valor dela não irá mudar
		const inputEmail = $("#email");

		validate(inputName)
		validate(inputEmail)

		if (inputEmail.hasClass("invalid") || inputName.hasClass("invalid")) {
			console.log('Verificar os Campos obrigatórios')
			return false;
		} else {
			$(this).submit();
		}
	});

	//* Verifica nome e adiciona class invalid se não estiver completo

	$("body").on("blur", "#nome", function () {
		validate($(this));
	});
	//* Verifica email e adiciona class invalid se não estiver completo

	$("body").on("blur", "#email", function () {
		validate($(this));
	});

	$("body").on("blur", "#date", function () {
		validate($(this));
		$(this).mask("00/00/0000");
	});

	$("body").on("blur", "#time", function () {
		validate($(this));
		$(this).mask("00:00");
	});

	$("body").on("blur", "#phone", function () {
		validate($(this));
		$(this).mask("0000-0000");
	});

	$("body").on("blur", "#cep", function () {
		validate($(this));
		$(this).mask("00000-000");
	});

	$("body").on("blur", "#cpf", function () {
		validate($(this));
		$(this).mask("000.000.000-00");
	});

	//* Função de Validação do formulário
	
	function validate(data) {
		if (data.val() == "") {
			$(this).addClass("invalid");

			console.log("O campo de " + data.attr('name') + " é obrigatório");

			data.parent().find('.text-muted').show()

			data.addClass('invalid')

			return false;
		} else {
			data.parernt().find('.text-muted').hide()
			data.removeClass('invalid')
		}
	}	

});

console.log($("h4").text()); //*Forma insegura de utilizar o jQuery pois pode conflitar com outras bibliotecas em projetos maiores

//TODO: Verificar se o nome é válido ( mais de 2 caracteres )
//TODO: Verificar se o email é válido ( ao menos um "@" e um "." )

/* let time = 2000;
	$(".featured-item:nth(0)").hide(time).show(time).fadeOut(time).fadeIn(time).toggle(time); */

/* for (let i = 0; i < titulos.length; i++) {
	titulos[i].textContent = "titulo qualquer";
} */

/* $(".featured-item:first h4").css("color", "#f00"); */
/* $(".featured-item").dblclick(function () {
		//dblclick - Double Click
		//OnClick CSS
		$(this).css({
			color: "#f00",
			background: "#ff0",
			border: "1px solid #fff",
			"font-weight": "100",
		});
	}); */

//É possível colocar vários elementos de estilo de css pelo JavaScript com o código $('classe, id, name').css({

//})

/* let fi = $(".featured-item"); //Start loading CSS
	fi.css({
		"text-align": "center",
		"background-color": "wheat",
	}); */

/* if (inputName.val() == "") {
			inputName.addClass("invalid");
			console.log("O campo de nome é obrigatório");

			return false;
		}

		if (inputEmail.val() == "") {
			inputEmail.addClass("invalid");
			console.log("O campo de email é obrigatório");

			return false;
		} */

/* 	if ($(this).val() == "") {
			$(this).addClass("invalid");
			console.log("O campo de nome é obrigatório");

			return false;
		} */
