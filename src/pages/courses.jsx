import { httpInterceptedService } from "@core/http-service";
import CoursesList from "../features/courses/components/course-list";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

const Courses = () => {
  //data in Await that point to promise
  const data = useLoaderData();

  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <a className="btn btn-primary fw-border">افزودن دوره جدید</a>
        </div>
        <Suspense
          fallback={<p className="text-info">در حال دریافت اطلاعات...</p>}
        >
          <Await resolve={data.courses}>
            {(loadedCourses) => <CoursesList courses={loadedCourses} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export async function coursesLoader() {
  return defer({
    courses: loadCourses(),
  });
}
const loadCourses = async () => {
  const response = await httpInterceptedService.get("/Course/list");
  return response.data;
};

export default Courses;
