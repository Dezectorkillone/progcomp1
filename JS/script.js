function calcular(){
   
    let mascote, homenagem, leite, kit, suplemento, oleo, feijao2, feijao1, arroz5, arroz1, macarrao

    mascote = document.getElementById("mascote").value
    homenagem = document.getElementById("homenagem").value
    leite = document.getElementById("leite").value
    kit = document.getElementById("kit").value
    suplemento = document.getElementById("suplemento").value 
    oleo = document.getElementById("oleo").value
    feijao2 = document.getElementById("feijao2").value
    feijao1 = document.getElementById("feijao1").value
    arroz5 = document.getElementById("arroz5").value
    arroz1 = document.getElementById("arroz1").value
    macarrao = document.getElementById("macarrao").value
    
    let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite)) + (30 * Number(kit)) + Number(oleo) + (15 * Number(suplemento)) + (2 * Number(feijao2)) + Number(feijao1) + (5 * Number(arroz5)) + Number(arroz1) + (0.5 * Number(macarrao))
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}