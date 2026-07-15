function gerar() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')


    if (num.value.lenght == 0) {
        window.alert('Por favor, digite um número!')
        return
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)

        for (let mult = 1; mult <= 10; mult++) {
            let item = document.createElement('option')
            item.text = `${n} x ${mult} = ${n * mult}`

            tab.appendChild(item)
        }
    }
}