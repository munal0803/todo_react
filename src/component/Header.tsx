import React from 'react';

type proptype = {
    name:string;
}
function Header(prop : proptype){
    return(
        <>
        <div>
            <h2>This is todo list of {prop.name}</h2>
        </div>
        </>
    );
}
export default Header;