function calcular(){
   
    let mascote, homenagem, leite, kit, suplemento, oleo, feijao2, feijao1, arroz5, arroz1, macarrao, soma, equipe

    mascote = Number(document.getElementById("mascote").value)
    homenagem = Number(document.getElementById("homenagem").value)
    leite = Number(document.getElementById("leite").value)
    kit = Number(document.getElementById("kit").value)
    suplemento = Number(document.getElementById("suplemento").value )
    oleo = Number(document.getElementById("oleo").value)
    feijao2 = Number(document.getElementById("feijao2").value)
    feijao1 = Number(document.getElementById("feijao1").value)
    arroz5 = Number(document.getElementById("arroz5").value)
    arroz1 = Number(document.getElementById("arroz1").value)
    macarrao = Number(document.getElementById("macarrao").value)
    equipe = document.getElementById("equipe").value
     soma = (mascote) + (homenagem) + (2 *(leite)) + (kit)+(oleo) + (suplemento) + (2 * (feijao2)) + (feijao1) + (5 *(arroz5)) +(arroz1) + (0.5 *(macarrao))
    if(equipe == "Laranja"){
            if(kit>= 97 && suplemento >= 49){
             soma = soma + 5000 + (( kit - 97 ) * 30) + ((suplemento - 49)*15)
            }
            else if (kit>= 78 && suplemento >= 39){
                soma = soma + 4000 + (( kit - 78) * 30)+ ((suplemento - 39)*15)
            }
            else if (kit>= 49 && suplemento >= 25){
                soma = soma + 2500 + (( kit - 49) * 30)+ ((suplemento - 25)*15)
            }
            else if (kit>= 19 && suplemento >= 10){
                soma = soma + 1000 + ((kit - 19) * 30) + ((suplemento - 10)*15)
        }
    }
   
    document.getElementById("soma").innerHTML = `Seu time é ${equipe} e a soma é ${soma}`
}