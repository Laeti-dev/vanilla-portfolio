const thankYouBox = () => {
  const form = document.querySelector('form > button')
  const alert = () => {
    window.alert("Thank you ! You should receive a reply within 24h.")
  }
  form.addEventListener('click', alert())
}

export default thankYouBox
