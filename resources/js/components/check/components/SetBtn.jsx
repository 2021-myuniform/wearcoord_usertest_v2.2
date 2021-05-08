export const SetBtn = (props) => {
    const { onClickFetchCaps, onClickFetchTops } = props;

    return (
        <>
            <button onClick={onClickFetchCaps}>Caps</button>
            <br />
            <button onClick={onClickFetchTops}>Tops</button>
        </>
    )
}
