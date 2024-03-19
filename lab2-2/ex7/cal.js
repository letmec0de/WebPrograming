    
        // Function that display value 
        function hienThi(val) { 
            document.getElementById("result").value += val 
        } 
  
        function xulySukien(event) { 
            if (event.key == '0' || event.key == '1' 
                || event.key == '2' || event.key == '3' 
                || event.key == '4' || event.key == '5' 
                || event.key == '6' || event.key == '7' 
                || event.key == '8' || event.key == '9' 
                || event.key == '+' || event.key == '-' 
                || event.key == '*' || event.key == '/') 
                document.getElementById("result").value += event.key; 
        } 
  
        document.getElementById("calculator").onkeyup = function (event) { 
            if (event.keyCode === 13) { 
                console.log("Enter"); 
                let x = document.getElementById("result").value ;
                console.log(x); 
                tinhToan(); // Corrected from solve()
            } 
        }
  
        // Function that evaluates the digit and return result 
        function tinhToan() { 
            let x = document.getElementById("result").value 
            let y = eval(x)
            document.getElementById("result").value = y 
        } 
  
        // Function that clear the display 
        function xoa() { 
            document.getElementById("result").value = "" 
        } 

        function changTheme() {
            var element = document.body;
            element.classList.toggle("dark-mode");
         }