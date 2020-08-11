
//procurar botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener("click", cloneField)
//execuçao de um açao
function cloneField() {
  //duplica os campos. que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean true ou false

  const fields = newFieldContainer.querySelectorAll('input')

  fields.forEach(function(field) {
    field.value = ""
  });
// colocar na pagina aonde??
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}