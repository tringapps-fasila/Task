let dataarray = [{
      "id": 1,
      "email": "fasila@gmail.com",
      "FirstName": "fasila",
      "LastName": "firthous",
      "Phone": 1234567845,
      "dob": "03-11-2003",
      "Gender":"Female"
   },
   {
      "id": 2,
      "email": "ahamed@gmail.com",
      "FirstName": "ahamed",
      "LastName": "ibrahim",
      "Phone": 1234578902,
      "dob": "22-12-2012",
      "Gender": "male"
   }];

function initial() {
   
   if (localStorage.user) {
      dataarray = JSON.parse(localStorage.user);
      for (let i in dataarray) {
        preparetable(dataarray[i].id, dataarray[i].email, dataarray[i].FirstName, dataarray[i].LastName, dataarray[i].Phone, dataarray[i].dob, dataarray[i].Gender);
      }
   }
   
}

function onsubmitreg() {
   if(document.getElementById("terms").checked)
   {
   let email = document.getElementById("mail").value;
   let FirstName = document.getElementById("FirstName").value;
   let LastName = document.getElementById("LastName").value;
   let Phone = document.getElementById("phone").value;
   let dob = document.getElementById("dob").value;
   let Gender;
   if (document.getElementById('female').checked) {
      Gender = document.getElementById('female').value;
   } else if(document.getElementById('male').checked) {
      Gender = document.getElementById('male').value;
   }
  
   let id = dataarray.length + 1;
   let data = { id: id, email: email, FirstName: FirstName, LastName: LastName, Phone: Phone, dob: dob, Gender: Gender };
   dataarray.push(data);

   localStorage.user = JSON.stringify(dataarray);

   preparetable(id, email, FirstName, LastName, Phone, dob, Gender);


   document.getElementById("mail").value = "";
   document.getElementById("FirstName").value = "";
   document.getElementById("LastName").value = "";
   document.getElementById("phone").value = "";
   document.getElementById("dob").value = "";
   document.getElementsByName("Gender").value = "";
}
}
function preparetable(id, email, FirstName, LastName, Phone, dob, Gender) {

   let table = document.getElementById("regtable");
   let row = table.insertRow();
   let idcell = row.insertCell(0);
   let emailcell = row.insertCell(1);
   let FirstNamecell = row.insertCell(2);
   let LastNamecell = row.insertCell(3);
   let phonecell = row.insertCell(4);
   let dobcell = row.insertCell(5);
   let gencell = row.insertCell(6);


   emailcell.innerHTML = email;
   FirstNamecell.innerHTML = FirstName;
   LastNamecell.innerHTML = LastName;
   phonecell.innerHTML = Phone;
   dobcell.innerHTML = dob;
   gencell.innerHTML = Gender;
   idcell.innerHTML = id;
}