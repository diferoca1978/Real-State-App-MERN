import { ReactNode } from 'react';

interface FormsLayoutProps {
  children: ReactNode;
  title: string;
}

export const FormsLayout: React.FunctionComponent<FormsLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-6 py-12 lg:px-8">
        <div className="border border-primary rounded-lg shadow-xl bg-secondary w-96 divide-y">
          <h2 className="ml-3 mt-3 mb-3 text-lg font-bold text-blueDark-800 ">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </>
  );
};
