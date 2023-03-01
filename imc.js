function calcular() {
    var peso = window.document.getElementById('peso').value
    var altura = window.document.getElementById('altura').value
    var res = window.document.getElementById('res')
    var imc = peso / (altura * altura)
    if (imc < 18.5) {
        res.innerHTML = `<p>Seu IMC é: <strong>${imc.toFixed(2)}</strong><p>`
        res.innerHTML += `<p><strong>MAGREZA</strong><p>`
    }
    if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML = `<p>Seu IMC é: <strong>${imc.toFixed(2)}</strong><p>`
        res.innerHTML += `<p><strong>NORMAL</strong><p>`
    }
    if (imc >= 25 && imc <= 29.9) {
        res.innerHTML = `<p>Seu IMC é: <strong>${imc.toFixed(2)}</strong><p>`
        res.innerHTML += `<p><strong>SOBREPESO</strong><p>`
    }
    if (imc >= 30 && imc <= 39.9) {
        res.innerHTML = `<p>Seu IMC é: <strong>${imc.toFixed(2)}</strong><p>`
        res.innerHTML += `<p><strong>OBESIDADE</strong><p>`
    }
    if (imc > 40) {
        res.innerHTML = `<p>Seu IMC é: <strong>${imc.toFixed(2)}</strong><p>`
        res.innerHTML += `<p><strong>OBESIDADE GRAVE</strong><p>`
    }
}