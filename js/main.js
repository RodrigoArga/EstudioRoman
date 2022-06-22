document.addEventListener('DOMContentLoaded', function () {
    let usuario = 'Rodrigo'
    let password = 678
    let ahorroTotal = 0
    let data
    let funcionDatos = true

    function esGanancia(ganancia) {
        if (ganancia > 0) {
            ahorroTotal += ganancia
            alert(`registraste ${ganancia} tu ahorro es de ${ahorroTotal}`)
        } else {
            alert('error')
        }
    }


    function esGasto(gasto) {
        if (gasto > 0 && gasto < ahorroTotal) {
            ahorroTotal -= gasto
            alert(`gastaste ${gasto} te quedan ${ahorroTotal} en tu cuenta`)
        } else if (gasto > 0 && gasto > ahorroTotal) {
            ahorroTotal -= gasto
            alert(` tus gastos estan superando tus ingresos!! tendrás que endeudarte para cubrirlos! tu saldo es de ${ahorroTotal}`)
            let parrafoAlerta = document.createElement('p')
            parrafoAlerta.innerHTML = '<p> Debes administrar mejor tu dinero, en tus ultimas entradas tus gastos fueron superiores a tus ingresos </p>'
            let fraseDestino = document.getElementById('fraseAlerta')
            fraseDestino.append(parrafoAlerta)
        }
    }

    function validarUserYPass(user, pass) {
        return (user == usuario && pass == password) ? true : false
    }


    let btn = document.getElementById('sendButton')

    btn.addEventListener('click', (e) => {
        alert('enviado!')
        e.preventDefault()
    })
    const valorado = () => {
        let pValoracion = document.createElement('p')
        pValoracion.innerHTML = '<p> Tu valoración fué registrada con éxito </p>'
        document.getElementById('divValoracion').append(pValoracion)
    }
    btn.addEventListener('click', valorado)




    for (let i = 1; i <= 3; i++) {
        let user = prompt('ingrese su usuario: ')
        let pass = prompt('ingrese su contraseña: ')
        let validacion = validarUserYPass(user, pass)
        if (validacion) {
            alert('Bienvenidos a Savings Managament')
            localStorage.setItem('usuariosActivos', JSON.stringify(user))
            while (funcionDatos) {
                data = prompt('escriba "Consultar" para consultar su disponibilidad de dinero,\n"Registrar ganancia" , \n"Registrar gasto",\n"clasificar" para clasificar gastos y ganancias, \n"Terminar" para finalizar')
                if (data == 'Consultar') {
                    alert('te quedan: ' + ahorroTotal + 'ahorrados')
                } else if (data == 'Registrar ganancia') {
                    alert(prompt('describe la ganancia'))
                    let ganancia = parseInt(prompt('ingrese la cantidad en pesos de la ganancia: '))
                    esGanancia(ganancia)
                } else if (data == 'Registrar gasto') {
                    alert(prompt('describe el gasto'))
                    let gasto = parseInt(prompt('ingrese la cantidad en pesos del gasto: '))
                    esGasto(gasto)
                } else if (data == 'Terminar') {
                    alert('gracias por usar Savings Managament')
                    funcionDatos = false
                } else if (data == 'clasificar') {
                    let clasificar = []
                    do {
                        clasificar = prompt('ingrese el item que desea agregar a su clasificación de ganancias/gastos\n de lo contrario escriba Terminar ').toLowerCase()
                        if (clasificar != 'Terminar') {
                            clasificar.push(clasificar)
                        }
                    } while (clasificar != 'Terminar')

                }
            }
            let parrafoFinal = document.createElement('p')
            parrafoFinal.innerHTML = '<p>Si te gustó la app nos ayudas compartiendo el enlace para seguir creciendo!!,gracias ' + user + ' </p>'
            let parrafoDestino = document.getElementById('fraseDespedida')
            parrafoDestino.append(parrafoFinal)
            break
        } else {
            alert('usuario o contraseña incorrectos le quedan ' + (3 - i) + ' intentos')
        }
    }

}, false);