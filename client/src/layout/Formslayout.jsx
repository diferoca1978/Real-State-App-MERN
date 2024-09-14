export const FormsLayout = ({ children, title }) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-6 py-12 lg:px-8">
        <div className="border border-primary rounded-lg shadow-xl bg-secondary p-2 max-w-7xl divide-y mx-auto">
          <h2 className="ml-3 mt-3 mb-3 text-lg font-bold sm:text-3xl ">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </>
  );
};
