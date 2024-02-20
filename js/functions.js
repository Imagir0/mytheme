jQuery(function ($){
	if (document.documentElement.clientWidth > 1240) {
		/** On rafraichi la page pour remettre le Js*/
		$(window).resize(function(){location.reload();});

		/* Menu / header */
			/**Taille du menu */
			$("#primary-menu").mouseover(function(){
				$('#primary-menu').css({"height": '100px'});
				$('#primary-menu ul li a').css({"padding": '40px 30px'});
				$("#logo-image").css({"height": '100px'});
				$("#logo-image").css({"transition": 'all 0.2s'});
				$('#primary-menu').css({"background-color": 'rgba(0,0,0,0.7)'});
			});
			$("#primary-menu").mouseout(function(){
				$('#primary-menu').css({"height": '50px'});
				$('#primary-menu ul li a').css({"padding": '15px 30px'});
				$("#logo-image").css({"height": '50px'});
				$("#logo-image").css({"transition": 'all 0.6s'});
				$('#primary-menu').css({"background-color": 'rgba(0,0,0,0.7)'});
			});
			
			/** Taille du logo */
			$("#logo-image").mouseover(function(){
				$("#logo-image").css({"height": '100px'});
				$("#logo-image").css({"transition": 'all 0.2s'});
				$('#primary-menu').css({"height": '100px'});
				$('#primary-menu ul li a').css({"padding": '40px 30px'});
			});
			$("#logo-image").mouseout(function(){
				$("#logo-image").css({"height": '50px'});
				$("#logo-image").css({"transition": 'all 0.6s'});
				$('#primary-menu').css({"height": '50px'});
				$('#primary-menu ul li a').css({"padding": '15px 30px'});
			});
		/* /Menu / header */
		
		
		/* Container */
			/** Page Etudes */
				$('#annee-competences-1').hide();
				$('#annee-competences-2').hide();
				$('#annee-competences-3').hide();
				$('#annee-competences-4').hide();
				$('#annee-competences-5').hide();
				
				$("#etude-1").mouseover(function(){
					$('#annee-competences-1').show(300);
					$('#annee-competences-2').hide(300);
					$('#annee-competences-3').hide(300);
					$('#annee-competences-4').hide(300);
					$('#annee-competences-5').hide(300);
					$('#etude-1').css({"background-color": 'rgba(255,255,255,0.8)'});
					$('#etude-2').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-3').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-4').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-5').css({"background-color": 'rgba(255,255,255,0)'});
					$("#etude-1").css({"transition": 'all 0.2s'});
				});
				$("#etude-2").mouseover(function(){
					$('#annee-competences-1').hide(300);
					$('#annee-competences-2').show(300);
					$('#annee-competences-3').hide(300);
					$('#annee-competences-4').hide(300);
					$('#annee-competences-5').hide(300);
					$('#etude-1').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-2').css({"background-color": 'rgba(255,255,255,0.8)'});
					$('#etude-3').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-4').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-5').css({"background-color": 'rgba(255,255,255,0)'});
					$("#etude-2").css({"transition": 'all 0.2s'});
				});
				$("#etude-3").mouseover(function(){
					$('#annee-competences-1').hide(300);
					$('#annee-competences-2').hide(300);
					$('#annee-competences-3').show(300);
					$('#annee-competences-4').hide(300);
					$('#annee-competences-5').hide(300);
					$('#etude-1').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-2').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-3').css({"background-color": 'rgba(255,255,255,0.8)'});
					$('#etude-4').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-5').css({"background-color": 'rgba(255,255,255,0)'});
					$("#etude-3").css({"transition": 'all 0.2s'});
				});
				$("#etude-4").mouseover(function(){
					$('#annee-competences-1').hide(300);
					$('#annee-competences-2').hide(300);
					$('#annee-competences-3').hide(300);
					$('#annee-competences-4').show(300);
					$('#annee-competences-5').hide(300);
					$('#etude-1').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-2').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-3').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-4').css({"background-color": 'rgba(255,255,255,0.8)'});
					$('#etude-5').css({"background-color": 'rgba(255,255,255,0)'});
					$("#etude-4").css({"transition": 'all 0.2s'});
				});
				$("#etude-5").mouseover(function(){
					$('#annee-competences-1').hide(300);
					$('#annee-competences-2').hide(300);
					$('#annee-competences-3').hide(300);
					$('#annee-competences-4').hide(300);
					$('#annee-competences-5').show(300);
					$('#etude-1').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-2').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-3').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-4').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-5').css({"background-color": 'rgba(255,255,255,0.8)'});
					$("#etude-5").css({"transition": 'all 0.2s'});
				});
			/** /Page Etudes */
		
			/** Page Competences */
				function handleMouseEvents(competence) {
					var numCompetence = competence.find(".num-competence");
					var imageCompetence = competence.find(".images-competences");

					imageCompetence.css({
						"visibility": 'hidden',
					});
				
					competence.mouseover(function() {
						competence.css({
							"background-color": 'rgba(255,255,255,0.8)',
							"color": 'rgb(0,0,0)',
						});
						numCompetence.css({
							"color": 'rgb(0,0,0)',
							"font-size": '2.5em',
							"transition": 'all 0.2s',
						});
						imageCompetence.css({
							"visibility": 'visible',
						});
					});
				
					competence.mouseout(function() {
						competence.css({
							"background-color": '#414141',
							"color": 'rgb(255,255,255)',
						});
						numCompetence.css({
							"color": '#fff',
							"font-size": '2em',
							"transition": 'all 0.2s',
						});
						imageCompetence.css({
							"visibility": 'hidden',
						});
					});
				}
				
				// Appliquer la fonction aux compétences nécessaires
				$(".competence").each(function() {
					handleMouseEvents($(this));
				});
			/** /Page Competences */
			
			/** Page Expérience */
				$('#annee-experience-1').hide();
				$('#annee-experience-2').hide();
				$('#annee-experience-3').hide();
				$('#annee-experience-4').hide();
				$('#annee-experience-5').hide();
				
				$("#experience-1").mouseover(function(){
					$('#annee-experience-1').show(300);
					$('#annee-experience-2').hide(300);
					$('#annee-experience-3').hide(300);
					$('#experience-1').css({"background-color": 'rgba(255,255,255,0.8)'});
					$('#experience-2').css({"background-color": 'rgba(255,255,255,0)'});
					$('#experience-3').css({"background-color": 'rgba(255,255,255,0)'})
					$("#experience-1").css({"transition": 'all 0.2s'});
				});
				$("#experience-2").mouseover(function(){
					$('#annee-experience-1').hide(300);
					$('#annee-experience-2').show(300);
					$('#annee-experience-3').hide(300);
					$('#experience-1').css({"background-color": 'rgba(255,255,255,0)'});
					$('#experience-2').css({"background-color": 'rgba(255,255,255,0.8)'});
					$('#experience-3').css({"background-color": 'rgba(255,255,255,0)'});
					$("#experience-2").css({"transition": 'all 0.2s'});
				});
				$("#experience-3").mouseover(function(){
					$('#annee-experience-1').hide(300);
					$('#annee-experience-2').hide(300);
					$('#annee-experience-3').show(300);
					$('#experience-1').css({"background-color": 'rgba(255,255,255,0)'});
					$('#experience-2').css({"background-color": 'rgba(255,255,255,0)'});
					$('#experience-3').css({"background-color": 'rgba(255,255,255,0.8)'});
					$("#experience-3").css({"transition": 'all 0.2s'});
				});
				$("#experience-4").mouseover(function(){
					$('#annee-experience-4').show(300);
					$('#annee-experience-5').hide(300);
					$('#experience-4').css({"background-color": 'rgba(255,255,255,0.8)'});
					$('#experience-5').css({"background-color": 'rgba(255,255,255,0)'});
					$("#experience-4").css({"transition": 'all 0.2s'});
				});
				$("#experience-5").mouseover(function(){
					$('#annee-experience-4').hide(300);
					$('#annee-experience-5').show(300);
					$('#experience-4').css({"background-color": 'rgba(255,255,255,0)'});
					$('#experience-5').css({"background-color": 'rgba(255,255,255,0.8)'});
					$("#experience-5").css({"transition": 'all 0.2s'});
				});
			/** /Page Expérience */
			
			/** Page Créations */
				$("#description-projet-1").hide();
				$("#description-projet-2").hide();
				$("#description-projet-3").hide();
				$("#description-projet-4").hide();
				$("#description-projet-5").hide();
				$("#description-projet-6").hide();
				$("#description-projet-7").hide();
				$("#description-projet-8").hide();
				$("#description-projet-9").hide();
				$("#description-projet-10").hide();
				$("#description-projet-11").hide();
				$("#description-projet-12").hide();
				$("#description-projet-13").hide();
				$("#description-projet-14").hide();
				
				$("#projet-1").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-2").hide();
					$("#projet-3").hide();
					$("#description-projet-1").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-1").hide();
					setTimeout(function(){
						$("#projet-2").show(200);
						$("#projet-3").show(200);
						}, 200);
				});
				$("#projet-2").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-1").hide();
					$("#projet-3").hide();
					$("#description-projet-2").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-2").hide();
					setTimeout(function(){
						$("#projet-1").show(200);
						$("#projet-3").show(200);
						}, 200);
				});
				$("#projet-3").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-1").hide();
					$("#projet-2").hide();
					$("#description-projet-3").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-3").hide();
					setTimeout(function(){
						$("#projet-1").show(200);
						$("#projet-2").show(200);
						}, 200);
				});
				$("#projet-4").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-5").hide();
					$("#projet-6").hide();
					$("#projet-7").hide();
					$("#projet-8").hide();
					$("#description-projet-4").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-4").hide();
					setTimeout(function(){
						$("#projet-5").show(200);
						$("#projet-6").show(200);
						$("#projet-7").show(200);
						$("#projet-8").show(200);
						}, 200);
				});
				$("#projet-5").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-4").hide();
					$("#projet-6").hide();
					$("#projet-7").hide();
					$("#projet-8").hide();
					$("#description-projet-5").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-5").hide();
					setTimeout(function(){
						$("#projet-4").show(200);
						$("#projet-6").show(200);
						$("#projet-7").show(200);
						$("#projet-8").show(200);
						}, 200);
				});
				$("#projet-6").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-4").hide();
					$("#projet-5").hide();
					$("#projet-7").hide();
					$("#projet-8").hide();
					$("#description-projet-6").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-6").hide();
					setTimeout(function(){
						$("#projet-4").show(200);
						$("#projet-5").show(200);
						$("#projet-7").show(200);
						$("#projet-8").show(200);
						}, 200);
				});
				$("#projet-7").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-4").hide();
					$("#projet-5").hide();
					$("#projet-6").hide();
					$("#projet-8").hide();
					$("#description-projet-7").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-7").hide();
					setTimeout(function(){
						$("#projet-4").show(200);
						$("#projet-5").show(200);
						$("#projet-6").show(200);
						$("#projet-8").show(200);
						}, 200);
				});
				$("#projet-8").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-4").hide();
					$("#projet-5").hide();
					$("#projet-6").hide();
					$("#projet-7").hide();
					$("#description-projet-8").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-8").hide();
					setTimeout(function(){
						$("#projet-4").show(200);
						$("#projet-5").show(200);
						$("#projet-6").show(200);
						$("#projet-7").show(200);
						}, 200);
				});
				$("#projet-9").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-10").hide();
					$("#projet-11").hide();
					$("#projet-12").hide();
					$("#projet-13").hide();
					$("#projet-14").hide();
					$("#description-projet-9").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-9").hide();
					setTimeout(function(){
						$("#projet-10").show(200);
						$("#projet-11").show(200);
						$("#projet-12").show(200);
						$("#projet-13").show(200);
						$("#projet-14").show(200);
						}, 200);
				});
				$("#projet-10").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-9").hide();
					$("#projet-11").hide();
					$("#projet-12").hide();
					$("#projet-13").hide();
					$("#projet-14").hide();
					$("#description-projet-10").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-10").hide();
					setTimeout(function(){
						$("#projet-9").show(200);
						$("#projet-11").show(200);
						$("#projet-12").show(200);
						$("#projet-13").show(200);
						$("#projet-14").show(200);
						}, 200);
				});
				$("#projet-11").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-9").hide();
					$("#projet-10").hide();
					$("#projet-12").hide();
					$("#projet-13").hide();
					$("#projet-14").hide();
					$("#description-projet-11").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-11").hide();
					setTimeout(function(){
						$("#projet-9").show(200);
						$("#projet-10").show(200);
						$("#projet-12").show(200);
						$("#projet-13").show(200);
						$("#projet-14").show(200);
						}, 200);
				});
				$("#projet-12").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-9").hide();
					$("#projet-10").hide();
					$("#projet-11").hide();
					$("#projet-13").hide();
					$("#projet-14").hide();
					$("#description-projet-12").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-12").hide();
					setTimeout(function(){
						$("#projet-9").show(200);
						$("#projet-10").show(200);
						$("#projet-11").show(200);
						$("#projet-13").show(200);
						$("#projet-14").show(200);
						}, 200);
				});
				$("#projet-13").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-9").hide();
					$("#projet-10").hide();
					$("#projet-11").hide();
					$("#projet-12").hide();
					$("#projet-14").hide();
					$("#description-projet-13").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-13").hide();
					setTimeout(function(){
						$("#projet-9").show(200);
						$("#projet-10").show(200);
						$("#projet-11").show(200);
						$("#projet-12").show(200);
						$("#projet-14").show(200);
						}, 200);
				});
				$("#projet-14").toggle(function(){
					$(this).css({"width": '90%'});
					$("#projet-9").hide();
					$("#projet-10").hide();
					$("#projet-11").hide();
					$("#projet-12").hide();
					$("#projet-13").hide();
					$("#description-projet-14").show(300);
				}, function() {
					$(this).css({"width": '10%'});
					$("#description-projet-14").hide();
					setTimeout(function(){
						$("#projet-9").show(200);
						$("#projet-10").show(200);
						$("#projet-11").show(200);
						$("#projet-12").show(200);
						$("#projet-13").show(200);
						}, 200);
				});
			/** /Page Créations */
			
			
			/** Page Interets */
				$('#contenu-sports').hide();
				$('#contenu-voyages').hide();
				$('#contenu-loisirs').hide();
				$('#onglet-programmation').css({"background-color": 'rgb(150,150,150)'});
				
				$("#onglet-programmation").click(function(){
					$(this).css({"background-color": 'rgb(150,150,150)'});
					$('#onglet-sports').css({"background-color": 'rgba(65,65,65,0.7)'});
					$('#onglet-voyages').css({"background-color": 'rgba(65,65,65,0.7)'});
					$('#onglet-loisirs').css({"background-color": 'rgba(65,65,65,0.7)'});
					$("#contenu-programmation").show();
					$("#contenu-sports").hide();
					$("#contenu-voyages").hide();
					$("#contenu-loisirs").hide();
					$('body').css({"background-image": "url("+templateUrl+"/img/backprogrammation.jpg)"});
					$('body').css({"transition": 'all ease 0.4s'});
				});
				$("#onglet-sports").click(function(){
					$(this).css({"background-color": 'rgb(150,150,150)'});
					$('#onglet-programmation').css({"background-color": 'rgba(65,65,65,0.7)'});
					$('#onglet-voyages').css({"background-color": 'rgba(65,65,65,0.7)'});
					$('#onglet-loisirs').css({"background-color": 'rgba(65,65,65,0.7)'});
					$("#contenu-programmation").hide();
					$("#contenu-sports").show();
					$("#contenu-voyages").hide();
					$("#contenu-loisirs").hide();
					$('body').css({"background-image": "url("+templateUrl+"/img/backsports.jpg)"});
					$('body').css({"transition": 'all ease 0.4s'});
				});
				$("#onglet-voyages").click(function(){
					$(this).css({"background-color": 'rgb(150,150,150)'});
					$('#onglet-programmation').css({"background-color": 'rgba(65,65,65,0.7)'});
					$('#onglet-sports').css({"background-color": 'rgba(65,65,65,0.7)'});
					$('#onglet-loisirs').css({"background-color": 'rgba(65,65,65,0.7)'});
					$("#contenu-programmation").hide();
					$("#contenu-sports").hide();
					$("#contenu-voyages").show();
					$("#contenu-loisirs").hide();
					$('body').css({"background-image": "url("+templateUrl+"/img/backvoyages.jpg)"});
					$('body').css({"transition": 'all ease 0.4s'});
				});
				$("#onglet-loisirs").click(function(){
					$(this).css({"background-color": 'rgb(150,150,150)'});
					$('#onglet-programmation').css({"background-color": 'rgba(65,65,65,0.7)'});
					$('#onglet-sports').css({"background-color": 'rgba(65,65,65,0.7)'});
					$('#onglet-voyages').css({"background-color": 'rgba(65,65,65,0.7)'});
					$("#contenu-programmation").hide();
					$("#contenu-sports").hide();
					$("#contenu-voyages").hide();
					$("#contenu-loisirs").show();
					$('body').css({"background-image": "url("+templateUrl+"/img/backloisirs.jpg)"});
					$('body').css({"transition": 'all ease 0.4s'});
				});
			/** /Page Interets */
		/* /Container */
	}
	else{
		/** On rafraichi la page pour enlever le js sur le menu*/
		$(window).resize(function(){location.reload();});
		/** Menu responsive */
		
		/* Menu / header */
			var primaryMenuAccessVisible = true;
			$('#primary-menu').hide();
			$('#logo').hide();

			$("#primary-menu-access").click(function() {
				// Toggle l'affichage de l'élément
				$('#footer').toggle();
				$('#primary-menu').toggle();
				$('#logo').toggle();

				// Gestion des propriétés CSS pour #primary-menu-access
				primaryMenuAccessVisible = !primaryMenuAccessVisible; // Inverser l'état
		
				if (!primaryMenuAccessVisible) {
            		$(this).css({
						"background-image": "url(" + templateUrl + "/img/open.png)",
						"z-index": '3'
					}),
					$('#footer').css({"margin-left": '0px'});
					$('#footer').css({"height": '100px'});
					$('#footer').css({"background-image": 'url()'});
				} else {
					// Si #primary-menu-access est invisible, réinitialiser les propriétés CSS
					$(this).css({
						"background-image": "url(" + templateUrl + "/img/close.png)",
						"z-index": '3'
					}),
					$('#primary-menu ul').css({"padding-left": '0px'});
				}
			});
		/* /Menu / header */

		/* Footer */
			/** Footer responsive */
			$('#footer').hide();
		/* /Footer */
	}
});