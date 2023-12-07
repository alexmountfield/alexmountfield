var titles = 	["alex m  🗝️", 
							"alex m  🕰️", 
							"alex m  🧿", 
							"alex m  🔮", 
							"alex m  🕳️", 
							"alex m  🚪", 
							"alex m  🗡️", 
							"alex m  ✨", 
							"alex m  💫"];
			var index = 0;

			function changeTitle() {
				document.title = titles[index];
				index++; //
					if (index == titles.length) {
						index = 0;
						}
				setTimeout(changeTitle, 250);
			}

			changeTitle();