var selectedSeats = [];
        function setTotalSet(){
            document.getElementById("totalSit").innerText = selectedSeats.length;
        }
        function enableSubmit(){
            let numVal = document.getElementById("Cusnumber").value;
            if(selectedSeats.length>=1 && numVal){
                var buyTicketBtn = document.getElementById('buyTicketBtn');
                buyTicketBtn.disabled = false; 
            }
        }

        document.getElementById("Cusnumber").addEventListener("keyup", enableSubmit)
        function calculateTotal() {
            let totalPrice  = 550 * selectedSeats.length;
            document.getElementById("TotalPrice").innerText = totalPrice;
   
        }
        function handleClick(button) {
            if (selectedSeats.length<4) {
                var innerText = button.innerText;
            selectedSeats.push(innerText);
            button.classList.add("text-white");
            button.classList.add("bg-green-400");
            button.classList.remove("bg-gray-200");
            button.disabled = true; 
            setTotalSet();
            enableSubmit();
            calculateTotal();
            // show Sit info
            let outputDiv = document.getElementById("sitInfo");
            var ul = document.createElement('div');
            ul.classList.add("flex");
            ul.classList.add("justify-between");
                var li = document.createElement('p');
                li.textContent = innerText;
                ul.appendChild(li);
             outputDiv.appendChild(ul);
             var li = document.createElement('p');
                li.textContent = "Economoy";
                ul.appendChild(li);
             outputDiv.appendChild(ul);
             var li = document.createElement('p');
                li.textContent = "550";
                ul.appendChild(li);
             outputDiv.appendChild(ul);
            let sitLeft = document.getElementById("sitLeft").innerText;
            document.getElementById("sitLeft").innerText = sitLeft - 1;
            if (selectedSeats.length==4) {
                document.getElementById("coupenVal").disabled = false; 
            }
            }else{
                openPopup("Max(4) seat can be taken");
            }
            
        }
        function openPopup(message) {
            alert(message);
    }
        function onCouponApply() { 
            let coupenVal =  document.getElementById("coupenVal").value;
            if (coupenVal=="NEW15" || coupenVal=="Couple 20") {
                document.getElementById("totalDiscount").classList.add("flex");
                document.getElementById("totalDiscount").classList.remove("hidden");
                document.getElementById("coupenAdd").classList.add("hidden");
                document.getElementById("coupenAdd").classList.remove("flex");
                document.getElementById("GrandTotal").classList.add("flex");
                document.getElementById("GrandTotal").classList.remove("hidden");
                let totalPrice  = 550 * selectedSeats.length;
                let discoutRate = totalPrice * (coupenVal=="NEW15"?0.15:0.2);
                document.getElementById("discountPrice").innerText = discoutRate;
                document.getElementById("grandPrice").innerText =totalPrice - discoutRate ;
                console.log(discoutRate);
            }else{
                openPopup("Invalid Coupon Code");
            }
            
         }