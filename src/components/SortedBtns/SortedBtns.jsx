import { useDispatch } from 'react-redux';
import { sortByName } from 'redux/contacts/contactSlice';
import { SortBtn, BtnWrapper } from './SortedBtns.styled';


const SortedBtns = () => {
	const dispatch = useDispatch();
  return (
    <BtnWrapper>
      <SortBtn onClick={() => dispatch(sortByName())}>
        Sort by name
      </SortBtn>     
    </BtnWrapper>
  );
};

export default SortedBtns;
