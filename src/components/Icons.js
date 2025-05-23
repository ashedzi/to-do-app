import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';                                                                                                                                                                                                                                                                                                                                                                                                                          

function Icons({onDelete, onEdit}) {
    return (
        <div>
            <FontAwesomeIcon icon={faPenToSquare} className='edit' />
            <FontAwesomeIcon icon={faTrash} className='delete'  />
        </div>
    );
}

export default Icons;