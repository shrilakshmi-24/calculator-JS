
        let history = document.getElementById('history');
        function calculation(v) {
            para = document.createElement('p');
            console.log(v)

            data = v + "=" + eval(v);
            // console.log(data)
            para.innerText = data;
            history.appendChild(para)
          
            document.getElementById("expression").innerHTML = v;
            return eval(v)
           
           
        }

        function backspace(b) {
            return b.slice(0, b.length - 1)
        }

        