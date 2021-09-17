import './Header.css';

function Header() {
    return (
        <div className="header">
          <a href="#default" className="logo">BREAKING BAD</a>
          <div className="header-right">
            <a href="https://github.com/misima49/Breaking-BadDB">Source Code</a>
            <a href="https://internshala.com/uploads/chat-uploads/610f8e7501eac1628409461-49099.pdf">About</a>
            <a href="https://misima49.github.io/mrinal-portfolio">Contact</a>
          </div>
        </div>
    );
}

export default Header;