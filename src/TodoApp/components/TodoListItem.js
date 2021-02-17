import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import { ListItem } from './StyledComponent';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return(
        <ListItem> 
           <div className={cn('checkbox', { checked })} onClick={(()=> onToggle(id))}>
               { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
               <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </ListItem>
    );
}


// 성능 최적화) React.memo -> props가 바뀔때만 리렌더링, 바뀌지 않으면 이전 상태 재사용
export default React.memo(TodoListItem);