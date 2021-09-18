import React from 'react'

function ContactUs() {
  return (
    <div>
      
    </div>
  )
}

export default ContactUs

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="/assets/css/contact_us.css">
    <title>Contact Us</title>
    <script>
      function passvalues(){
        var name=document.getElementById('myrequired').value;
        localStorage.setItem('textvalue',name);
        return false;
      }
      function passvalues2(){
        var mail=document.getElementById('myemail').value;
        localStorage.setItem('textvalue2',mail);
        return false;
      }
      function passvalues3(){
        var num=document.getElementById('mynum').value;
        localStorage.setItem('textvalue3',num);
        return false;
      }
      function passvalues4(){
        var nat=document.getElementById('mynat').value;
        localStorage.setItem('textvalue4',nat);
        return false;
      }
      function passvalues5(){
        var ar=document.getElementById('myar').value;
        localStorage.setItem('textvalue5',ar);
        return false;
      }
    </script>
</head>
<body>
  <!-- <div class="container-fluid px-0">
    <div class="row">
      <div class="col-md-5 col-sm-4">
        <div class="left-image">
          <img class="alterra-logo mx-auto d-block" src="assets/img/logo-ALTA-v2@2x.png" alt="">
        </div>
        <form class="data-container col-md-7 col-sm-8" action="review_message.html">
          <p>Contact Us</p>
          <div class="row g-3">
            <div class="contact-form">
              <label for="myrequired" class="form-label my-1">Full name <span>*</span></label>
              <input type="text" class="form-control" id="myrequired" placeholder="Your full name here" required>
            </div>
            <div class="contact-form">
              <label for="myemail" class="form-label my-1">Email Address <span>*</span></label>
              <input type="text" class="form-control" id="myemail" placeholder="example@domain.com" required>
            </div>
            <div class="contact-form">
              <label for="mynum" class="form-label my-1">Phone Number <span>*</span></label>
              <input type="text" class="form-control" id="mynum" placeholder="08978467468" required>
            </div>
            <div class="contact-form">
              <label for="validationDefault04" class="form-label my-1">Nasionality <span>*</span></label>
              <select class="form-select btn-sm" id="validationDefault04">
                <option sected disabled value="">Selected</option>
                <option>Indonesian</option>
                <option>Australian</option>
                <option>German</option>
                <option>Japanese</option>
                <option>Italian</option>
                <option>Malaysian</option>
                <option>British</option>
                <option>Thai</option>
                <option>Other</option>
              </select>
            </div>
            <div class="contact-form">
              <label for="validationDefault05" class="form-label my-1">Message</label>
              <textarea type="text" class="form-control text-area" id="validationDefault05" placeholder="Your full name here"></textarea>
            </div>
            <div class="col-12">
              <a href="review_message.html" role="button" class="btn" onclick="passvalues(); passvalues2(); passvalues3(); passvalues4(); passvalues5();"></a>
            </div>   
            <div class="col-12">
              <button class="btn" type="submit">Submit</button>
            </div>
        </form> -->
        <div class="container-fluid px-0">
          <div class="row">
              <div class="col-md-5 col-sm-4">
                  <div class="left-image">
                      <img class="alterra-logo mx-auto d-block" src="assets/img/logo-ALTA-v2@2x.png" alt="">
                  </div>
              </div>
            <form role="form"  method="POST" action="/contact" data-toggle="validator"
              class="data-container col-md-7 col-sm-8">
                  <p>Contact Us</p>
                  <div class="row g-3">
                      <div class="contact-form">
                        <label for="myrequired" class="form-label my-1">Full name<span>*</span></label>
                        <input type="text" class="form-control" id="myrequired" placeholder="Your full name here" required>
                        
                       
  
                      <div class="contact-form">
                        <label for="myemail" class="form-label my-1">Email Address<span>*</span></label>
                        <input type="email" class="form-control" id="myemail" placeholder="example@domain.com" required>
                        
                        
                      </div>
                      <div class="contact-form">
                        <label for="mynum" class="form-label my-1">Phone Number<span>*</span></label>
                        <input type="number" class="form-control" id="mynum"  placeholder="08573890xxxxx" required>
                     
                      
  
                      <div class="contact-form">
                        <label for="validationDefault04" class="form-label my-1">Nationality</label>
                        <select class="form-select btn-sm" id="validationDefault04">
                          <option selected disabled value="">Selected</option>
                          <option>Indonesian</option>
                          <option>Australian</option>
                          <option>German</option>
                          <option>Japanese</option>
                          <option>Italian</option>
                          <option>Malaysian</option>
                          <option>British</option>
                          <option>Thai</option>
                          <option>Other</option>
                        </select>
                      </div>
  
                      <div class="contact-form">
                        <label for="validationDefault05" class="form-label my-1">Message</label>
                        <textarea type="text" class="form-control text-area" id="validationDefault05" placeholder="Your full name here"></textarea>
                       
                      <div class="col-12">
                        <button class="btn" type="submit">Submit</button>
                      </div>
                      <div class="col-12"> 
                      <a href="review_message.html" onclick="passvalues(); passvalues2(); passvalues3(); passvalues4(); passvalues5();"> </a>
                    </div>
                    </div>
                  </div>
                     
                  </form>
      </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.rawgit.com/PascaleBeier/bootstrap-validate/1.0.10/dist/bootstrap-validate.js"></script>
  <script>
    bootstrapValidate('#myrequired', 'required:Full name cannot be empty');
    bootstrapValidate('#myemail', 'email:Email addres cannot be empty, enter a valid email address');
    bootstrapValidate('#mynum', 'numeric:Phone number cannot be empty, numeric character only');
  </script>
</body>
</html>