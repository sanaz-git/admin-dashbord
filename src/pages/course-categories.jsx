import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { httpInterceptedService } from "@core/http-service";
import CategoriesList from "../features/categories/components/category-list";
import CategoryList from "../features/categories/components/category-list";

const CourseCategories = () => {
  const data = useLoaderData();
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <a className="btn btn-primary fw-border">افزودن دسته جدید</a>
        </div>
        <Suspense
          fallback={<p className="text-info">در حال دریافت اطلاعات...</p>}
        >
          <Await resolve={data.categoriesLoader}>
            {(loadedCategories) => (
              <CategoriesList categories={loadedCategories} />
            )}
          </Await>
        </Suspense>
        <Suspense
          fallback={<p className="text-info">در حال دریافت اطلاعات...</p>}
        >
          <Await resolve={data.categories}>
            {(loadedCategories) => (
              <CategoryList categories={loadedCategories} />
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export async function categoriesLoader() {
  return defer({
    categories: loadCategories(),
  });
}

const loadCategories = async () => {
  const response = await httpInterceptedService.get("/CourseCategory/sieve");
  return response.data;
};

export default CourseCategories;
