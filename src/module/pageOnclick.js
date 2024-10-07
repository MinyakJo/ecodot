export const pageOnclick = ( id, now, totalPages ) => {

    if( !isNaN( Number( id ) ) && id ){
        return Number( id )
    }else if( id === "prev" ){
        if( now > 1){
            return now - 1
        }
    }else if( id === "next" ){
        if( now < totalPages ){
            return now + 1 
        }
    }

    return now
}