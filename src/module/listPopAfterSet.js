const listPopAfterSet = ( list, setState ) => {
    const copy = [ ...list ]

    copy.pop()

    setState( copy )
}

export { listPopAfterSet }