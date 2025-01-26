import React, { useEffect } from "react";

import { ToastContainer } from "react-toastify";

import { useUser } from "~hooks/useUser";
import ReferralForm from "~components/form/ReferralForm";
import ReferralTable from "~components/table/ReferralTable";

const App: React.FC = () => {

  const { getUsers } = useUser();

  useEffect(() => {
      getUsers();
    }, [getUsers]);

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center">
          <ReferralForm />
          <ReferralTable />
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
