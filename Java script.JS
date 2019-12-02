function myFunction() {
  
 try {
  var fso = new ActiveXObject("Scripting.FileSystemObject");
var file = fso.CreateTextFile("D:\\testfile.txt", true);
var first_name=document.getElementById("firstname").value;
var secondname=document.getElementById("secondname").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var textarea=document.getElementById("textarea").value;
var country=document.getElementById("country").value;
file.WriteLine(first_name);
file.WriteLine(secondname);
file.WriteLine(email);
file.WriteLine(password);
file.WriteLine(textarea);
file.WriteLine(country)
file.Close();
alert("DONE");

 }
catch(err){
  var strErr = 'Error:';
  strErr += '\nNumber:' + err.number;
  strErr += '\nDescription:' + err.description;
  document.write(strErr);
 }

}