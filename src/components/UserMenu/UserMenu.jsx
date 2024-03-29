import { UseAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { FiUserCheck  } from 'react-icons/fi';
import { Button, UserMenuWrapper, UserName } from './UserMenu.styled';

const UserMenu = () => {
  const { user } = UseAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuWrapper>
      <UserName><FiUserCheck size="20" />  {user.name}</UserName>
      <Button type="button" onClick={handleLogOut}>
        <span>Logout</span> 
      </Button>
    </UserMenuWrapper>
  );
};

export default UserMenu;
