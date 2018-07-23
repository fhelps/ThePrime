import React from 'react';



const collapse = (props) => {   
    return (
    <div >
            <a className = "btn btn-primary" data-toggle="collapse" href="#jobs_collapse" role ="button" aria-controls="jobs_collapse">
                {props.innerText}
            </a>
            
            <div className="collapse mb-3" id="jobs_collapse">
                <div className="card card-body">
                    {props.children}
                </div>
            </div>
    </div>
    )
}

export default collapse;