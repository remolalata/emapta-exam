import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "~store/index";

import ReferralTableRow from "~root/components/table/ReferralTable/row";

import { TABLE_HEAD_LABEL } from "~root/constants/label";

const ReferralTable: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.user);

  return (
    <div className="p-12 bg-white border border-gray-300 shadow-md">
      <div className="overflow-x-auto">
        <table className="referral-table w-full border-collapse">
          <thead>
            <tr>
              <th className="min-w-[150px] md:min-w-0 px-4 py-2">{TABLE_HEAD_LABEL.GIVEN_NAME}</th>
              <th className="min-w-[150px] md:min-w-0 px-4 py-2">{TABLE_HEAD_LABEL.SURNAME}</th>
              <th className="min-w-[150px] md:min-w-0 px-4 py-2">{TABLE_HEAD_LABEL.EMAIL}</th>
              <th className="min-w-[150px] md:min-w-0 px-4 py-2">{TABLE_HEAD_LABEL.PHONE}</th>
              <th className="min-w-[100px] md:min-w-0 px-4 py-2" align="center">
                {TABLE_HEAD_LABEL.ACTIONS}
              </th>
            </tr>
          </thead>
          <ReferralTableRow data={data} />
        </table>
      </div>
    </div>
  );
};

export default ReferralTable;
