        // Set the date we're counting down to
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var currentMonth = new Date().getMonth();
	var date  = new Date(months[currentMonth]+" 5, 2019 10:00:00");

        
        var countDownDate = date.getTime();
        document.getElementById("paydate").innerHTML = date;

		// Update the count down every 1 second
		var x = setInterval(function () {

			// Get todays date and time
			var now = new Date().getTime();

			// Find the distance between now and the count down date
			var distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Output the result in an element with id="demo"
			document.getElementById("demo").innerHTML = days + "d " + hours + "h "
				+ minutes + "m " + seconds + "s ";

			document.getElementById("demotitle").innerHTML = days + "d " + hours + "h "
				+ minutes + "m " + seconds + "s before payday";

			// If the count down is over, write some text 
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("demotitle").innerHTML = "It\'s PAYDAY!!!";

				document.getElementById("demo").innerHTML = "It\'s PAYDAY!!!";
				document.getElementById("heading").innerHTML = "Rejoice!!!";
				document.getElementById("canvas").style.visibility = "visible";
				var notification = new Notification("You'll be notified on payday");
			}
			else {
				document.getElementById("canvas").style.visibility = "hidden";

			}
		}, 1000);
