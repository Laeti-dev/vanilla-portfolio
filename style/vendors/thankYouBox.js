const thankYouBox = () => {
  const form = document.querySelector('.form-btn')
  const alert = () => {
    window.alert("Thank you ! You should receive a reply within 24h.")
  }
  form.addEventListener('click', alert())
}

export default thankYouBox
