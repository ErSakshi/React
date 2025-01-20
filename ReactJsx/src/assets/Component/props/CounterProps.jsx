let CounterProps=(x)=>{
    console.log(x.children);  //! we can access it using children 
    
    return(
        <div>
            <h5>{x.children}</h5>
    <button onClick={()=>{x.data()}}>click</button>
        </div>
    )
}
export default CounterProps