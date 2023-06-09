/* Lógica inicial */ 

//Interação para obter resultado
    let result  = document.getElementById("result");

// Inserir numeros
    function input(num){
        let number = result.value;
        result.value = number + num;
    }

// Lógica para calculadora
    function calc(){
        if(result.value != ""){
            let result2  = result.value;
            result.value = eval(result2)
        } else{
            alert("Erro! Adicione valores válidos.")
        }
    }

// Botão RESET 
    function reset(){
        result.value = "";
    }

// Botão DELETE (del)
    function del(){
        let result2  = result.value;
        result.value = result2.substring(0, result2.length - 1);
    }
/*Mudança de temas CSS */
    // Todas cores de estilo
        const theme = {
            defaul(){
                root.style.setProperty('--background'          , '#92B75D');
                root.style.setProperty('--background-dark'     , '#00A987');
                root.style.setProperty('--background-very-dark', '#182034');
                
                root.style.setProperty('--key-color-top'       , '#ffffff');
                root.style.setProperty('--key-color-bottom'    , '#3a4764');
                root.style.setProperty('--key-background'      , '#eae3dc');
                root.style.setProperty('--key-background-dark' , '#dfd9d2');
                root.style.setProperty('--key-shadow'          , '#b4a597');

                root.style.setProperty('--key-blue-background' , '#637097');
                root.style.setProperty('--key-blue-shadow'     , '#404e72');

                root.style.setProperty('--key-red-background'  , '#d03f2f');
                root.style.setProperty('--key-red-shadow'      , '#93261a');
            },
            light(){
                root.style.setProperty('--background'          , '#C9EF91');
                root.style.setProperty('--background-dark'     , '#E5FFF7');
                root.style.setProperty('--background-very-dark', '#eeeeee');
                
                root.style.setProperty('--key-color-top'       , '#3d3d33');
                root.style.setProperty('--key-color-bottom'    , '#3d3d33');
                root.style.setProperty('--key-background'      , '#e5e4e0');
                root.style.setProperty('--key-background-dark' , '#dfd9d2');
                root.style.setProperty('--key-shadow'          , '#b4a597');

                root.style.setProperty('--key-blue-background' , '#388187');
                root.style.setProperty('--key-blue-shadow'     , '#1c6166');

                root.style.setProperty('--key-red-background'  , '#d03f2f');
                root.style.setProperty('--key-red-shadow'      , '#93261a');
            },
            dark(){
                root.style.setProperty('--background'          , '#007562');
                root.style.setProperty('--background-dark'     , '#245161');
                root.style.setProperty('--background-very-dark', '#245161');
                
                root.style.setProperty('--key-color-top'       , '#f7de43');
                root.style.setProperty('--key-color-bottom'    , '#f7de43');
                root.style.setProperty('--key-background'      , '#331b4d');
                root.style.setProperty('--key-shadow'          , '#851c9c');

                root.style.setProperty('--key-blue-background' , '#56077c');
                root.style.setProperty('--key-blue-shadow'     , '#851c9c');

                root.style.setProperty('--key-red-background'  , '#00decf');
                root.style.setProperty('--key-red-shadow'      , '#00decf');
            }
        }

// Integração de variavais/root
    var root = document.querySelector(':root');

// Verificar presença de estilo
    const darkThemeMq  = window.matchMedia("(prefers-color-scheme: dark)");
    const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");

// Mudança de temas adquiridos
    if (darkThemeMq.matches) {
        document.getElementById('btnTheme').value = "3";
        theme.dark();
    } else if(lightThemeMq.matches){
        document.getElementById('btnTheme').value = "2";
        theme.light();    
    } else {
        document.getElementById('btnTheme').value = "1";
        theme.defaul();    
    }

// Criação de funções adquiridas
    function myFunction_set(val) {
        // receiving the input type range value
            document.getElementById('btnTheme').value = val; 

            // changing the theme with the results above
            if(val == 1){
                theme.defaul();
            } 
            
            else if(val == 2){
                theme.light();
            }
            
            else{
                theme.dark();
            } 
    
    }


