function validate() {
  if( document.myForm.Name.value == "")
{
  alert( "Please provide your name!");
  document.myForm.Name.focus() ;
  return false;
}

if( document.myForm.Email.value == "" )
{
  alert( "Please provide your Email!");
  document.myForm.Email.focus() ;
  return false;
}

var emailID = document.myForm.Email.value;
atpos = emailID.indexOf("@");
dotpos = emailID.lastIndexOf(".");

if (atpos <1 || ( dotpos - atpos < 2 )) {
  alert("Please enter correct email ID")
  document.myForm.Postcode.focus() ;
  return false;
}

if( document.myForm.Choice.value == "-1")
{
  alert ( "Please provide a postcode in the format #### ###." );
  document.myForm.Postcode.focus() ;
  return false;
}

if( document.myForm.Choice.value == "-1" )
{
  alert( "Please select your choice!");
  return false;
}
return( true );
} 
