import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="container my-3">
      <div class="mb-3">
  <h3>Email:</h3>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<h3>Password:</h3>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
<div class="mb-3">
  <h3>Want to say something to Us:</h3>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="d-grid gap-2 my-3">
  <button class="btn btn-primary" type="button">Submit</button>
  
</div>

</div>
    </>
  )
}
