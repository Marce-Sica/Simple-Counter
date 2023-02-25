import React from "react";

const SecondsCounter = (props) => {
    let unidadSegundos = props.seconds
    let decenasSegundos = 0

    if(unidadSegundos > 9){
        unidadSegundos = 0
        decenasSegundos ++
        unidadSegundos = props.seconds -10 * decenasSegundos
    }

    return (<>
        <div className="container d-flex justify-content-center">
            <div className="row gap-4 d-flex">
                <div className="col btn btn-secondary btn-lg"><i class="fa-sharp fa-regular fa-clock"></i></div>
                <div className="col btn btn-secondary btn-lg"> {props.cienmilesSeconds} </div>
                <div className="col btn btn-secondary btn-lg"> {props.diezmilesSeconds} </div>
                <div className="col btn btn-secondary btn-lg"> {props.milesSeconds} </div>
                <div className="col btn btn-secondary btn-lg"> {props.centenaSeconds} </div>
                <div className="col btn btn-secondary btn-lg"> {props.decenaSeconds} </div>
                <div className="col btn btn-secondary btn-lg"> {props.seconds} </div>
            </div>
        </div>
    </>)
}

export default SecondsCounter;