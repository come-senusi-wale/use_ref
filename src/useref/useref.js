import React, {useRef} from "react";


export let Useref = () => {

    let refContaner = useRef(null);

    let refName = useRef(null);

    let handlerClick = (e) =>{
        e.preventDefault();

        console.log(refContaner.current.value);

        console.log(refName.current.className);
        
    }

    return(

        <>

        <form action="">

            <div>
                <input type="text" name="nmae" id="name" placeholder="name" ref={refContaner}/>
            </div>

            <button type="submit" onClick={handlerClick}> submit</button>
        </form>

        <div>
            <h2 className="wale" ref={refName}>hello useref</h2>
        </div>
        
        
        </>
    );
}