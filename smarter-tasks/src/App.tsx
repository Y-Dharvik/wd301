import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import { CommentProvider } from "./context/comment/context";
import { Suspense, useContext } from "react";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-full w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}
    >
      <ProjectsProvider>
        <MembersProvider>
          <CommentProvider>
            <Suspense fallback={<>Loading...</>}>
              <RouterProvider router={router} />
            </Suspense>
          </CommentProvider>
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
};
export default App;
