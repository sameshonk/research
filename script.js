document.addEventListener('DOMContentLoaded', function () {
					const imageFiles = [
						'assets/books/Yunyun_Holding_The_C_Programming_Language.png',
						'assets/books/Yamada_Nina_Holding_C_Programming_Language.png',
						'assets/books/Ui_Hirasawa_Holding_C_Programming_Language.png',
						'assets/books/Tsukukakushi_Tsukiko_Holding_C_Programming_Language.png',
						'assets/books/Tomoko_Kuroki_Holding_C_Programming_Language.jpg',
						'assets/books/Tohru_Reading_C_Programming_Language.png',
						'assets/books/Suzuka_Nagami_Reading_C_Programming_Language.png',
						'assets/books/Suzuka_Nagami_Holding_C_Programming_Language.png',
						'assets/books/Shinomiya_Kaguya_Reading_C_Programming_Language.png',
						'assets/books/Shimoe_Koharu_Reading_C_Programming_Language.jpg',
						'assets/books/Shima_Rin_Motivated_With_C.png',
						'assets/books/Shalltear_Overlord_Holding_C_Programming_Language.png',
						'assets/books/Sakurauchi_Riko_Holding_C_Programming_Language.png',
						'assets/books/Sakura_Nene_Holding_C_Programming_Language_Book.jpg',
						'assets/books/Sakurajima_Mai_Holding_C_Programming_Language.png',
						'assets/books/Ryo_Yamada_Holding_C_Book.jpg',
						'assets/books/Renge_Reading_C_Programming_Language.jpg',
						'assets/books/Nagato_Yuki_Wakeboarding_Reading_C_Programming_Language.jpg',
						'assets/books/Nagato_Yuki_Reading_The_C_Programming_Language_In_The_Library.png',
						'assets/books/Mysterious_Heroine_X_Holding_C_Programming_Language.jpg',
						'assets/books/Murasaki_Shikibu_Holding_C_Programming_Language_Polish.jpg',
						'assets/books/Murakami_Shiina_Holding_Computer_C_Programming_Language.png',
						'assets/books/Miyamizu_Mitsuha_Reading_C_Programming.png',
						'assets/books/Mio_Akiyama_Holding_C_Book.gif',
						'assets/books/Mai_Sakurajima_Holding_C_Programming_Language.png',
						'assets/books/Kunikida_Hanamaru_Holding_C_Programming_Language.png',
						'assets/books/297974 bribing scene.png',
						'assets/books/Meteora_Österreich_Holding_C_Programming_Language.png',
						'assets/books/Megumin_Holding_C_Programming_Language.jpg',
						'assets/books/Makise_Kurisu_Holding_C_Programming_Language.png',
						'assets/books/Maki_Oze_holding_introducao_a_programacao_com_a_linguagem_C.jpg',
						'assets/books/Kuroneko_Holding_Fake_C_Book.png',
						'assets/books/Kuriyama_Mirai_flips_through_The_C_Programming_Language.gif',
						'assets/books/Komi_san_C.png',
						'assets/books/Koizumi_Hanayo_Holding_C_Programming_Language.png',
						'assets/books/Kochiya_Sanae_Holding_C_Programming_Language.png',
						'assets/books/Kitagawa_Marin_Holding_C_Programming_Language.png',
						'assets/books/Karen_C_Programming_Language.png',
						'assets/books/Kagamihara_nadeshiko_Reading_C_Programming_Language.png',
						'assets/books/Hibiki_Holding_C_Programming_Language.png',
						'assets/books/Hakurei_Reimu_Holding_C_Programming_Language.jpg',
						'assets/books/Fuko_Ibuki_Holding_Up_C.jpg',
						'assets/books/Eris_Grayrat_Holding_The_C_Programming_Language.png',
						'assets/books/Chitanda_Eru_Holding_C_Programming_Language.jpg',
						'assets/books/Cardcaptor_Sakura_Kinomoto_C_Programming_Language.jpg',
						'assets/books/Arikawa_Hime_Holding_C_Programming_Language.png',
						'assets/books/Akiyama_Mio_Reading_C_Programming_Language.png',
						'assets/books/Ai_Hayasaka_Shinomiya_Kaguya_C_Programming_Language.png',
						'assets/books/Aharen_Reina_Holding_C_Programming_Language.png'
						// Add more paths as needed
					];

					const imageContainer = document.getElementById('imagecontainer');
					const randomImage = document.getElementById('randomimage');

					function getRandomImage() {
						const randomIndex = Math.floor(Math.random() * imageFiles.length);
						return imageFiles[randomIndex];
					}

					function changeImage() {
						const randomImageFileName = getRandomImage();
						// Set the image source directly without modifying the path
						randomImage.src = randomImageFileName;
						randomImage.alt = 'Random Image: ' + randomImageFileName;
					}

					changeImage(); // Call the changeImage function when the page is loaded
				});