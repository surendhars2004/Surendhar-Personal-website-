import Errorimg from './image/error.png'
function error(){
    return(
        <div className="error-container">
            <img src={Errorimg} alt="" className="error-img" /> 
            <h1 className='error-desc'>This is Error page</h1>
        </div>
    )
}

export default error;