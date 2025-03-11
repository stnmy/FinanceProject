
// type Props = {
//     config: any;
//     data : any;
// };


// const RatioList = ({config,data}: Props) => {
//     const renderedRow = config.map((row: any) =>{
//         return(
//             <li className="py-3 sm:py-4">
//                 <div className="flex items-center space-x-4">
//                     <div className="flex-1 min-w-8">
//                         <p className="text-sm font-medium text-gray-900 truncate">
//                             {row.Label}
//                         </p>
//                         <p className="text-sm text-gray-500 truncate">
//                             {row.subtitle}
//                         </p>
//                     </div>
//                     <div className="inline-flex item-center text-base font-semibold text-gray-900">
//                         {row.render(data)}
//                     </div>
//                 </div>
//             </li>
//         );
//     });
//   return (
//     <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 h-full">
//         <ul className="divide-y divided-gray-200">
//             {renderedRow}
//         </ul>
//     </div>
//   )
// }
// export default RatioList

import React from 'react';

type ConfigItem<T> = {
  label: React.ReactNode;
  render: (item: T) => React.ReactNode;
  subtitle?: string;
};

type Props<T> = {
  config: ConfigItem<T>[];
  data: T;
};

const RatioList = <T,>({ config, data }: Props<T>) => {
  const renderedRows = config.map((row, index) => (
    <li key={index} className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-8">
          <p className="text-sm font-medium text-gray-900 truncate">
            {row.label}
          </p>
          {row.subtitle && (
            <p className="text-sm text-gray-500 truncate">{row.subtitle}</p>
          )}
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900">
          {row.render(data)}
        </div>
      </div>
    </li>
  ));

  return (
    <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 h-full">
      <ul className="divide-y divide-gray-200">{renderedRows}</ul>
    </div>
  );
};

export default RatioList;