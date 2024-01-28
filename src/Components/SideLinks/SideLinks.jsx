import "./SideLinks.scss";

function SideLinks() {
  return (
    <div className="sideLinks">
      <div className="container">
        <div className="icons">
          <a href="https://github.com/alanacalvo" target="_blank">
            <i class="devicon-github-original-wordmark"></i>
          </a>
          <a href="https://www.linkedin.com/in/alana-calvo/" target="_blank">
            <i class="devicon-linkedin-plain"></i>
          </a>
        </div>
        {/* <div className="hr">
          <hr></hr>
        </div> */}
      </div>
    </div>
  );
}

export default SideLinks;
