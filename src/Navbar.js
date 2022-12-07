const Navbar = ({children}) => {
    return ( 
        <div className="navbar">
            <h1>The Zoda Blog</h1>
            <div className="links">
              <a href="/">Home</a>
              <a href="/create" style={{
                color:"black",
                backgroudColor:'#15e259b7',
                borderRadius:'8px'
              }}>New Blog </a>
{children}
              
            </div>
        </div>
     );
}
 
export default Navbar;