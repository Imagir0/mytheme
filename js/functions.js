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
				
				$("#etude-1").mouseover(function(){
					$('#annee-competences-1').show(300);
					$('#annee-competences-2').hide(300);
					$('#annee-competences-3').hide(300);
					$('#annee-competences-4').hide(300);
					$('#etude-1').css({"background-color": 'rgba(255,255,255,0.8)'});
					$('#etude-2').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-3').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-4').css({"background-color": 'rgba(255,255,255,0)'});
					$("#etude-1").css({"transition": 'all 0.2s'});
				});
				$("#etude-2").mouseover(function(){
					$('#annee-competences-1').hide(300);
					$('#annee-competences-2').show(300);
					$('#annee-competences-3').hide(300);
					$('#annee-competences-4').hide(300);
					$('#etude-1').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-2').css({"background-color": 'rgba(255,255,255,0.8)'});
					$('#etude-3').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-4').css({"background-color": 'rgba(255,255,255,0)'});
					$("#etude-2").css({"transition": 'all 0.2s'});
				});
				$("#etude-3").mouseover(function(){
					$('#annee-competences-1').hide(300);
					$('#annee-competences-2').hide(300);
					$('#annee-competences-3').show(300);
					$('#annee-competences-4').hide(300);
					$('#etude-1').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-2').css({"background-color": 'rgba(255,255,255,0)'});
					$('#etude-3').css({"background-color": 'rgba(255,255,255,0.8)'});
					$('#etude-4').css({"background-color": 'rgba(255,255,255,0)'});
					$("#etude-3").css({"transition": 'all 0.2s'});
				});
				$("#etude-4").mouseover(function(){
				$('#annee-competences-1').hide(300);
				$('#annee-competences-2').hide(300);
				$('#annee-competences-3').hide(300);
				$('#annee-competences-4').show(500);
				$('#etude-1').css({"background-color": 'rgba(255,255,255,0)'});
				$('#etude-2').css({"background-color": 'rgba(255,255,255,0)'});
				$('#etude-3').css({"background-color": 'rgba(255,255,255,0)'});
				$('#etude-4').css({"background-color": 'rgba(255,255,255,0.8)'});
				$("#etude-4").css({"transition": 'all 0.2s'});
			});
			/** /Page Etudes */
		
			/** Page Competences */
				/** J'AI PAS REUSSI AVEC UN FOR :/ */
				$("#image-competence-1").css({"visibility": 'hidden'});
				$("#image-competence-2").css({"visibility": 'hidden'});
				$("#image-competence-3").css({"visibility": 'hidden'});
				$("#image-competence-4").css({"visibility": 'hidden'});
				$("#image-competence-5").css({"visibility": 'hidden'});
				$("#image-competence-6").css({"visibility": 'hidden'});
				$("#image-competence-7").css({"visibility": 'hidden'});
				$("#image-competence-8").css({"visibility": 'hidden'});
				$("#image-competence-9").css({"visibility": 'hidden'});
				$("#image-competence-10").css({"visibility": 'hidden'});
				$("#image-competence-11").css({"visibility": 'hidden'});
				$("#image-competence-12").css({"visibility": 'hidden'});
				$("#image-competence-13").css({"visibility": 'hidden'});
				$("#image-competence-14").css({"visibility": 'hidden'});
				$("#image-competence-15").css({"visibility": 'hidden'});
				$("#image-competence-16").css({"visibility": 'hidden'});
				$("#image-competence-17").css({"visibility": 'hidden'});
				$("#image-competence-18").css({"visibility": 'hidden'});
				$("#image-competence-19").css({"visibility": 'hidden'});
				$("#image-competence-20").css({"visibility": 'hidden'});
			
				$("#competence-1").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-1").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-1").css({"font-size": '2.5em'});
					$("#num-competence-1").css({"transition": 'all 0.2s'});
					$("#image-competence-1").css({"visibility": 'visible'});
				});
				$("#competence-1").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-1").css({"color": '#fff'});
					$("#num-competence-1").css({"font-size": '2em'});
					$("#num-competence-1").css({"transition": 'all 0.2s'});
					$("#image-competence-1").css({"visibility": 'hidden'});
				});
				$("#competence-2").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-2").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-2").css({"font-size": '2.5em'});
					$("#num-competence-2").css({"transition": 'all 0.2s'});
					$("#image-competence-2").css({"visibility": 'visible'});
				});
				$("#competence-2").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-2").css({"color": '#fff'});
					$("#num-competence-2").css({"font-size": '2em'});
					$("#num-competence-2").css({"transition": 'all 0.2s'});
					$("#image-competence-2").css({"visibility": 'hidden'});
				});
				$("#competence-3").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-3").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-3").css({"font-size": '2.5em'});
					$("#num-competence-3").css({"transition": 'all 0.2s'});
					$("#image-competence-3").css({"visibility": 'visible'});
				});
				$("#competence-3").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-3").css({"color": '#fff'});
					$("#num-competence-3").css({"font-size": '2em'});
					$("#num-competence-3").css({"transition": 'all 0.2s'});
					$("#image-competence-3").css({"visibility": 'hidden'});
				});
				$("#competence-4").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-4").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-4").css({"font-size": '2.5em'});
					$("#num-competence-4").css({"transition": 'all 0.2s'});
					$("#image-competence-4").css({"visibility": 'visible'});
				});
				$("#competence-4").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-4").css({"color": '#fff'});
					$("#num-competence-4").css({"font-size": '2em'});
					$("#num-competence-4").css({"transition": 'all 0.2s'});
					$("#image-competence-4").css({"visibility": 'hidden'});
				});
				$("#competence-5").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-5").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-5").css({"font-size": '2.5em'});
					$("#num-competence-5").css({"transition": 'all 0.2s'});
					$("#image-competence-5").css({"visibility": 'visible'});
				});
				$("#competence-5").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-5").css({"color": '#fff'});
					$("#num-competence-5").css({"font-size": '2em'});
					$("#num-competence-5").css({"transition": 'all 0.2s'});
					$("#image-competence-5").css({"visibility": 'hidden'});
				});
				$("#competence-6").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-6").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-6").css({"font-size": '2.5em'});
					$("#num-competence-6").css({"transition": 'all 0.2s'});
					$("#image-competence-6").css({"visibility": 'visible'});
				});
				$("#competence-6").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-6").css({"color": '#fff'});
					$("#num-competence-6").css({"font-size": '2em'});
					$("#num-competence-6").css({"transition": 'all 0.2s'});
					$("#image-competence-6").css({"visibility": 'hidden'});
				});
				$("#competence-7").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-7").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-7").css({"font-size": '2.5em'});
					$("#num-competence-7").css({"transition": 'all 0.2s'});
					$("#image-competence-7").css({"visibility": 'visible'});
				});
				$("#competence-7").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-7").css({"color": '#fff'});
					$("#num-competence-7").css({"font-size": '2em'});
					$("#num-competence-7").css({"transition": 'all 0.2s'});
					$("#image-competence-7").css({"visibility": 'hidden'});
				});
				$("#competence-8").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-8").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-8").css({"font-size": '2.5em'});
					$("#num-competence-8").css({"transition": 'all 0.2s'});
					$("#image-competence-8").css({"visibility": 'visible'});
				});
				$("#competence-8").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-8").css({"color": '#fff'});
					$("#num-competence-8").css({"font-size": '2em'});
					$("#num-competence-8").css({"transition": 'all 0.2s'});
					$("#image-competence-8").css({"visibility": 'hidden'});
				});
				$("#competence-9").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-9").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-9").css({"font-size": '2.5em'});
					$("#num-competence-9").css({"transition": 'all 0.2s'});
					$("#image-competence-9").css({"visibility": 'visible'});
				});
				$("#competence-9").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-9").css({"color": '#fff'});
					$("#num-competence-9").css({"font-size": '2em'});
					$("#num-competence-9").css({"transition": 'all 0.2s'});
					$("#image-competence-9").css({"visibility": 'hidden'});
				});
				$("#competence-10").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-10").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-10").css({"font-size": '2.5em'});
					$("#num-competence-10").css({"transition": 'all 0.2s'});
					$("#image-competence-10").css({"visibility": 'visible'});
				});
				$("#competence-10").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-10").css({"color": '#fff'});
					$("#num-competence-10").css({"font-size": '2em'});
					$("#num-competence-10").css({"transition": 'all 0.2s'});
					$("#image-competence-10").css({"visibility": 'hidden'});
				});
				$("#competence-11").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-11").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-11").css({"font-size": '2.5em'});
					$("#num-competence-11").css({"transition": 'all 0.2s'});
					$("#image-competence-11").css({"visibility": 'visible'});
				});
				$("#competence-11").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-11").css({"color": '#fff'});
					$("#num-competence-11").css({"font-size": '2em'});
					$("#num-competence-11").css({"transition": 'all 0.2s'});
					$("#image-competence-11").css({"visibility": 'hidden'});
				});
				$("#competence-12").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-12").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-12").css({"font-size": '2.5em'});
					$("#num-competence-12").css({"transition": 'all 0.2s'});
					$("#image-competence-12").css({"visibility": 'visible'});
				});
				$("#competence-12").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-12").css({"color": '#fff'});
					$("#num-competence-12").css({"font-size": '2em'});
					$("#num-competence-12").css({"transition": 'all 0.2s'});
					$("#image-competence-12").css({"visibility": 'hidden'});
				});
				$("#competence-13").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-13").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-13").css({"font-size": '2.5em'});
					$("#num-competence-13").css({"transition": 'all 0.2s'});
					$("#image-competence-13").css({"visibility": 'visible'});
				});
				$("#competence-13").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-13").css({"color": '#fff'});
					$("#num-competence-13").css({"font-size": '2em'});
					$("#num-competence-13").css({"transition": 'all 0.2s'});
					$("#image-competence-13").css({"visibility": 'hidden'});
				});
				$("#competence-14").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-14").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-14").css({"font-size": '2.5em'});
					$("#num-competence-14").css({"transition": 'all 0.2s'});
					$("#image-competence-14").css({"visibility": 'visible'});
				});
				$("#competence-14").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-14").css({"color": '#fff'});
					$("#num-competence-14").css({"font-size": '2em'});
					$("#num-competence-14").css({"transition": 'all 0.2s'});
					$("#image-competence-14").css({"visibility": 'hidden'});
				});
				$("#competence-15").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-15").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-15").css({"font-size": '2.5em'});
					$("#num-competence-15").css({"transition": 'all 0.2s'});
					$("#image-competence-15").css({"visibility": 'visible'});
				});
				$("#competence-15").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-15").css({"color": '#fff'});
					$("#num-competence-15").css({"font-size": '2em'});
					$("#num-competence-15").css({"transition": 'all 0.2s'});
					$("#image-competence-15").css({"visibility": 'hidden'});
				});
				$("#competence-16").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-16").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-16").css({"font-size": '2.5em'});
					$("#num-competence-16").css({"transition": 'all 0.2s'});
					$("#image-competence-16").css({"visibility": 'visible'});
				});
				$("#competence-16").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-16").css({"color": '#fff'});
					$("#num-competence-16").css({"font-size": '2em'});
					$("#num-competence-16").css({"transition": 'all 0.2s'});
					$("#image-competence-16").css({"visibility": 'hidden'});
				});
				$("#competence-17").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-17").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-17").css({"font-size": '2.5em'});
					$("#num-competence-17").css({"transition": 'all 0.2s'});
					$("#image-competence-17").css({"visibility": 'visible'});
				});
				$("#competence-17").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-17").css({"color": '#fff'});
					$("#num-competence-17").css({"font-size": '2em'});
					$("#num-competence-17").css({"transition": 'all 0.2s'});
					$("#image-competence-17").css({"visibility": 'hidden'});
				});
				$("#competence-18").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-18").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-18").css({"font-size": '2.5em'});
					$("#num-competence-18").css({"transition": 'all 0.2s'});
					$("#image-competence-18").css({"visibility": 'visible'});
				});
				$("#competence-18").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-18").css({"color": '#fff'});
					$("#num-competence-18").css({"font-size": '2em'});
					$("#num-competence-18").css({"transition": 'all 0.2s'});
					$("#image-competence-18").css({"visibility": 'hidden'});
				});
				$("#competence-19").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-19").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-19").css({"font-size": '2.5em'});
					$("#num-competence-19").css({"transition": 'all 0.2s'});
					$("#image-competence-19").css({"visibility": 'visible'});
				});
				$("#competence-19").mouseout(function(){
					$(this).css({"background-color": '#414141'});
					$(this).css({"color": 'rgb(255,255,255)'});
					$("#num-competence-19").css({"color": '#fff'});
					$("#num-competence-19").css({"font-size": '2em'});
					$("#num-competence-19").css({"transition": 'all 0.2s'});
					$("#image-competence-19").css({"visibility": 'hidden'});
				});
				$("#competence-20").mouseover(function(){
					$(this).css({"background-color": 'rgba(255,255,255,0.8)'});
					$(this).css({"color": 'rgb(0,0,0)'});
					$("#num-competence-20").css({"color": 'rgb(0,0,0)'});
					$("#num-competence-20").css({"font-size": '2.5em'});
					$("#num-competence-20").css({"transition": 'all 0.2s'});
					$("#image-competence-20").css({"visibility": 'visible'});
				});
				$("#competence-20").mouseout(function(){
				$(this).css({"background-color": '#414141'});
				$(this).css({"color": 'rgb(255,255,255)'});
				$("#num-competence-20").css({"color": '#fff'});
				$("#num-competence-20").css({"font-size": '2em'});
				$("#num-competence-20").css({"transition": 'all 0.2s'});
				$("#image-competence-20").css({"visibility": 'hidden'});
			});	
			/** /Page Competences */
			
			/** Page Expérience */
				$('#annee-experience-1').hide();
				$('#annee-experience-2').hide();
				$('#annee-experience-3').hide();
				
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
		
		/* Footer */
			/** Permet un écart de la sourie + animation footer*/
			$("#footer").mouseover(function(){
				$('#footer-marge').css({marginLeft: '0px'});
				$('#footer').css({marginLeft: '0px'});
				$('#footer').css("background-image", "url("+templateUrl+"/img/arrowactive.png)"); 
			});
			$("#footer-marge").mouseover(function(){
				$('#footer').css({marginLeft: '0px'});
				$('#footer').css("background-image", "url("+templateUrl+"/img/arrowactive.png)"); 
			});
			$("#footer-marge").mouseout(function(){
				$('#footer').css({marginLeft: '95%'});
				$('#footer-marge').css({marginLeft: '100%'});
				$('#footer').css("background-image", "url("+templateUrl+"/img/arrow.png)"); 
			});
		/* /Footer */
	}
	else{
		/** On rafraichi la page pour enlever le js sur le menu*/
		$(window).resize(function(){location.reload();});
		/** Menu responsive */
		
		/* Menu / header */
			$('#primary-menu').hide();
			$('#logo').hide();

			$("#primary-menu-access").toggle(function(){
				$(this).css({"background-image": "url("+templateUrl+"/img/close.png)"});
				$(this).css({"z-index": '3'});
				$('#footer').show();
				$('#footer').css({"margin-left": '0px'});
				$('#footer').css({"background-image": 'url()'});
				$('#primary-menu').show(100);
				$('#logo').show(100);
			}, function() {
				$(this).css({"background-image": "url("+templateUrl+"/img/open.png)"});
				$(this).mouseover(function(){
					$(this).css({"background-image": "url("+templateUrl+"/img/openhover.png)"});
				});
				$(this).mouseout(function(){
					$(this).css({"background-image": "url("+templateUrl+"/img/open.png)"});
				});
				$(this).css({"z-index": '3'});
				$('#footer').hide();
				$('#primary-menu').hide(100);
				$('#logo').hide(100);
			});

		/* /Menu / header */

		/* Footer */
			/** Footer responsive */
			$('#footer').hide();
		/* /Footer */
	}
});