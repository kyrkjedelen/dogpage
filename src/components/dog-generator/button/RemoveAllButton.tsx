
interface Props {
    removeAllDogs: () => void;
}

const RemoveAllButton: React.FC<Props> = ({ removeAllDogs }) => {
    return (
        <>
            <button onClick={removeAllDogs}>Remove all saved dogs</button>
        </>
    );
}

export default RemoveAllButton;

