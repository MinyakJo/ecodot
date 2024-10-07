const listPushAfterSet = ( list, setState, data ) => {
    const copy = [ ...list ]

    copy.push( data )

    setState( copy )
}

export { listPushAfterSet }