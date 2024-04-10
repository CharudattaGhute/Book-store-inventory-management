function submit() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  const contentdiv = document.getElementById("booklist");
  const newDiv = document.createElement("tr");

  newDiv.innerHTML = `
    
          
              <td>${title}</td>
              <td>${author}</td>
              <td>${price}</td>
              <td>${quantity}</td>
              <td>
                <button class="btn btn-primary" onclick='editBook(this)'>Edit</button>
                <button class="btn btn-danger" onclick='deleteBook(this)'>Delete</button>
              </td>
          
                          `;

  contentdiv.appendChild(newDiv);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
}
function editBook() {
  const editModal = document.getElementById("editModal");

  $(editModal).modal("show");
}

function editcontent() {
  const title = document.getElementById("title1").value;
  const author = document.getElementById("author1").value;
  const price = document.getElementById("price1").value;
  const quantity = document.getElementById("quantity1").value;

  const secondedit = document.getElementById("booklist");

  const editDiv = document.createElement("tr");

  editDiv.innerHTML = `
    
          
              <td>${title1}</td>
              <td>${author1}</td>
              <td>${price1}</td>
              <td>${quantity1}</td>`;

  let result = secondedit.appendChild(editDiv);

  document.getElementById("booklist").innerHTML = title1;
  document.getElementById("booklist").innerHTML = author1;
}
