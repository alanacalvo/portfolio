import './Contact.scss'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="container">
        <h1>Get in touch!</h1>
        <hr></hr>
        <p>Feel free to reach out with any opportunities,
          questions, or even if you just want to say hi! I'd love to connect.
          You can email me here at <a href="mailto:alanapcalvo@gmail.com">alanapcalvo@gmail.com</a>, or you can call me here at <a href="tel:386-315-5385">386-315-5385</a>.
          Hope to chat soon!</p>
      </div>
      <hr></hr>
      <div className="links">
        <a href="https://github.com/alanacalvo" target="_blank">
          <i class="devicon-github-original-wordmark"></i>
        </a>
        <a href="https://www.linkedin.com/in/alana-calvo/" target="_blank">
          <i class="devicon-linkedin-plain"></i>
        </a>
      </div>
    </div>
  )
}

export default Contact