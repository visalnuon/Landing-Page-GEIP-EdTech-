
import React from 'react';
import { Empty } from 'antd';

const MorePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <Empty
        description={
          <span className="text-base sm:text-lg text-gray-500">
            មិនមានទិន្នន័យសម្រាប់ទាញយកនៅឡើយទេ!
          </span>
        }
      />
    </div>
  );
};

export default MorePage;

  