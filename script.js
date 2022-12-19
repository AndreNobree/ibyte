const btn = document.querySelector('#gera');

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

btn.addEventListener("click", function(e){
    e.preventDefault();
    const name = document.querySelector('#em0');
    const value = name.value;
   

    if (value.length > 8 || value.length < 6){
        console.log('Erro de digitação');
        //alert('Erro! Quantidade de caracteres excedido ou faltando');
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    }
    else if (value.length == 0){
        console.log('Campos em Branco');
        //alert('Campos em Branco');
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    }
    else{
        if (value.length == 8){

            //tirar o EM
            var insere = value.split("").filter(n => (Number(n) || n == 0)).join("").trim();
            console.log(insere)
            if (insere.length == 6){
                var mostra = window.document.getElementById('mostra');

                var result = 'https://creditofacil.ibyte.com.br/?aff='+insere+'&utm_source='+insere+'&utm_medium='+insere+'&utm_campaign='+insere+'&utm_content='+insere

                console.log(result);
                mostra.innerHTML = result;

                name.value = ''
            }
            else{
                console.log('Erro! Reveja os campos');
                
                const toast = new bootstrap.Toast(toastLiveExample)

                toast.show()

            }
        }
        else if (value.length == 6){


            var insere2 = value.split("").filter(n => (Number(n) || n == 0)).join("").trim();
            console.log(insere2)

            if (insere2.length == 6){
                var mostra2 = window.document.getElementById('mostra');

                var result2 = 'https://creditofacil.ibyte.com.br/?aff='+insere2+'&utm_source='+insere2+'&utm_medium='+insere2+'&utm_campaign='+insere2+'&utm_content='+insere2
                
                console.log(result2)
                mostra2.innerHTML = result2

                name.value = ''
            }
            else{
                console.log('Erro! Reveja os campos');
                //alert('Erro! Reveja os campos');
                const toast = new bootstrap.Toast(toastLiveExample)

                toast.show()
            }
        }
        else{
            console.log('Erro de digitação');
            //alert('Erro de digitação, verifique os números');
            const toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
        }
        
    }
});

