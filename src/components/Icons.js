import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';                                                                                                                                                                                                                                                                                                                                                                                                                          

function Icons({onDelete, onEdit}) {
    return (
        <div className='icon-container flex gap-10 align-center'>
            <FontAwesomeIcon icon={faPenToSquare} className='edit' onClick={onEdit}/>
            <FontAwesomeIcon icon={faTrash} className='delete' onClick={onDelete}/>
        </div>
    );
}

export default Icons;