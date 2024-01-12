import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/UsersTable';


const Users = () => {
  return (
    <>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </>
  );
};

export default Users;
