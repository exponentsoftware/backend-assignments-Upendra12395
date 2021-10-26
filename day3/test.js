function validateEmail(mail, phone) 
{
    let phoneNo = phone.toString()
    console.log(phoneNo.length, typeof(phoneNo))
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.match(mailformat) && phoneNo.length == 10)
  {
    return (true)
  }
    return (false)
}


console.log(validateEmail('ch95upendra@ghma.com', 7388452598))