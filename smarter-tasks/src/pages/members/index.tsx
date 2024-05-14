import NewMember from "./NewMember";
import MemberList from "./MemberList";
import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";

const Members = () => {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium tracking-tight">Members</h2>
            <NewMember />
          </div>
          <div className="suspense-loading">
            <MemberList />
          </div>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default Members;
