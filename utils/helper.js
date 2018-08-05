export function validateDetail(data, globalState){
    let errors = {
      firstName: true,
      lastName:true,
      emailId: true,
      phone: true
    }

    if(data.phone){
      if(globalState.membersData[data.phone]){
        errors.phone="phone no. already exists";
        // return errors;
      }
      else{
        errors.phone=false;
      }
    }
    if(data.firstName){
      errors.firstName = false;
    }
    if(data.lastName){
      errors.lastName = false;
    }

    const userEmail = data.emailId || '';
    const emailReg = /\S+@\S+\.\S+/;
    const occurrence = userEmail.match(new RegExp('@', 'g')) || []; // occurrence of @
    if (!emailReg.test(userEmail) || occurrence.length > 1) {
      errors.emailId = true;
    }
    else{
      errors.emailId = false;
    }

    return errors;
  }