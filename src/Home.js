const Home =({IncNumber}) => {
    /*props.state={
        inc:0
    }
    function Add(){
      props.setState({inc:props.state+1});
    }*/
    return ( 
        <div className="home">
            <h2>Home page</h2>
            <div>
               <h1> {IncNumber}</h1>  
            </div>
        </div>
     );
}

 
export default Home;