let edit = [];
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
  edit.push({ title: title, author: author, price: price, quantity: quantity });
}
function editBook() {
  const editModal = document.getElementById("editModal");

  $(editModal).modal("show");
}
function deleteBook(element) {
  const row = element.closest("tr");
  row.remove();
}

let newarr = [];
function editcontent() {
  const title1 = document.getElementById("title1").value;
  const author1 = document.getElementById("author1").value;
  const price1 = document.getElementById("price1").value;
  const quantity1 = document.getElementById("quantity1").value;

  const secondedit = document.getElementById("booklist");

  const editDiv = document.createElement("tr");

  editDiv.innerHTML = `
    
          
              <td>${title1}</td>
              <td>${author1}</td>
              <td>${price1}</td>
              <td>${quantity1}</td>`;

  secondedit.appendChild(editDiv);

  document.getElementById("booklist").value = title1;
  document.getElementById("booklist").value = author1;
  document.getElementById("booklist").value = price1;
  document.getElementById("booklist").value = quantity1;

  console.log(newarr);
}
