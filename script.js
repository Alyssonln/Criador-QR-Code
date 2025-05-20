const input = document.querySelector('input')
const qrcode = document.querySelector('#qrcode')

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        genQRCode()
    }
})

function genQRCode() {
    if (!input.value) return

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input.value}`
}